# UHBW Critical Care Clinical Guidelines

Clinical guidelines and protocols for University Hospitals Bristol and Weston NHS Foundation Trust Critical Care units.

## Units Covered

- General ICU (A600)
- Cardiac ICU (C604)
- Weston ICU (WICU)

## Repository Structure
```
guidelines/
├── index.html                          # Main landing page
├── assets/
│   ├── css/
│   │   └── styles.css                  # Main stylesheet
│   ├── js/
│   │   └── search.js                   # Search functionality
│   └── images/                         # Images and logos
├── airway-respiratory/                 # Airway and respiratory guidelines
├── cardiovascular/                     # Cardiovascular guidelines
├── ecmo/                              # ECMO protocols
├── renal-metabolic/                   # Renal and metabolic guidelines
├── gastrointestinal-nutrition/        # GI and nutrition protocols
├── sedation-analgesia/                # Sedation and analgesia guidelines
├── neurology/                         # Neurological management
├── infection-microbiology/            # Infection control and antimicrobials
├── procedures/                        # Clinical procedures
└── operations/                        # Operational protocols
```

## Usage

### Local Development

1. Clone the repository
2. Open `index.html` in a browser or use a local server
3. Use VS Code Live Server extension for development

### Adding New Guidelines

1. Create HTML file in appropriate category folder
2. Follow NHS house style formatting
3. Update search index in `assets/js/search.js`
4. Commit and push changes

### Search Functionality

The search feature indexes all guidelines and allows real-time search across:
- Guideline titles
- Categories
- Keywords
- Content excerpts

### Styling Guidelines

All pages should follow NHS colour scheme and typography:
- Primary: NHS Blue (#005EB8)
- Font: Frutiger W01 / Helvetica Neue
- Consistent header/footer across all pages

## Deployment

The repository is hosted on GitHub and can be deployed via GitHub Pages:
1. Repository Settings → Pages
2. Source: Deploy from main branch
3. Access at: https://kdr74.github.io/guidelines/

## Maintenance

Guidelines should be reviewed and updated regularly based on:
- New clinical evidence
- Updated institutional protocols
- Feedback from clinical staff
- National guideline changes

## Version Control

All changes are tracked via Git commits. Include descriptive commit messages indicating:
- What was changed
- Why it was changed
- Relevant references or approvals

## Contact

For questions or suggestions regarding these guidelines:
- Kieron Rooney, Consultant in Intensive Care Medicine
- UHBW Critical Care

## License

For internal use by UHBW Critical Care staff only.

---

Last updated: December 2025
