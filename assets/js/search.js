// Search functionality for UHBW Critical Care Guidelines
const guidelineIndex = [];

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
