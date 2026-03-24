#!/bin/bash

# Script to convert images from static-original/ to optimized WebP in static/
# - screenshots: quality 80, generates 640w mobile variant (-sm suffix)
# - blog images: quality adjusted to stay under MAX_SIZE_KB
# - logo: quality 75 with resize for display sizes

set -e

if ! command -v magick &> /dev/null; then
    echo "Error: ImageMagick is not installed. Please install it first."
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SRC_DIR="$PROJECT_ROOT/static-original"
DEST_DIR="$PROJECT_ROOT/static"

MAX_SIZE_KB=200
MOBILE_WIDTH=640

# Convert a single image to WebP with a target max file size
# Usage: convert_image <src_path> <dest_path> <quality> [max_width]
convert_image() {
    local src="$1"
    local dest="$2"
    local quality="$3"
    local max_width="${4:-}"

    local resize_flag=""
    if [ -n "$max_width" ]; then
        resize_flag="-resize ${max_width}x>"
    fi

    magick "$src" $resize_flag -quality "$quality" "$dest"

    local size_kb
    size_kb=$(( $(wc -c < "$dest") / 1024 ))

    # If over max size, reduce quality iteratively
    while [ "$size_kb" -gt "$MAX_SIZE_KB" ] && [ "$quality" -gt 50 ]; do
        quality=$((quality - 5))
        magick "$src" $resize_flag -quality "$quality" "$dest"
        size_kb=$(( $(wc -c < "$dest") / 1024 ))
    done

    echo "  $(basename "$src") -> $(basename "$dest") (${size_kb}KB, q=${quality})"
}

# Convert screenshots with mobile variants
convert_screenshots() {
    local src_dir="$SRC_DIR/screenshots"
    local dest_dir="$DEST_DIR/screenshots"

    if [ ! -d "$src_dir" ]; then
        echo "  No screenshots source directory, skipping."
        return
    fi

    mkdir -p "$dest_dir"

    local found=false
    for img in "$src_dir"/*.{png,jpg,jpeg}; do
        if [ ! -f "$img" ]; then
            continue
        fi
        found=true
        local basename="${img##*/}"
        local name="${basename%.*}"
        local dest="$dest_dir/${name}.webp"
        local dest_sm="$dest_dir/${name}-sm.webp"

        # Full size
        convert_image "$img" "$dest" 80

        # Mobile variant (640w)
        convert_image "$img" "$dest_sm" 80 "$MOBILE_WIDTH"
    done

    if [ "$found" = false ]; then
        echo "  No source images found, skipping."
    fi

    # Recreate combined image
    local natural_1=""
    local natural_2=""

    if [ -f "$dest_dir/natural-to-scryfall-1.webp" ]; then
        natural_1="$dest_dir/natural-to-scryfall-1.webp"
    elif [ -f "$src_dir/natural-to-scryfall-1.jpg" ]; then
        natural_1="$src_dir/natural-to-scryfall-1.jpg"
    fi

    if [ -f "$dest_dir/natural-to-scryfall-2.webp" ]; then
        natural_2="$dest_dir/natural-to-scryfall-2.webp"
    elif [ -f "$src_dir/natural-to-scryfall-2.jpg" ]; then
        natural_2="$src_dir/natural-to-scryfall-2.jpg"
    fi

    if [ -n "$natural_1" ] && [ -n "$natural_2" ]; then
        echo "  === Combined image ==="
        local width
        width=$(magick identify -format "%w" "$natural_1")
        local arrow_height=100

        magick -size ${width}x${arrow_height} xc:black \
            -fill white -stroke white -strokewidth 3 \
            -draw "line $((width/2)),20 $((width/2)),$((arrow_height-30))" \
            -draw "line $((width/2)),$((arrow_height-30)) $((width/2-15)),$((arrow_height-45))" \
            -draw "line $((width/2)),$((arrow_height-30)) $((width/2+15)),$((arrow_height-45))" \
            /tmp/arrow.png

        magick "$natural_1" /tmp/arrow.png "$natural_2" \
            -background black \
            -append \
            -quality 80 \
            "$dest_dir/combined.webp"

        # Mobile variant of combined
        magick "$natural_1" /tmp/arrow.png "$natural_2" \
            -background black \
            -append \
            -resize ${MOBILE_WIDTH}x\> \
            -quality 80 \
            "$dest_dir/combined-sm.webp"

        rm /tmp/arrow.png
        echo "  Combined image created"
    fi

    # Recreate symlinks
    ln -sf overview.webp "$dest_dir/deck-builder.webp"
    ln -sf overview-sm.webp "$dest_dir/deck-builder-sm.webp"
    ln -sf combined.webp "$dest_dir/card-search.webp"
    ln -sf combined-sm.webp "$dest_dir/card-search-sm.webp"
    echo "  Symlinks updated"
}

# Convert blog images
convert_blog() {
    for src_blog_dir in "$SRC_DIR"/blog-*/; do
        if [ ! -d "$src_blog_dir" ]; then
            continue
        fi

        local dirname
        dirname=$(basename "$src_blog_dir")
        local dest_blog_dir="$DEST_DIR/$dirname"
        mkdir -p "$dest_blog_dir"

        echo "=== $dirname ==="
        local found=false
        for img in "$src_blog_dir"/*.{png,jpg,jpeg}; do
            if [ ! -f "$img" ]; then
                continue
            fi
            found=true
            local basename="${img##*/}"
            local name="${basename%.*}"
            convert_image "$img" "$dest_blog_dir/${name}.webp" 90
        done

        if [ "$found" = false ]; then
            echo "  No source images found, skipping."
        fi
    done
}

# Convert logo
convert_logo() {
    local src="$SRC_DIR/logo_full.png"
    if [ ! -f "$src" ]; then
        echo "  No logo source, skipping."
        return
    fi

    convert_image "$src" "$DEST_DIR/logo_full.webp" 75
}

echo "=== Screenshots ==="
convert_screenshots

echo "=== Blog ==="
convert_blog

echo "=== Logo ==="
convert_logo

echo "Done!"
