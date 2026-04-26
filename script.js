// Apply dark mode instantly to prevent white flash on load
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Simple scroll effect for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
function goToProject() {
    window.open('https://shiny-nougat-2dee85.netlify.app', '_self');
}

// Array containing all projects data
const allProjectsData = [
    {
        imageText: 'VivaMaxCo',
        title: 'VivaMaxCo (Trailer Site)',
        description: 'A static R18 trailer website created for demonstration purposes. Not affiliated with the official VivaMax.',
        tags: ['HTML', 'Custom CSS', 'Vanilla JS'],
        actionHtml: '<button class="btn btn-link text-decoration-none p-0 fw-semibold text-primary" data-bs-toggle="modal" data-bs-target="#projectModal">View Project →</button>'
    },
    {
        imageText: 'EMS',
        title: 'Electronic Medical Record System',
        description: 'A static frontend dashboard for managing medical records. Built cleanly using Bootstrap.',
        tags: ['HTML', 'CSS', 'Bootstrap'],
        actionHtml: '<a href="https://dulcet-baklava-055d00.netlify.app" target="_blank" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary">View Project →</a>'
    },
    {
        imageText: 'RONAOPOS',
        title: 'Point of Sale (POS) App',
        description: 'A comprehensive, user-friendly POS system designed to streamline inventory management, track daily sales, and optimize business retail operations efficiently.',
        tags: ['Java', 'Desktop App', 'Database', 'Server-Client'],
        actionHtml: '<a href="ronaopos.html" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary">View Details & Download →</a>'
    },
    {
        imageText: 'RPS ML',
        title: 'Rock Paper Scissors (ML)',
        description: 'An interactive Rock, Paper, Scissors game powered by a Machine Learning model that adapts to your playing style.',
        tags: ['Java', 'Machine Learning'],
        actionHtml: '<a href="https://github.com/glzzjhn-byte/Glzz-Home/releases/download/Machine_Learning/RockPaperScissor-1.0-SNAPSHOT.jar" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary"><i class="fas fa-download me-2"></i>Download .JAR</a>'
    },
    {
        imageText: 'SimpleShield',
        title: 'SimpleShield Easy Anti-Cheat',
        description: 'A highly accessible, drop-in anti-cheat plugin designed to secure interactive environments. It easily installs to provide instant, robust protection against common exploits and tampering.',
        tags: ['Security', 'Anti-Cheat', 'Plugin'],
        actionHtml: '<a href="https://create.roblox.com/store/asset/100468824967185/SimpleShield-Easy-AntiCheat" target="_blank" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary"><i class="fas fa-shield-alt me-2"></i>View Plugin →</a>'
    },
    {
        imageText: 'CYBERWARFARE SIMULATOR',
        title: 'CYBERWARFARE SIMULATOR',
        description: 'A hacking game built over 4 months utilizing a unique programming language. Originally a hobbyist project developed with the intention of monetization.',
        tags: ['Roblox Studio', 'Luau'],
        actionHtml: '<a href="https://www.roblox.com/games/106837349372359/CYBERWARFARE-SIMULATOR#!/about" target="_blank" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary">Play on Roblox →</a>'
    },
    {
        imageText: 'My Own Worst Helper',
        title: 'My Own Worst Helper',
        description: 'An engaging Obby game where a clone of yourself acts as your guide throughout the obstacle courses—featuring a hidden, unexpected twist.',
        tags: ['Roblox Studio', 'Level Design'],
        actionHtml: '<a href="https://www.roblox.com/games/75575788362203/My-Own-Worst-Helper" target="_blank" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary">Play on Roblox →</a>'
    },
    {
        imageText: 'PCB Shaker',
        title: 'PCB Etching Shaker',
        description: 'A prototype design for an automated PCB etching shaker. Designed and simulated using Proteus.',
        tags: ['Proteus', 'PCB Design', 'Hardware'],
        actionHtml: '<a href="https://github.com/glzzjhn-byte/Glzz-Home/releases/download/ELECTRIC/PCBETCHINGSHAKERFINALDESIGN.pdsprj" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary"><i class="fas fa-download me-2"></i>Download .pdsprj</a>'
    },
    {
        imageText: 'Clap Switch',
        title: 'Arduino Clap Switch',
        description: 'An embedded system prototype for a clap-activated switch using Arduino. Designed and simulated in Proteus.',
        tags: ['Arduino', 'Proteus', 'Embedded System'],
        actionHtml: '<a href="https://github.com/glzzjhn-byte/Glzz-Home/releases/download/ELECTRIC/Arduino.pdsprj" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary"><i class="fas fa-download me-2"></i>Download .pdsprj</a>'
    }
];

// Function to render random featured projects
function renderRandomProjects() {
    const container = document.getElementById('featured-projects-container');
    if (!container) return; // Exit if container is not found on this page

    // Shuffle the array (Fisher-Yates algorithm)
    let shuffled = [...allProjectsData];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Select the first 3 projects after shuffling
    const selectedProjects = shuffled.slice(0, 3);
    
    let html = '';
    selectedProjects.forEach(project => {
        const tagsHtml = project.tags.map(tag => 
            `<span class="badge bg-light text-secondary rounded-pill px-3 py-2">${tag}</span>`
        ).join(' ');
        
        html += `
            <div class="col-md-4">
                <div class="card h-100 custom-card">
                    <div class="project-image d-flex align-items-center justify-content-center text-secondary fs-5 fw-medium">
                        ${project.imageText}
                    </div>
                    <div class="card-body p-4 d-flex flex-column">
                        <h4 class="card-title fw-bold text-dark mb-3">${project.title}</h4>
                        <p class="card-text text-secondary mb-4">${project.description}</p>
                        <div class="mt-auto">
                            <div class="d-flex flex-wrap gap-2 mb-3">
                                ${tagsHtml}
                            </div>
                            ${project.actionHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Function to load dynamic GitHub Summary Cards
function loadGitHubSummary() {
    const container = document.getElementById('github-summary-cards');
    const loader = document.getElementById('gh-loading');
    if (!container) return; // Exit if not on the main page

    // The SVG cards generated by your GitHub Action
    const cards = [
        '0-profile-details.svg',
        '2-most-commit-language.svg',
        '3-stats.svg'
    ];

    const baseUrl = 'https://raw.githubusercontent.com/glzzjhn-byte/glzzjhn-byte/main/profile-summary-card-output/default/';
    let html = '';

    cards.forEach((card, index) => {
        const delay = index * 0.15; // Staggered animation delay
        html += `
            <div class="col-lg-4 col-md-6" style="animation: fadeIn 0.5s ease-out ${delay}s both;">
                <div class="card custom-card border-0 shadow-sm bg-white h-100 p-2 d-flex align-items-center justify-content-center github-stat-card">
                    <img src="${baseUrl}${card}" alt="GitHub Stat Card" class="img-fluid w-100 rounded-3" onload="this.style.opacity=1" style="opacity: 0; transition: opacity 0.3s ease;">
                </div>
            </div>
        `;
    });

    // Small delay to let the nice syncing spinner show momentarily
    setTimeout(() => {
        if (loader) loader.style.display = 'none';
        container.innerHTML = html;
    }, 600);
}

// Initialize Dark Mode Toggle functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;

    const isDark = document.body.classList.contains('dark-mode');
    darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun fs-5"></i>' : '<i class="fas fa-moon fs-5"></i>';
    if (isDark) {
        darkModeToggle.classList.remove('text-dark');
        darkModeToggle.classList.add('text-light');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const currentlyDark = document.body.classList.contains('dark-mode');
        
        if (currentlyDark) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '<i class="fas fa-sun fs-5"></i>';
            darkModeToggle.classList.replace('text-dark', 'text-light');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerHTML = '<i class="fas fa-moon fs-5"></i>';
            darkModeToggle.classList.replace('text-light', 'text-dark');
        }
    });
}

// Trigger the randomizer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderRandomProjects();
    loadGitHubSummary();
    initDarkMode();
});
