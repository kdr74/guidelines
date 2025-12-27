#!/bin/bash
# Keep only the key images, delete the rest

cd ~/Developer/guidelines/cardiovascular/impella/images

echo "Keeping only key images and moving extras to backup..."

# Create backup folder
mkdir -p _backup_extra_images

# List of images to KEEP
keep_images=(
    "figure_1_device.png"
    "figure_2_catheter.png"
    "figure_3_console.png"
    "figure_4_p_levels.png"
    "figure_5_waveforms.png"
    "figure_6_catheter_prep.png"
    "figure_9_weaning.png"
    "figure_10_ventricle.png"
    "figure_11_aorta.png"
    "algorithm.png"
    "candidacy.png"
    "echo_positioning.png"
    "figure_12_perfusion1.png"
    "figure_13_perfusion2.png"
)

# Move all page_* images to backup
moved=0
for file in page_*.{png,jpeg,jpg} 2>/dev/null; do
    [ -e "$file" ] && mv "$file" _backup_extra_images/ && ((moved++))
done

echo "✓ Moved $moved extra images to _backup_extra_images/"
echo "✓ Kept 14 key images in images/"
echo ""
echo "Key images remaining:"
ls -1 | grep -v "_backup"

