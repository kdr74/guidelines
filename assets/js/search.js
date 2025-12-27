// Search functionality for UHBW Critical Care Guidelines
// Guideline index - populated with actual guidelines
const guidelineIndex = [
    {
        title: "Investigation and Management of Pulmonary Embolism",
        url: "airway-respiratory/PE-Guidelines-UHBW.pdf",
        category: "Airway & Respiratory",
        keywords: ["pulmonary", "embolism", "pe", "dvt", "wells", "perc", "thrombolysis", "alteplase", "ctpa", "anticoagulation", "apixaban", "rivaroxaban", "enoxaparin", "thrombectomy", "vte", "spesi"],
        excerpt: "Trust-wide guideline for investigation and management of pulmonary embolism. Covers Wells Score, PERC criteria, risk stratification, thrombolysis protocols, anticoagulation, and follow-up pathways."
    },
    {
        title: "PE Interactive Management Tool",
        url: "airway-respiratory/pe-interactive-management-tool.html",
        category: "Airway & Respiratory",
        keywords: ["pulmonary", "embolism", "pe", "calculator", "wells", "score", "perc", "spesi", "thrombolysis", "dosing", "anticoagulation", "risk", "interactive"],
        excerpt: "Interactive clinical decision support tool for PE management. Features Wells Score calculator, PERC criteria, sPESI calculator, thrombolysis decision support, and anticoagulation dosing."
    },
    {
        title: "Airway & Respiratory Guidelines",
        url: "airway-respiratory/index.html",
        category: "Airway & Respiratory",
        keywords: ["airway", "respiratory", "ventilation", "pulmonary", "breathing", "oxygen"],
        excerpt: "Ventilation strategies, airway management, and respiratory support protocols"
    },
    {
        title: "ICU Nutrition Guidelines",
        url: "gastrointestinal-nutrition/nutrition-guideline.html",
        category: "Gastrointestinal & Nutrition",
        keywords: ["nutrition", "feeding", "enteral", "parenteral", "nutric", "energy", "protein", "refeeding", "ng", "nj", "pn", "tpn", "malnutrition", "icu", "critical", "illness"],
        excerpt: "Comprehensive nutrition guideline for critically ill patients. Covers nutritional assessment, energy and protein requirements, enteral and parenteral feeding, refeeding syndrome, and nutrition in specific conditions."
    },
    {
        title: "Nutrition Calculator",
        url: "gastrointestinal-nutrition/nutrition-calculator.html",
        category: "Gastrointestinal & Nutrition",
        keywords: ["nutrition", "calculator", "energy", "protein", "requirements", "bmi", "ideal", "body", "weight", "feeding", "adequacy", "cumulative", "tracking", "metabolic", "state"],
        excerpt: "Advanced nutrition calculator with multi-day cumulative tracking, metabolic state monitoring, and automated adequacy assessment. Calculates energy and protein requirements with comprehensive intake tracking."
    },
    {
        title: "Gastrointestinal & Nutrition Guidelines",
        url: "gastrointestinal-nutrition/index.html",
        category: "Gastrointestinal & Nutrition",
        keywords: ["nutrition", "gastrointestinal", "gi", "feeding", "enteral", "parenteral", "malnutrition"],
        excerpt: "Nutritional support protocols, feeding guidelines, and GI management"
    },
    {
        title: "RRT Guidelines (2025)",
        url: "renal-metabolic/RRT-Guidelines-2025.pdf",
        category: "Renal & Metabolic",
        keywords: ["rrt", "renal", "replacement", "therapy", "citrate", "anticoagulation", "fresenius", "multifilrate", "cvvhd", "cvvhdf", "dialysis", "calcium", "filter", "crrt"],
        excerpt: "Comprehensive reference guide for continuous renal replacement therapy using citrate anticoagulation on the Fresenius MultiFiltrate Pro system. Covers filter selection, CRRT modes, calcium management, electrolyte management, and troubleshooting."
    },
    {
        title: "RRT Calculators & Troubleshooting",
        url: "renal-metabolic/rrt-calculators-troubleshooting.html",
        category: "Renal & Metabolic",
        keywords: ["rrt", "calculator", "citrate", "calcium", "sodium", "correction", "troubleshooting", "filter", "blockage", "interactive", "tool", "clearance", "dialysate"],
        excerpt: "Interactive clinical decision support tool for RRT management. Features citrate dose calculator, calcium management, sodium correction, acid-base calculator, and automated filter blockage detection with serial monitoring graphs."
    },
    {
        title: "Renal & Metabolic Guidelines",
        url: "renal-metabolic/index.html",
        category: "Renal & Metabolic",
        keywords: ["renal", "metabolic", "rrt", "electrolyte", "sodium", "potassium", "calcium", "dialysis"],
        excerpt: "Renal replacement therapy protocols, electrolyte management, and metabolic support guidelines"
    }
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function performSearch(query) {
    if (!query || query.length < 2) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
    }

    const searchTerm = query.toLowerCase();
    const results = guidelineIndex.filter(guideline => {
        const titleMatch = guideline.title.toLowerCase().includes(searchTerm);
        const categoryMatch = guideline.category.toLowerCase().includes(searchTerm);
        const keywordMatch = guideline.keywords.some(keyword => 
            keyword.toLowerCase().includes(searchTerm)
        );
        const excerptMatch = guideline.excerpt.toLowerCase().includes(searchTerm);
        return titleMatch || categoryMatch || keywordMatch || excerptMatch;
    });

    displayResults(results, searchTerm);
}

function displayResults(results, searchTerm) {
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-result-item">
                <div class="search-result-title">No results found</div>
                <div class="search-result-context">
                    Try different keywords or browse the categories above
                </div>
            </div>
        `;
        searchResults.classList.add('active');
        return;
    }

    const resultsHTML = results.map(result => {
        const highlightedTitle = highlightText(result.title, searchTerm);
        const highlightedExcerpt = highlightText(result.excerpt, searchTerm);
        return `
            <a href="${result.url}" class="search-result-item">
                <div class="search-result-title">${highlightedTitle}</div>
                <div class="search-result-context">
                    ${result.category} • ${highlightedExcerpt}
                </div>
            </a>
        `;
    }).join('');

    searchResults.innerHTML = resultsHTML;
    searchResults.classList.add('active');
}

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

searchInput.addEventListener('input', debounce((e) => {
    performSearch(e.target.value);
}, 300));

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
    }
});

searchInput.addEventListener('focus', (e) => {
    if (e.target.value.length >= 2) {
        performSearch(e.target.value);
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const firstResult = searchResults.querySelector('a');
        if (firstResult) {
            window.location.href = firstResult.href;
        }
    }
});

const style = document.createElement('style');
style.textContent = `
    mark {
        background-color: #FFE066;
        padding: 0 2px;
        font-weight: 600;
    }
`;
document.head.appendChild(style);
