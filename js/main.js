// Services Data
const servicesData = [
    {
        icon: '🚐',
        title: 'Shuttle Services',
        description: 'Reliable transportation across Cape Town',
        badge: 'Cape Town Wide',
        details: {
            title: 'Our Shuttle Services:',
            items: [
                'Airport transfers (CPT)',
                'Corporate shuttle services',
                'Group transportation',
                'City tours',
                'Event shuttles'
            ]
        }
    },
    {
        icon: '🚗',
        title: 'Chauffeur Service',
        description: 'Luxury chauffeur services in Cape Town',
        badge: 'Premium Service',
        details: {
            title: 'Our Chauffeur Services:',
            items: [
                'Executive travel',
                'VIP client transport',
                'Special occasions',
                'Wine tours',
                'Hourly chauffeur hire'
            ]
        }
    },
    {
        icon: '🎭',
        title: 'Hospitality & Entertainment',
        description: 'Cape Town\'s finest entertainment services',
        badge: 'Events',
        details: {
            title: 'Hospitality Services:',
            items: [
                'Event planning',
                'Entertainment booking',
                'Venue sourcing',
                'Catering coordination',
                'Corporate events'
            ]
        }
    },
    {
        icon: '🏨',
        title: 'Accommodation',
        description: 'Find your perfect stay in Cape Town',
        badge: 'Booking',
        details: {
            title: 'Accommodation Services:',
            items: [
                'Hotel bookings',
                'Guesthouse reservations',
                'Short-term rentals',
                'Corporate housing',
                'Student accommodation'
            ]
        }
    },
    {
        icon: '🛂',
        title: 'Immigration Services',
        description: 'Visas, permits & more in Cape Town',
        badge: 'Home Affairs',
        details: {
            title: 'Immigration Assistance:',
            items: [
                'Visa applications',
                'Work permits',
                'Study visas',
                'Permanent residence',
                'Passport renewals',
                'Waiver applications'
            ]
        }
    },
    {
        icon: '💰',
        title: 'Money Transfer Assistance',
        description: 'Secure money transfers in Cape Town',
        badge: 'Financial',
        details: {
            title: 'Money Transfer Services:',
            items: [
                'International transfers',
                'Forex assistance',
                'Remittance services',
                'Currency exchange',
                'Business payments'
            ]
        }
    },
    {
        icon: '🗺️',
        title: 'Tour Guide Services',
        description: 'Explore Cape Town with expert guides',
        badge: 'Tours',
        details: {
            title: 'Tour Packages:',
            items: [
                'Table Mountain tours',
                'Cape Point excursions',
                'Wine lands tours',
                'Robben Island visits',
                'City walking tours',
                'Garden Route trips'
            ]
        }
    },
    {
        icon: '📦',
        title: 'Import & Export of Goods',
        description: 'International trade assistance in Cape Town',
        badge: 'Trade',
        details: {
            title: 'Import/Export Services:',
            items: [
                'Customs clearance',
                'Shipping coordination',
                'Documentation assistance',
                'Freight forwarding',
                'Trade compliance'
            ]
        }
    },
    {
        icon: '🎓',
        title: 'Academics & Qualifications',
        description: 'SAQA, foreign qualifications & more',
        badge: 'Education',
        details: {
            title: 'Academic Services:',
            items: [
                'SAQA evaluations',
                'Foreign qualification verification',
                'Apostille services',
                'University applications',
                'Certificate legalization'
            ]
        }
    },
    {
        icon: '🌐',
        title: 'Translation Services',
        description: 'Day-to-day translation assistance in Cape Town',
        badge: 'Language',
        details: {
            title: 'Translation Services:',
            items: [
                'Document translation',
                'Interpreting services',
                'Certified translations',
                'Business interpreting',
                'Medical translation',
                'Legal translation'
            ]
        }
    },
    {
        icon: '🚘',
        title: 'Driving Academy',
        description: 'Car hire & driving lessons in Cape Town',
        badge: 'Driving',
        details: {
            title: 'Driving Services:',
            items: [
                'Learner\'s license prep',
                'Driving lessons',
                'Car hire assistance',
                'License testing prep',
                'Defensive driving'
            ]
        }
    },
    {
        icon: '📋',
        title: 'Business Registration & More',
        description: 'Start your business in Cape Town',
        badge: 'Business',
        details: {
            title: 'Business Services:',
            items: [
                'Company registration',
                'Tax registration',
                'BEE certification',
                'Business permits',
                'Compliance assistance',
                'Trademark registration'
            ]
        }
    },
    {
        icon: '🧬',
        title: 'DNA Sample Collector',
        description: 'DNA testing & drug test services in Cape Town',
        badge: 'Medical',
        details: {
            title: 'DNA & Testing Services:',
            items: [
                'DNA sample collection',
                'Unannounced drug testing',
                'Workplace testing',
                'Paternity testing',
                'Forensic collections',
                'Results confidential'
            ]
        }
    }
];

// DOM Elements
const servicesGrid = document.getElementById('servicesGrid');
const footerServicesList = document.getElementById('footerServicesList');
const serviceSelect = document.getElementById('service');
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, rendering services...');
    
    if (servicesGrid) {
        renderServices();
    }
    
    if (serviceSelect) {
        populateServiceSelect();
    }
    
    if (footerServicesList) {
        populateFooterServices();
    }
    
    setupEventListeners();
    updateCopyrightYear();
    setupThemeToggle();
});

// Render all 13 service cards
function renderServices() {
    if (!servicesGrid) return;
    
    let html = '';
    
    for (let i = 0; i < servicesData.length; i++) {
        const service = servicesData[i];
        html += `
            <div class="service-card" onclick="toggleService(this)" data-service="${service.title}">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <span class="service-badge">${service.badge}</span>
                <div class="service-expand">
                    <div class="service-detail">
                        <h4>${service.details.title}</h4>
                        <ul>
        `;
        
        for (let j = 0; j < service.details.items.length; j++) {
            html += `<li>${service.details.items[j]}</li>`;
        }
        
        html += `
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    servicesGrid.innerHTML = html;
}

// Populate the dropdown in contact form
function populateServiceSelect() {
    if (!serviceSelect) return;
    
    let options = '<option value="">Select Service Interested In</option>';
    
    for (let i = 0; i < servicesData.length; i++) {
        options += `<option value="${servicesData[i].title}">${servicesData[i].title}</option>`;
    }
    
    serviceSelect.innerHTML = options;
}

// Populate footer services list
function populateFooterServices() {
    if (!footerServicesList) return;
    
    let html = '';
    
    for (let i = 0; i < 5; i++) {
        if (servicesData[i]) {
            html += `<li><a href="#services" onclick="scrollToService('${servicesData[i].title}')">${servicesData[i].title}</a></li>`;
        }
    }
    
    html += '<li><a href="#services">View All 13 Services</a></li>';
    
    footerServicesList.innerHTML = html;
}

// Toggle service card open/close
window.toggleService = function(card) {
    const allCards = document.querySelectorAll('.service-card');
    for (let i = 0; i < allCards.length; i++) {
        if (allCards[i] !== card) {
            allCards[i].classList.remove('active');
        }
    }
    
    card.classList.toggle('active');
};

// Scroll to a specific service
window.scrollToService = function(serviceTitle) {
    const serviceCard = document.querySelector(`[data-service="${serviceTitle}"]`);
    if (serviceCard) {
        serviceCard.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(function() {
            serviceCard.classList.add('active');
        }, 800);
    }
};

// Set up all event listeners
function setupEventListeners() {
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    }
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.service-card')) {
            const allCards = document.querySelectorAll('.service-card');
            for (let i = 0; i < allCards.length; i++) {
                allCards[i].classList.remove('active');
            }
        }
    });
    
    const mapLinks = document.querySelectorAll('.contact-item .contact-text');
    for (let i = 0; i < mapLinks.length; i++) {
        mapLinks[i].addEventListener('click', function() {
            window.open('https://maps.google.com/?q=Luanda+Street+Cape+Town', '_blank');
        });
        mapLinks[i].style.cursor = 'pointer';
    }
    
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        }

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
            if (navLinks[i].getAttribute('href') === `#${current}`) {
                navLinks[i].classList.add('active');
            }
        }
    });
}

// Theme toggle functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    }
}

// Update copyright year
function updateCopyrightYear() {
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
    }
}