# Renal & Metabolic Guidelines

## Overview

This section contains comprehensive guidelines and interactive tools for renal replacement therapy and metabolic management in critically ill adult patients at UHBW Critical Care units.

## Available Resources

### 1. RRT Guidelines (2025)
**File:** `RRT-Guidelines-2025.pdf`  
**Version:** 2.2  
**Date:** December 2025  
**Author:** Dr Kieron Rooney, Consultant in Intensive Care Medicine  
**Review Date:** December 2028

Comprehensive 31-page reference guide covering:
- Continuous renal replacement therapy using citrate anticoagulation
- Fresenius MultiFiltrate Pro® system operation
- Filter selection (AV1000s vs EMiC2)
- CRRT modes (CVV-HD and CVV-HDF)
- Calcium and citrate management
- Electrolyte and acid-base management
- Troubleshooting protocols
- Filter membrane pore blockage recognition

### 2. RRT Calculators & Troubleshooting
**File:** `rrt-calculators-troubleshooting.html`  
**Type:** Interactive web-based tool  
**Date:** December 2025

Interactive clinical decision support tool featuring:

#### Patient Parameters
- Weight and height tracking
- Serum sodium monitoring
- Target correction rate selection

#### Interactive Calculators
- **Citrate Dose Calculator:** Automatic dosing based on blood flow (100-200 mL/min)
- **Calcium Management:** iCa²⁺ targets (1.12-1.20 mmol/L) with adjustment recommendations
- **Sodium Correction:** Interactive calculator for hypo/hypernatraemia
  - Calculates exact dialysate modification volumes
  - Supports Ci-Ca and MultiBic dialysate
  - Auto-recalculation on parameter changes
- **Acid-Base Calculator:** pH and bicarbonate management with flow recommendations
- **Clearance Calculator:** Automated clearance based on patient weight and flows

#### Citrate Troubleshooting
- Serial monitoring with automated graphing
- Tracks Na⁺, Cl⁻, K⁺, iCa²⁺, pH, HCO₃⁻, fluid removed
- **Filter Blockage Detection:** Early warning system
  - Detects trends in Na⁺ (+3 mmol/L), Cl⁻ (+3 mmol/L), iCa²⁺ (+0.05 mmol/L), HCO₃⁻ (+3 mmol/L)
  - Alert when 2 of 4 parameters trending upward
  - Absolute thresholds: Na >145, pH >7.48
  - Provides actionable management recommendations

## Recent Updates (Amendments 7 - December 2025)

### Modality Nomenclature
- Updated from CVVH/CVVHD to CVV-HD/CVV-HDF
- Aligns with standard CRRT terminology

### Sodium Correction Enhancement
- Auto-recalculation on any parameter change
- Live updates without button pressing
- Fixes hypertonic saline selection workflow
- All inputs trigger recalculation when results visible

### Troubleshooting Table Improvements
- Added Remove button to first row (all rows now deletable)
- Added Chloride (Cl⁻) column for complete electrolyte monitoring
- Enables anion gap calculation
- Tracks hyperchloraemic acidosis

### Graph Data Collection Fix
- Fixed issue where non-sequential row IDs weren't graphed
- All entered rows now display correctly
- Handles deleted rows properly

### Filter Blockage Detection (More Sensitive)
- **Previous thresholds:** Na +5, iCa +0.1, HCO₃ +5, ALL three required
- **New thresholds:** Na +3, iCa +0.05, HCO₃ +3, TWO of three required
- **Result:** Earlier detection, prevents severe alkalosis
- Lower absolute thresholds (Na >145 vs >150, pH >7.48 vs >7.5)

## Clinical Workflows

### Using the PDF Guidelines
1. Reference for complete protocols and procedures
2. Machine setup and priming instructions
3. Detailed management algorithms
4. Troubleshooting flowcharts
5. Comprehensive reference tables

### Using the Interactive Tool
1. **Real-time calculations** at the bedside
2. **Sodium correction planning** with live parameter adjustment
3. **Serial monitoring** with automated trend detection
4. **Filter blockage alerts** for early intervention
5. **Quick reference** without searching through PDF

## Integration with Main Repository

These resources are part of the UHBW Critical Care Guidelines repository:
- Main repository: `~/Developer/guidelines/`
- Section: `renal-metabolic/`
- Searchable from main landing page
- Consistent NHS styling and navigation

## Access

### Via Landing Page
1. Navigate to main guidelines page
2. Click "Renal & Metabolic" box
3. Access both PDF and interactive tool

### Direct Links
- PDF: `renal-metabolic/RRT-Guidelines-2025.pdf`
- Interactive Tool: `renal-metabolic/rrt-calculators-troubleshooting.html`
- Index: `renal-metabolic/index.html`

## Technical Details

### PDF Guidelines
- **Format:** PDF with clickable contents page
- **Size:** 292 KB
- **Pages:** 31
- **Features:** "Return to Contents" links on every page

### Interactive Tool
- **Format:** Single-file HTML (no dependencies)
- **Size:** 217 KB
- **Technologies:** Pure JavaScript, Chart.js (CDN), NHS colour scheme
- **Compatibility:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Offline:** Works without internet after initial load

## Usage Guidelines

### For Clinicians
- Use PDF for comprehensive learning and protocol reference
- Use interactive tool for bedside calculations and monitoring
- Both resources complement each other

### For Training
- PDF suitable for teaching sessions and handouts
- Interactive tool excellent for case-based scenarios
- Demonstrates filter blockage patterns visually

### For Audit
- Interactive tool tracks parameters over time
- Graph exports available for documentation
- Supports quality improvement initiatives

## Version Control

### RRT Guidelines PDF
- **Current Version:** 2.2
- **Date:** December 2025
- **Review Date:** December 2028
- Changes tracked in document header

### Interactive Tool
- **Amendment Level:** 7
- **Implementation Date:** December 2025
- Changes documented in `Amendments_7_Implementation_Summary.txt`

## Support

For questions, suggestions, or reporting issues:
- **Clinical queries:** Dr Kieron Rooney, Consultant in ICM
- **Technical issues:** UHBW Critical Care Guidelines repository
- **Feedback:** Use GitHub issues or contact clinical lead

## License

For internal use by UHBW Critical Care staff only.  
Not for external distribution without permission.

---

**Last Updated:** December 2025  
**Maintained by:** Dr Kieron Rooney, Consultant in Intensive Care Medicine
