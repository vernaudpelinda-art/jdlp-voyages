// script.js - Fonctionnalités du site

document.addEventListener('DOMContentLoaded', function() {
    // Gestion des tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = {
                nom: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                telephone: this.querySelector('input[type="tel"]').value,
                sujet: this.querySelector('select').value,
                message: this.querySelector('textarea').value
            };

            // Simulation d'envoi (à remplacer par une vraie API)
            console.log('Message envoyé:', formData);
            
            // Afficher un message de succès
            alert('Message envoyé avec succès ! Nous vous contacterons rapidement.');
            
            // Réinitialiser le formulaire
            this.reset();
        });
    }

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation des statistiques (exemple)
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + '+';
                }
            }, 30);
        });
    }

    // Déclencher l'animation des stats quand visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Menu mobile (à ajouter si nécessaire)
    function initMobileMenu() {
        const menuBtn = document.createElement('button');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        menuBtn.className = 'mobile-menu-btn';
        document.querySelector('.navbar .container').appendChild(menuBtn);
        
        menuBtn.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('show');
        });
    }

    // Vérifier si on est sur mobile
    if (window.innerWidth <= 768) {
        initMobileMenu();
    }

    // Ajouter des statistiques à la hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const statsHTML = `
            <div class="stats">
                <div class="stat">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">Visas délivrés</div>
                </div>
                <div class="stat">
                    <div class="stat-number">24h</div>
                    <div class="stat-label">Support client</div>
                </div>
                <div class="stat">
                    <div class="stat-number">98%</div>
                    <div class="stat-label">Taux réussite</div>
                </div>
                <div class="stat">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">Ans d'expérience</div>
                </div>
            </div>
        `;
        
        // Ajouter après le search-box
        const searchBox = document.querySelector('.search-box');
        if (searchBox) {
            searchBox.insertAdjacentHTML('afterend', statsHTML);
        }
    }
});
