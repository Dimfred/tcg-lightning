#!/bin/bash

# Script to convert PNGs to JPEGs and create a combined image showing
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

# Convert all PNGs to JPEGs in the screenshots directory
echo "Converting PNGs to JPEGs..."
for png in "$WORK_DIR"/*.png; do
    if [ -f "$png" ]; then
        jpeg="${png%.png}.jpg"
        magick "$png" "$jpeg"
        echo "Converted: $(basename "$png") -> $(basename "$jpeg")"
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

# Check if required images exist
NATURAL_1="$WORK_DIR/natural-to-scryfall-1.jpg"
NATURAL_2="$WORK_DIR/natural-to-scryfall-2.jpg"
OUTPUT="$WORK_DIR/combined.jpg"

if [ ! -f "$NATURAL_1" ]; then
    echo "Error: natural-to-scryfall-1.jpg not found"
    exit 1
fi

if [ ! -f "$NATURAL_2" ]; then
    echo "Error: natural-to-scryfall-2.jpg not found"
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
    "$WORK_DIR/arrow.jpg"

# Combine images vertically: natural_1, arrow, natural_2
magick "$NATURAL_1" "$WORK_DIR/arrow.jpg" "$NATURAL_2" \
    -background black \
    -append \
    "$OUTPUT"

# Clean up temporary arrow image
rm "$WORK_DIR/arrow.jpg"

echo "Combined image created: $OUTPUT"
echo "Done!"
