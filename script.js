// Copyright (c) GlzzJohn
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});
function goToProject() {
    window.open('https://shiny-nougat-2dee85.netlify.app', '_self');
}

const allProjectsData = [
    {
        imageText: '<img src="Images/LibraryImage.png" alt="Library Management System" class="w-100 h-100" style="object-fit: cover;" onerror="this.outerHTML=\'Library Management System\'">',
        title: 'Library Management System',
        description: 'A modern dynamic web application designed for efficient library resource management.',
        tags: ['React JS', 'Tailwind CSS'],
        actionHtml: '<a href="https://nexus-status.42web.io/" target="_blank" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary">View Website →</a>'
    },
    {
        imageText: '<img src="Images/Lady_Icon.png" alt="VivaMaxCo" class="w-100 h-100" style="object-fit: cover;" onerror="this.outerHTML=\'VivaMaxCo\'">',
        title: 'VivaMaxCo (Trailer Site)',
        description: 'A static R18 trailer website created for demonstration purposes. Not affiliated with the official VivaMax.',
        tags: ['HTML', 'Custom CSS', 'Vanilla JS'],
        actionHtml: '<button class="btn btn-link text-decoration-none p-0 fw-semibold text-primary" data-bs-toggle="modal" data-bs-target="#projectModal">View Project →</button>'
    },
    {
        imageText: '<img src="Images/Asclepius.png" alt="EMR" class="w-100 h-100" style="object-fit: cover;" onerror="this.outerHTML=\'EMR\'">',
        title: 'Electronic Medical Record System',
        description: 'A static frontend dashboard for managing medical records. Built cleanly using Bootstrap.',
        tags: ['HTML', 'CSS', 'Bootstrap'],
        actionHtml: '<a href="https://dulcet-baklava-055d00.netlify.app" target="_blank" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary">View Project →</a>'
    },
    {
        imageText: 'NexusPOS',
        title: 'Point of Sale (POS) App',
        description: 'A comprehensive, user-friendly POS system designed to streamline inventory management, track daily sales, and optimize business retail operations efficiently.',
        tags: ['Java', 'Desktop App', 'Database', 'Server-Client'],
        actionHtml: '<a href="nexuspos.html" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary">View Details & Download →</a>'
    },
    {
        imageText: '<img src="Images/AIRockPaper.png" alt="AI Rock Paper Scissors" class="w-100 h-100" style="object-fit: cover;" onerror="this.outerHTML=\'AI-Powered Rock Paper Scissors\'">',
        title: 'Rock Paper Scissors (ML)',
        description: 'An interactive Rock, Paper, Scissors game powered by a Machine Learning model that adapts to your playing style.',
        tags: ['Java', 'Machine Learning'],
        actionHtml: '<a href="https://github.com/glzzjhn-byte/Glzz-Home/releases/download/Machine_Learning/RockPaperScissor-1.0-SNAPSHOT.jar" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary"><i class="fas fa-download me-2"></i>Download .JAR</a>'
    },
    {
        imageText: '<img src="Images/SHIELD-removebg-preview.png" alt="SimpleShield" class="w-100 h-100" style="object-fit: cover;" onerror="this.outerHTML=\'SimpleShield Easy Anti-Cheat\'">',
        title: 'SimpleShield Easy Anti-Cheat',
        description: 'A highly accessible, drop-in anti-cheat plugin designed to secure interactive environments. It easily installs to provide instant, robust protection against common exploits and tampering.',
        tags: ['Security', 'Anti-Cheat', 'Plugin'],
        actionHtml: '<a href="https://create.roblox.com/store/asset/100468824967185/SimpleShield-Easy-AntiCheat" target="_blank" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary"><i class="fas fa-shield-alt me-2"></i>View Plugin →</a>'
    },
    {
        imageText: '<div class="w-100 h-100 d-flex align-items-center justify-content-center text-white fw-bold" style="background: #e74c3c;">CyberShield Premium</div>',
        title: 'CyberShield Anti-Cheat Premium',
        description: 'An advanced, premium anti-cheat featuring an external API, webhook logging, ban capability, remote event abuse detection, and enhanced movement checks.',
        tags: ['Security', 'Premium ($10.99)', 'API', 'Luau'],
        actionHtml: '<a href="https://create.roblox.com/store/asset/124778777859404/CyberShield-AntiCheat-Premium-AntiExploit" target="_blank" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary"><i class="fas fa-shield-alt me-2"></i>View Plugin →</a>'
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
        imageText: '<img src="Images/PCBEtchDesign.png" alt="PCB Shaker Prototype" class="w-100 h-100" style="object-fit: cover;" onerror="this.outerHTML=\'PCB Shaker\'">',
        title: 'PCB Etching Shaker',
        description: 'A prototype design for an automated PCB etching shaker. Designed and simulated using Proteus.',
        tags: ['Proteus', 'PCB Design', 'Hardware'],
        actionHtml: '<a href="https://github.com/glzzjhn-byte/Glzz-Home/releases/download/ELECTRIC/PCBETCHINGSHAKERFINALDESIGN.pdsprj" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary"><i class="fas fa-download me-2"></i>Download .pdsprj</a>'
    },
    {
        imageText: '<img src="Images/ARduino Smart clap switch.jpg" alt="Arduino Clap Switch" class="w-100 h-100" style="object-fit: cover;" onerror="this.outerHTML=\'Clap Switch\'">',
        title: 'Arduino Clap Switch',
        description: 'An embedded system prototype for a clap-activated switch using Arduino. Designed and simulated in Proteus.',
        tags: ['Arduino', 'Proteus', 'Embedded System'],
        actionHtml: '<a href="https://github.com/glzzjhn-byte/Glzz-Home/releases/download/ELECTRIC/Arduino.pdsprj" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary"><i class="fas fa-download me-2"></i>Download .pdsprj</a>'
    },
    {
        imageText: '<img src="Images/Chess.png" alt="Static Web Chess AI" class="w-100 h-100" style="object-fit: cover;" onerror="this.outerHTML=\'Static Web Chess AI\'">',
        title: 'Static Web Chess AI',
        description: 'An interactive chess environment designed to visualize Machine Learning and Deep Learning mechanics. Features live simulations of neural network training, alongside modes to play locally or challenge the Stockfish engine.',
        tags: ['Machine Learning', 'Deep Learning', 'Static Web'],
        actionHtml: '<a href="https://glzzjhn-byte.github.io/Web-Chess-AI/" target="_blank" class="btn btn-link text-decoration-none p-0 fw-semibold text-primary">Play Game →</a>'
    }
];

function renderRandomProjects() {
    const container = document.getElementById('featured-projects-container');
    if (!container) return;

    let shuffled = [...allProjectsData];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    const selectedProjects = shuffled.slice(0, 3);
    
    let html = '';
    selectedProjects.forEach(project => {
        const tagsHtml = project.tags.map(tag => 
            `<span class="badge bg-light text-secondary rounded-pill px-3 py-2">${tag}</span>`
        ).join(' ');
        
        html += `
            <div class="col-md-4">
                <div class="card h-100 custom-card">
                    <div class="project-image d-flex align-items-center justify-content-center text-secondary fs-5 fw-medium overflow-hidden">
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

function loadGitHubSummary() {
    const container = document.getElementById('github-summary-cards');
    const loader = document.getElementById('gh-loading');
    if (!container) return;

    const cards = [
        '0-profile-details.svg',
        '2-most-commit-language.svg',
        '3-stats.svg'
    ];

    const baseUrl = 'https://raw.githubusercontent.com/glzzjhn-byte/glzzjhn-byte/main/profile-summary-card-output/default/';
    let html = '';

    cards.forEach((card, index) => {
        const delay = index * 0.15;
        html += `
            <div class="col-lg-4 col-md-6" style="animation: fadeIn 0.5s ease-out ${delay}s both;">
                <div class="card custom-card border-0 shadow-sm bg-white h-100 p-2 d-flex align-items-center justify-content-center github-stat-card">
                    <img src="${baseUrl}${card}" alt="GitHub Stat Card" class="img-fluid w-100 rounded-3" onload="this.style.opacity=1" style="opacity: 0; transition: opacity 0.3s ease;">
                </div>
            </div>
        `;
    });

    setTimeout(() => {
        if (loader) loader.style.display = 'none';
        container.innerHTML = html;
    }, 600);
}

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

const NEW_PRODUCT_DURATION_DAYS = 14;
const newProducts = [
    {
        text: "CyberShield Anti-Cheat Premium is now available!",
        linkText: "Check it out &rarr;",
        linkUrl: "cybersecurity.html",
        target: "_self",
        dateAdded: "2026-05-06"
    }
];

function initAnnouncementBanner() {
    const banner = document.getElementById('announcement-banner');
    if (!banner) return;

    const now = new Date();
    const validProducts = newProducts.filter(product => {
        const addedDate = new Date(product.dateAdded);
        const diffTime = now - addedDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        return diffDays <= NEW_PRODUCT_DURATION_DAYS && diffDays >= -1;
    });

    const navbar = document.querySelector('.custom-navbar');
    const firstSection = document.querySelector('section');

    if (validProducts.length === 0) {
        banner.style.display = 'none';
        if (navbar) navbar.style.top = '0px';
        if (firstSection) {
            if (firstSection.style.paddingTop === '120px') firstSection.style.paddingTop = '80px';
            if (firstSection.style.marginTop === '120px') firstSection.style.marginTop = '80px';
        }
        return;
    }

    let currentIndex = 0;
    function renderBanner() {
        const product = validProducts[currentIndex];
        banner.innerHTML = `
            <div style="animation: slideInBottom 0.5s ease-out forwards;" class="w-100 text-center px-2">
                <span class="badge bg-danger me-2">NEW</span> ${product.text} 
                <a href="${product.linkUrl}" target="${product.target || '_self'}" class="text-info text-decoration-none fw-bold ms-2">${product.linkText}</a>
            </div>
        `;
    }

    renderBanner();
    if (validProducts.length > 1) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % validProducts.length;
            renderBanner();
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderRandomProjects();
    loadGitHubSummary();
    initDarkMode();
    initAnnouncementBanner();
});
