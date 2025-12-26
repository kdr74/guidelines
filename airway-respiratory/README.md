# Airway & Respiratory Guidelines

## Overview

This section contains clinical guidelines and interactive tools for airway management, respiratory support, and pulmonary conditions in critically ill adult patients at UHBW Critical Care units.

## Available Resources

### 1. Investigation and Management of Pulmonary Embolism
**File:** `PE-Guidelines-UHBW.pdf`  
**Version:** 4.4  
**Valid:** October 2024 – August 2026  
**Setting:** Trust-wide (ED, inpatients, ICU)  
**Authors:** Ben Jeffs (Acute Med), Palash Barman (Cardiology), Rosty Behzhuly (ED), Ryan Krech (ED), Randeep Kulshrethra (Radiology), Andrew Wilson (Respiratory), Adrian Clarke (ICU), Anne Frampton (VTE lead)

Comprehensive 11-page clinical guideline covering:

#### Investigation Protocols
- Two-level Wells Score for PE probability assessment
- Pulmonary Embolism Rule-Out Criteria (PERC)
- D-dimer testing with age-adjusted thresholds
- Imaging modality selection (CTPA vs V/Q SPECT)
- Outpatient investigation pathways

#### Risk Stratification
- **High Risk (Massive PE):** Shock or persistent hypotension (>15% mortality)
- **Intermediate Risk (Submassive PE):** RV dysfunction or myocardial injury (3-15% mortality)
- **Low Risk:** sPESI = 0 (<3% mortality)

#### Treatment Protocols
- **Thrombolysis:** Alteplase dosing for high-risk PE
- **Catheter Thrombectomy:** Referral criteria and pathways
- **Anticoagulation:** 
  - Apixaban 10mg BD for 7 days, then 5mg BD
  - Rivaroxaban 15mg BD for 21 days, then 20mg OD
  - Enoxaparin 1mg/kg BD for specific populations

#### Special Populations
- Renal impairment (eGFR <30 mL/min)
- Active malignancy
- Pregnancy and puerperium (separate guideline)
- Weight >150kg

#### Follow-up
- Haematology clinic referrals
- Echocardiography at 3 months
- GP follow-up for provoked PE
- Thrombosis nurse review within 24 hours

### 2. PE Interactive Management Tool
**File:** `pe-interactive-management-tool.html`  
**Type:** Interactive web-based clinical decision support tool

Interactive calculator and decision support system featuring:

#### Clinical Calculators
- **Wells Score Calculator:** Real-time probability assessment
  - Automatic scoring of clinical criteria
  - Instant PE likelihood classification (likely/unlikely)
  - Clear next-step recommendations

- **PERC Criteria Checker:** Ultra-low risk rule-out
  - 8-point checklist
  - Automatic interpretation
  - D-dimer testing guidance

- **sPESI Calculator:** Outpatient suitability assessment
  - 6-point scoring system
  - Admission criteria evaluation
  - Special consideration flags (renal, weight, bleeding risk)

#### Risk Stratification Tools
- Automatic classification into risk categories
- Visual risk level indicators
- Mortality risk percentages
- PESI score integration

#### Treatment Guidance
- **Thrombolysis Decision Support:**
  - Absolute and relative contraindication checkers
  - Alteplase dosing calculator (weight-based)
  - Cardiac arrest dosing protocols
  - Unfractionated heparin infusion guidance

- **Anticoagulation Dosing:**
  - Weight-based LMWH calculations
  - DOAC dosing schedules
  - Renal dose adjustments
  - Duration recommendations

- **Catheter Thrombectomy Criteria:**
  - High-risk referral pathways
  - Intermediate-risk assessment
  - Contact information

#### Follow-up Planning
- Automated pathway recommendations
- Clinic referral criteria
- Echocardiography scheduling
- GP communication guidance

## Clinical Workflows

### Using the PDF Guidelines
1. **Initial Assessment:** Wells Score and PERC criteria algorithms
2. **Investigation:** Imaging decision flowcharts
3. **Risk Stratification:** Classification and severity assessment
4. **Treatment:** Detailed protocols for each risk level
5. **Discharge:** Outpatient criteria and safety checks
6. **Follow-up:** Comprehensive follow-up pathways

### Using the Interactive Tool
1. **Rapid Assessment:** Calculate Wells and sPESI at bedside
2. **Decision Support:** Real-time treatment recommendations
3. **Dosing:** Accurate weight-based calculations
4. **Safety Checks:** Contraindication screening
5. **Documentation:** Print/save calculations for notes

## Integration with Main Repository

These resources are part of the UHBW Critical Care Guidelines repository:
- Main repository: `~/Developer/guidelines/`
- Section: `airway-respiratory/`
- Searchable from main landing page
- Consistent NHS styling and navigation

## Access

### Via Landing Page
1. Navigate to main guidelines page
2. Click "Airway & Respiratory" box
3. Access both PDF and interactive tool

### Direct Links
- PDF: `airway-respiratory/PE-Guidelines-UHBW.pdf`
- Interactive Tool: `airway-respiratory/pe-interactive-management-tool.html`
- Index: `airway-respiratory/index.html`

## Technical Details

### PDF Guidelines
- **Format:** PDF with flowcharts and decision algorithms
- **Size:** 268 KB
- **Pages:** 11
- **Features:** Color-coded risk pathways, comprehensive tables

### Interactive Tool
- **Format:** Single-file HTML (no dependencies)
- **Size:** 109 KB
- **Technologies:** Pure JavaScript, responsive design
- **Compatibility:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Offline:** Works without internet after initial load

## Key Clinical Points

### Investigation
- PERC criteria can rule out PE in low-risk patients without D-dimer
- Age-adjusted D-dimer: (age × 10) µg/L for patients >50 years
- V/Q SPECT preferred for young females and renal impairment
- CTPA is first-line for most patients

### Treatment
- High-risk PE requires immediate thrombolysis or thrombectomy
- Intermediate-risk PE: anticoagulation with close monitoring
- Low-risk PE: suitable for outpatient management if sPESI = 0
- Duration: minimum 3 months, consider long-term for unprovoked PE

### Safety
- Thrombolysis contraindications must be carefully assessed
- Renal impairment requires dose adjustment or LMWH
- Weight >150kg requires haematology discussion
- All high-risk patients need senior review

## Usage Guidelines

### For Clinicians
- Use PDF for comprehensive protocols and algorithms
- Use interactive tool for bedside calculations
- Both resources designed to work together

### For Training
- PDF suitable for teaching sessions
- Interactive tool excellent for case-based learning
- Demonstrates risk stratification visually

### For Audit
- Clear documentation of decision-making
- Standardized approach across trust
- Supports quality improvement

## Version Control

### PE Guidelines PDF
- **Current Version:** 4.4
- **Valid Period:** October 2024 – August 2026
- **Review Date:** August 2026
- Changes tracked in document header

### Interactive Tool
- **Version:** Based on v4.4 guideline
- Maintained in parallel with PDF guideline

## References

1. British Thoracic Society Guideline for the initial outpatient management of pulmonary embolism. Thorax, 2018 73: S2
2. Venous thromboembolic diseases: diagnosis, management and thrombophilia testing. NICE guideline NG158, March 2020
3. Pulmonary Embolism: NICE clinical knowledge summary

## Support

For questions, suggestions, or reporting issues:
- **Clinical queries:** Contact authors listed in guideline
- **VTE Lead:** Anne Frampton (ext. 24684)
- **Thrombosis Nurses:** Bristol ext. 24684
- **Technical issues:** UHBW Critical Care Guidelines repository

## License

For internal use by UHBW staff only.  
Not for external distribution without permission.

---

**Last Updated:** December 2025  
**Guideline Valid:** October 2024 – August 2026
