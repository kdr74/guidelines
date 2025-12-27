#!/usr/bin/env python3
"""
Impella Guideline - Image Extraction Script
============================================

This script extracts all images from the Impella PDF and places them 
in the correct location for your HTML guideline.

Requirements:
- Python 3.6+
- PyMuPDF (fitz) library

Usage:
    python3 extract_impella_images.py
"""

import os
import sys

def check_dependencies():
    """Check if required libraries are installed."""
    try:
        import fitz
        print("✓ PyMuPDF (fitz) is installed")
        return True
    except ImportError:
        print("✗ PyMuPDF is not installed")
        print("\nTo install, run:")
        print("  pip3 install pymupdf")
        print("\nor:")
        print("  pip install pymupdf")
        return False

def extract_images():
    """Extract all images from the Impella PDF."""
    import fitz
    
    # Get the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Paths
    pdf_path = os.path.join(script_dir, "Impella_CP_Smart-Assist_Device.pdf")
    images_dir = os.path.join(script_dir, "images")
    
    # Check if PDF exists
    if not os.path.exists(pdf_path):
        print(f"\n✗ PDF not found at: {pdf_path}")
        print("\nPlease ensure 'Impella_CP_Smart-Assist_Device.pdf' is in the same directory as this script.")
        print(f"Current directory: {script_dir}")
        return False
    
    print(f"\n✓ Found PDF: {pdf_path}")
    
    # Create images directory
    os.makedirs(images_dir, exist_ok=True)
    print(f"✓ Images directory: {images_dir}")
    
    # Open PDF
    print("\nExtracting images from PDF...")
    doc = fitz.open(pdf_path)
    
    # Figure name mapping based on content
    figure_mapping = {
        # Page numbers are approximate - script will extract ALL images
        # and name the key ones appropriately
    }
    
    image_count = 0
    page_images = []
    
    # Extract all images first
    for page_num in range(len(doc)):
        page = doc[page_num]
        image_list = page.get_images()
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Save with page reference for now
            filename = f"page_{page_num+1}_img_{img_index+1}.{image_ext}"
            filepath = os.path.join(images_dir, filename)
            
            with open(filepath, "wb") as img_file:
                img_file.write(image_bytes)
            
            page_images.append({
                'page': page_num + 1,
                'index': img_index + 1,
                'filename': filename,
                'ext': image_ext
            })
            image_count += 1
    
    print(f"✓ Extracted {image_count} images from {len(doc)} pages")
    
    # Now intelligently rename key figures based on page numbers and content
    key_figures = [
        # (page_num, img_index, new_name, description)
        (4, 1, "figure_1_device.png", "Device Overview"),
        (5, 1, "figure_2_catheter.png", "Catheter Components"),
        (6, 1, "figure_3_console.png", "AIC Console"),
        (7, 1, "figure_4_p_levels.png", "P-Level Flow Rates"),
        (8, 1, "figure_5_waveforms.png", "Placement Screen Waveforms"),
        (11, 1, "figure_6_catheter_prep.png", "Catheter Preparation"),
        (21, 1, "figure_9_weaning.png", "Weaning Trends Screen"),
        (24, 1, "figure_10_ventricle.png", "Ventricular Placement Waveforms"),
        (25, 1, "figure_11_aorta.png", "Aortic Placement Waveforms"),
        (30, 1, "algorithm.png", "BHI Ventricular Support Algorithm"),
        (31, 1, "candidacy.png", "Candidacy Assessment"),
        (32, 1, "echo_positioning.png", "Echo Positioning"),
        (34, 1, "figure_12_perfusion1.png", "Distal Perfusion Part 1"),
        (34, 2, "figure_13_perfusion2.png", "Distal Perfusion Part 2"),
    ]
    
    renamed_count = 0
    print("\nRenaming key figures...")
    
    for page_num, img_idx, new_name, description in key_figures:
        old_name = f"page_{page_num}_img_{img_idx}.png"
        old_path = os.path.join(images_dir, old_name)
        
        # Also try jpeg extension
        if not os.path.exists(old_path):
            old_name = f"page_{page_num}_img_{img_idx}.jpeg"
            old_path = os.path.join(images_dir, old_name)
        
        if os.path.exists(old_path):
            new_path = os.path.join(images_dir, new_name)
            
            # If new name already exists (different extension), remove it
            if os.path.exists(new_path):
                os.remove(new_path)
            
            os.rename(old_path, new_path)
            print(f"  ✓ {new_name:30s} - {description}")
            renamed_count += 1
        else:
            print(f"  ⚠ Skipped {new_name:30s} - source not found")
    
    print(f"\n✓ Renamed {renamed_count} key figures")
    print(f"✓ Total images in folder: {len(os.listdir(images_dir))}")
    
    # Create a purge change images (from page 17-18)
    purge_images = []
    for i in range(1, 9):
        old_name = f"page_17_img_{i}.jpeg"
        old_path = os.path.join(images_dir, old_name)
        if os.path.exists(old_path):
            purge_images.append(old_name)
    
    if len(purge_images) >= 4:
        print("\nRenaming purge change procedure images...")
        for i, img in enumerate(purge_images[:4]):
            old_path = os.path.join(images_dir, img)
            new_name = f"purge_change_step{i+1}.png"
            new_path = os.path.join(images_dir, new_name)
            os.rename(old_path, new_path)
            print(f"  ✓ {new_name}")
    
    doc.close()
    
    print("\n" + "="*60)
    print("SUCCESS! All images extracted and organized.")
    print("="*60)
    print(f"\nImages location: {images_dir}")
    print("\nNext steps:")
    print("1. Open index.html in your browser")
    print("2. Navigate through the guideline to verify images display")
    print("3. All images should now load correctly!")
    
    return True

def main():
    """Main function."""
    print("="*60)
    print("Impella Guideline - Image Extraction")
    print("="*60)
    
    # Check dependencies
    if not check_dependencies():
        print("\nPlease install the required library and run again.")
        sys.exit(1)
    
    # Extract images
    if extract_images():
        sys.exit(0)
    else:
        sys.exit(1)

if __name__ == "__main__":
    main()
