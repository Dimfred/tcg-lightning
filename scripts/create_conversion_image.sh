#!/bin/bash

# Script to convert PNGs to WebP and create a combined image showing
# natural language to Scryfall syntax conversion

set -e

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "Error: ImageMagick is not installed. Please install it first."
    exit 1
fi

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
WORK_DIR="${WORK_DIR:-$PROJECT_ROOT/static/screenshots}"

echo "Working in directory: $WORK_DIR"

# List of screenshot PNGs to convert and delete (excluding logos)
SCREENSHOTS_TO_CONVERT=()

# Convert all PNGs to WebP in the screenshots directory
echo "Converting PNGs to WebP..."
for png in "$WORK_DIR"/*.png; do
    if [ -f "$png" ]; then
        webp="${png%.png}.webp"
        magick "$png" -quality 80 "$webp"
        echo "Converted: $(basename "$png") -> $(basename "$webp")"
        # Add to deletion list (only screenshots in this directory, not logos elsewhere)
        SCREENSHOTS_TO_CONVERT+=("$png")
    fi
done

# Delete the converted screenshot PNGs
if [ ${#SCREENSHOTS_TO_CONVERT[@]} -gt 0 ]; then
    echo "Deleting converted screenshot PNGs..."
    for png in "${SCREENSHOTS_TO_CONVERT[@]}"; do
        rm "$png"
        echo "Deleted: $(basename "$png")"
    done
fi

# Check if required images exist (try webp first, fall back to jpg for legacy)
NATURAL_1="$WORK_DIR/natural-to-scryfall-1.webp"
NATURAL_2="$WORK_DIR/natural-to-scryfall-2.webp"
OUTPUT="$WORK_DIR/combined.webp"

# Fall back to jpg if webp doesn't exist yet
if [ ! -f "$NATURAL_1" ] && [ -f "$WORK_DIR/natural-to-scryfall-1.jpg" ]; then
    NATURAL_1="$WORK_DIR/natural-to-scryfall-1.jpg"
fi
if [ ! -f "$NATURAL_2" ] && [ -f "$WORK_DIR/natural-to-scryfall-2.jpg" ]; then
    NATURAL_2="$WORK_DIR/natural-to-scryfall-2.jpg"
fi

if [ ! -f "$NATURAL_1" ]; then
    echo "Error: natural-to-scryfall-1.webp not found"
    exit 1
fi

if [ ! -f "$NATURAL_2" ]; then
    echo "Error: natural-to-scryfall-2.webp not found"
    exit 1
fi

echo "Creating combined image with arrow..."

# Get dimensions of the first image
WIDTH=$(magick identify -format "%w" "$NATURAL_1")
HEIGHT=$(magick identify -format "%h" "$NATURAL_1")

# Arrow height (space between images)
ARROW_HEIGHT=100

# Create the arrow on black background
magick -size ${WIDTH}x${ARROW_HEIGHT} xc:black \
    -fill white -stroke white -strokewidth 3 \
    -draw "line $((WIDTH/2)),20 $((WIDTH/2)),$((ARROW_HEIGHT-30))" \
    -draw "line $((WIDTH/2)),$((ARROW_HEIGHT-30)) $((WIDTH/2-15)),$((ARROW_HEIGHT-45))" \
    -draw "line $((WIDTH/2)),$((ARROW_HEIGHT-30)) $((WIDTH/2+15)),$((ARROW_HEIGHT-45))" \
    /tmp/arrow.png

# Combine images vertically: natural_1, arrow, natural_2
magick "$NATURAL_1" /tmp/arrow.png "$NATURAL_2" \
    -background black \
    -append \
    -quality 80 \
    "$OUTPUT"

# Clean up temporary arrow image
rm /tmp/arrow.png

echo "Combined image created: $OUTPUT"
echo "Done!"
