#!/bin/bash

# Script to convert PNGs to WebP in static/ directories
# - screenshots: quality 80 (small UI images)
# - blog images: quality adjusted to stay under MAX_SIZE_KB

set -e

if ! command -v magick &> /dev/null; then
    echo "Error: ImageMagick is not installed. Please install it first."
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
STATIC_DIR="$PROJECT_ROOT/static"

MAX_SIZE_KB=200

# Convert a single PNG to WebP with a target max file size
# Usage: convert_png <png_path> <quality>
convert_png() {
    local png="$1"
    local quality="$2"
    local webp="${png%.png}.webp"

    magick "$png" -quality "$quality" "$webp"

    local size_kb
    size_kb=$(( $(wc -c < "$webp") / 1024 ))

    # If over max size, reduce quality iteratively
    while [ "$size_kb" -gt "$MAX_SIZE_KB" ] && [ "$quality" -gt 50 ]; do
        quality=$((quality - 5))
        magick "$png" -quality "$quality" "$webp"
        size_kb=$(( $(wc -c < "$webp") / 1024 ))
    done

    echo "  $(basename "$png") -> $(basename "$webp") (${size_kb}KB, q=${quality})"
    rm "$png"
}

# Convert screenshots at quality 80
convert_dir() {
    local dir="$1"
    local quality="$2"
    local found=false

    for png in "$dir"/*.png; do
        if [ -f "$png" ]; then
            found=true
            convert_png "$png" "$quality"
        fi
    done

    if [ "$found" = false ]; then
        echo "  No PNGs found, skipping."
    fi
}

# --- Screenshots ---
echo "=== Screenshots ==="
convert_dir "$STATIC_DIR/screenshots" 80

# --- Blog directories ---
for blog_dir in "$STATIC_DIR"/blog-*/; do
    if [ -d "$blog_dir" ]; then
        echo "=== $(basename "$blog_dir") ==="
        convert_dir "$blog_dir" 90
    fi
done

# --- Combined image (screenshots specific) ---
NATURAL_1="$STATIC_DIR/screenshots/natural-to-scryfall-1.webp"
NATURAL_2="$STATIC_DIR/screenshots/natural-to-scryfall-2.webp"
OUTPUT="$STATIC_DIR/screenshots/combined.webp"

if [ ! -f "$NATURAL_1" ] && [ -f "$STATIC_DIR/screenshots/natural-to-scryfall-1.jpg" ]; then
    NATURAL_1="$STATIC_DIR/screenshots/natural-to-scryfall-1.jpg"
fi
if [ ! -f "$NATURAL_2" ] && [ -f "$STATIC_DIR/screenshots/natural-to-scryfall-2.jpg" ]; then
    NATURAL_2="$STATIC_DIR/screenshots/natural-to-scryfall-2.jpg"
fi

if [ -f "$NATURAL_1" ] && [ -f "$NATURAL_2" ]; then
    echo "=== Combined image ==="
    WIDTH=$(magick identify -format "%w" "$NATURAL_1")
    ARROW_HEIGHT=100

    magick -size ${WIDTH}x${ARROW_HEIGHT} xc:black \
        -fill white -stroke white -strokewidth 3 \
        -draw "line $((WIDTH/2)),20 $((WIDTH/2)),$((ARROW_HEIGHT-30))" \
        -draw "line $((WIDTH/2)),$((ARROW_HEIGHT-30)) $((WIDTH/2-15)),$((ARROW_HEIGHT-45))" \
        -draw "line $((WIDTH/2)),$((ARROW_HEIGHT-30)) $((WIDTH/2+15)),$((ARROW_HEIGHT-45))" \
        /tmp/arrow.png

    magick "$NATURAL_1" /tmp/arrow.png "$NATURAL_2" \
        -background black \
        -append \
        -quality 80 \
        "$OUTPUT"

    rm /tmp/arrow.png
    echo "  Combined image created: $(basename "$OUTPUT")"
fi

echo "Done!"
