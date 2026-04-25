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
        tags: ['Java', 'Desktop App', 'Database'],
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

// Trigger the randomizer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderRandomProjects);
