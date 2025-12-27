# Gastrointestinal & Nutrition Guidelines

## Overview

This section contains comprehensive nutrition guidelines and interactive tools for nutritional support of critically ill adult patients at UHBW Critical Care units.

## Available Resources

### 1. ICU Nutrition Guidelines
**File:** `nutrition-guideline.html`  
**Type:** Interactive web-based guideline  
**Date:** December 2025  
**Setting:** Adult ICU (General ICU A600, Cardiac ICU C604, Weston ICU)

Comprehensive evidence-based nutrition guideline covering:

#### Nutritional Assessment
- NUTRIC score for nutrition risk assessment
- Anthropometric measurements (weight, height, BMI)
- Ideal body weight calculations
- Body composition assessment in obesity

#### Energy and Protein Requirements
- **Energy targets:** 
  - Standard: 25-30 kcal/kg/day
  - Obesity: use ideal body weight
  - Critical illness: consider indirect calorimetry
  - Penn State equations for ventilated patients

- **Protein targets:**
  - Standard: 1.2-2.0 g/kg/day
  - Critical illness: 1.5-2.0 g/kg/day
  - Obesity: 2.0-2.5 g/kg ideal body weight/day
  - Renal failure (no RRT): 0.8-1.0 g/kg/day
  - Renal failure (on RRT): 1.5-2.0 g/kg/day
  - Liver failure: individualized, typically 1.2-1.5 g/kg/day

#### Route of Feeding
- **Enteral Nutrition (preferred):**
  - Nasogastric (NG) feeding - first line
  - Orogastric (OG) feeding
  - Nasojejunal (NJ) feeding - for gastric intolerance
  - Orojejunal (OJ) feeding
  - Post-pyloric feeding indications

- **Parenteral Nutrition:**
  - Indications: enteral feeding contraindicated or inadequate
  - Central line placement required
  - Monitoring protocols
  - Complication prevention

#### Feeding Protocols
- Early enteral nutrition (within 24-48 hours)
- Feeding initiation and advancement
- Gastric residual volume management
- Feeding interruption protocols
- Prokinetic use (metoclopramide, erythromycin)

#### Specific Conditions
- **Sepsis and septic shock:** Early EN, avoid overfeeding
- **Acute kidney injury:** Protein adjustment based on RRT
- **Liver failure:** Branch-chain amino acid enriched feeds
- **Pancreatitis:** Enteral feeding preferred (NJ if severe)
- **Post-operative:** Early feeding protocols
- **Burns:** Significantly increased requirements

#### Refeeding Syndrome
- Risk assessment (NICE criteria)
- Prevention strategies
- Phosphate, potassium, magnesium monitoring
- Thiamine supplementation
- Management protocols

#### Micronutrients
- Vitamin supplementation protocols
- Trace element replacement
- Specific deficiency management (thiamine, vitamin C, vitamin D)

#### Immune-Modulating Nutrition
- Glutamine: evidence and indications
- Omega-3 fatty acids: ARDS and sepsis
- Arginine: controversial in sepsis
- Antioxidants: vitamin C, vitamin E, selenium

### 2. Nutrition Calculator
**File:** `nutrition-calculator.html`  
**Type:** Interactive clinical decision support tool  
**Size:** 128 KB

Advanced nutrition calculator with comprehensive tracking capabilities:

#### Core Calculations
- **Energy Requirements:**
  - Simple calculation: 25-30 kcal/kg
  - Penn State equation (ventilated patients)
  - Indirect calorimetry target entry
  - Obesity adjustments (ideal body weight)

- **Protein Requirements:**
  - Standard ICU patients: 1.2-2.0 g/kg
  - Adjusted for obesity (ideal body weight)
  - Adjusted for renal failure (with/without RRT)
  - Adjusted for liver disease
  - Burns and trauma calculations

- **Body Composition:**
  - BMI calculation
  - Ideal body weight (multiple formulas)
  - Obesity classification
  - Adjusted body weight for dosing

#### Daily Intake Tracking
- **Enteral Nutrition:**
  - Volume delivered (mL)
  - Feed concentration (kcal/mL)
  - Protein content (g/L)
  - Automatic energy and protein calculation

- **Parenteral Nutrition:**
  - Separate tracking from EN
  - Custom energy and protein values
  - Combined adequacy assessment

- **Propofol Nutrition:**
  - Automatic calculation (1.1 kcal/mL)
  - Included in total energy intake
  - Alerts for significant contribution

#### Multi-Day Cumulative Analysis
- **Running Totals:**
  - Cumulative energy delivered over multiple days
  - Cumulative protein delivered
  - Day-by-day breakdown
  - Running averages

- **Adequacy Assessment:**
  - Percentage of energy target achieved (daily and cumulative)
  - Percentage of protein target achieved (daily and cumulative)
  - Visual adequacy indicators (color-coded)
  - Trend analysis over time

#### Metabolic State Tracking
- **Fed/Fasted States:**
  - Current metabolic state (fed/fasted/transitioning)
  - Hours since last feed
  - Feeding interruption logging
  - Interruption reasons categorized:
    - Clinical (procedures, surgery, instability)
    - Gastrointestinal (intolerance, high GRV, vomiting)
    - Technical (tube issues, pump failure)
    - Patient factors (self-removal, agitation)

- **State Visualization:**
  - Timeline of fed/fasted periods
  - Interruption frequency analysis
  - Impact on cumulative adequacy

#### Visual Analytics
- **Charts and Graphs:**
  - Daily energy intake trends
  - Daily protein intake trends
  - Cumulative adequacy over time
  - Energy sources breakdown (EN vs PN vs propofol)
  - Protein adequacy trajectory

- **Export Capabilities:**
  - Print summaries for patient notes
  - Export data for audit
  - Generate feeding reports

#### Clinical Decision Support
- **Refeeding Risk Assessment:**
  - Automatic risk calculation (NICE criteria)
  - Phosphate monitoring recommendations
  - Initial feeding rate suggestions
  - Electrolyte replacement protocols

- **Feed Prescription Generator:**
  - Recommended feeding regimen
  - Volume and rate calculations
  - Energy and protein targets
  - Advancement schedule

- **Adequacy Alerts:**
  - Low energy intake warnings (<70% target)
  - Inadequate protein warnings (<80% target)
  - Overfeeding alerts (>110% target)
  - Propofol contribution alerts (>20% of energy)

## Recent Enhancements

### Multi-Day Cumulative Tracking
- Added ability to track nutrition over multiple days
- Running totals with daily breakdowns
- Cumulative adequacy percentages
- Visual trend analysis

### Metabolic State Monitoring
- Track fed vs fasted states over time
- Log feeding interruptions with categorized reasons
- Analyze impact of interruptions on nutrition delivery
- Timeline visualization of metabolic states

### Advanced Analytics
- Multi-source nutrition tracking (EN + PN + propofol)
- Automated adequacy assessment
- Trend identification over time
- Export capabilities for documentation

### Enhanced User Interface
- Tabbed interface for better organization
- Real-time calculation updates
- Color-coded adequacy indicators
- Improved mobile responsiveness

## Clinical Workflows

### Using the Guidelines
1. **Assessment:** NUTRIC score, anthropometrics, requirements calculation
2. **Route Selection:** Enteral vs parenteral decision tree
3. **Initiation:** Feeding start protocols, refeeding risk
4. **Monitoring:** Daily assessment, adequacy tracking
5. **Troubleshooting:** Intolerance management, feeding interruptions
6. **Optimization:** Adjust to meet targets, prevent complications

### Using the Calculator
1. **Setup:** Enter patient demographics and calculate requirements
2. **Daily Tracking:** Record all nutrition sources (EN/PN/propofol)
3. **Assessment:** Review daily and cumulative adequacy
4. **State Monitoring:** Log feeding interruptions and reasons
5. **Adjustment:** Use data to optimize feeding prescription
6. **Documentation:** Export summaries for clinical notes
7. **Audit:** Track performance over patient stay

## Integration with Main Repository

These resources are part of the UHBW Critical Care Guidelines repository:
- Main repository: `~/Developer/guidelines/`
- Section: `gastrointestinal-nutrition/`
- Searchable from main landing page
- Consistent NHS styling and navigation

## Access

### Via Landing Page
1. Navigate to main guidelines page
2. Click "Gastrointestinal/Nutrition" box
3. Access both guideline and calculator

### Direct Links
- Interactive Guideline: `gastrointestinal-nutrition/nutrition-guideline.html`
- Calculator: `gastrointestinal-nutrition/nutrition-calculator.html`
- Index: `gastrointestinal-nutrition/index.html`

## Technical Details

### Interactive Guideline
- **Format:** Single-file HTML
- **Size:** 128 KB
- **Technologies:** Pure JavaScript, responsive design
- **Compatibility:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Offline:** Works without internet after initial load

### Nutrition Calculator
- **Format:** Single-file HTML
- **Size:** 128 KB
- **Technologies:** JavaScript, Chart.js for visualizations
- **Features:** 
  - Real-time calculations
  - Multi-day data persistence (session storage)
  - Interactive charts and graphs
  - Export functionality
- **Compatibility:** Modern browsers with JavaScript enabled
- **Mobile:** Fully responsive for bedside use

## Key Clinical Points

### Energy Delivery
- Target 25-30 kcal/kg/day for most ICU patients
- Use ideal body weight for obese patients
- Consider indirect calorimetry for complex cases
- Avoid overfeeding (associated with worse outcomes)

### Protein Delivery
- Critical for muscle preservation and recovery
- Target 1.5-2.0 g/kg/day in most ICU patients
- Higher targets for burns, trauma, obese patients
- Adjust for renal and hepatic impairment

### Early Enteral Nutrition
- Initiate within 24-48 hours when possible
- Associated with reduced infections and better outcomes
- Post-pyloric feeding for high aspiration risk
- Tolerance improves with prokinetics if needed

### Refeeding Syndrome
- High-risk patients: prolonged fasting, low BMI, chronic illness
- Monitor phosphate, potassium, magnesium closely
- Start feeds at 50% target and advance slowly
- Thiamine supplementation essential

### Common Pitfalls
- Failure to account for propofol calories
- Not adjusting protein for obesity
- Overfeeding in early sepsis
- Missing refeeding risk
- Inadequate monitoring of adequacy

## Usage Guidelines

### For Clinicians
- Use guideline for evidence-based protocols
- Use calculator for daily bedside calculations
- Both tools designed to work together
- Regular adequacy assessment recommended

### For Dietitians
- Calculator supports comprehensive nutritional assessment
- Multi-day tracking aids in patient review
- Export function useful for ward rounds
- Cumulative data supports quality improvement

### For Audit
- Track energy and protein adequacy over time
- Identify barriers to nutrition delivery
- Analyze feeding interruption patterns
- Monitor compliance with targets

## Evidence Base

Guidelines based on:
- ESPEN Guidelines on Clinical Nutrition in the ICU (2019)
- ASPEN/SCCM Guidelines for Critically Ill Adults (2016)
- NICE Clinical Guideline CG32: Nutrition Support in Adults (2006)
- Canadian Clinical Practice Guidelines (2015)
- Evidence from major ICU nutrition trials (EDEN, EPaNIC, NUTRIREA-2)

## Support

For questions, suggestions, or reporting issues:
- **Clinical queries:** ICU nutrition team, dietitians
- **Technical issues:** UHBW Critical Care Guidelines repository
- **Feedback:** Contact clinical leads or ICU consultants

## License

For internal use by UHBW Critical Care staff only.  
Not for external distribution without permission.

---

**Last Updated:** December 2025  
**Maintained by:** UHBW Critical Care
