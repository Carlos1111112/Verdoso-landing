/* ==========================================
   CULTIVA PERÚ - Hydroponic Initiative Peru
   JavaScript Interactions & i18n
   ========================================== */

// Translations
const translations = {
    en: {
        // Navigation
        "nav.mission": "Mission",
        "nav.science": "Science",
        "nav.team": "Team",
        "nav.contact": "Contact",
        
        // Hero
        "hero.badge": "Hydroponic Innovation from Peru",
        "hero.title1": "Growing the",
        "hero.title2": "Future",
        "hero.title3": "Without Soil",
        "hero.description": "Revolutionizing agriculture through accessible, cost-efficient hydroponic systems. Breaking barriers, educating communities, and cultivating sustainable solutions for Peru and beyond.",
        "hero.cta1": "Discover How",
        "hero.cta2": "Join the Movement",
        "hero.stat1": "Less Water Usage",
        "hero.stat2": "Faster Growth",
        "hero.stat3": "Possibilities",
        
        // Mission
        "mission.tag": "Our Purpose",
        "mission.title1": "Cultivating Change,",
        "mission.title2": "One Drop at a Time",
        "mission.mainTitle": "Our Mission",
        "mission.mainDesc": "To democratize hydroponic agriculture across Peru by developing cost-efficient systems that break down economic barriers, while educating communities on sustainable farming practices that can transform our food future.",
        "mission.card1Title": "Education First",
        "mission.card1Desc": "Promoting hydroponic knowledge in schools and communities throughout Peru, making agricultural innovation accessible to everyone.",
        "mission.card2Title": "Breaking Barriers",
        "mission.card2Desc": "Developing affordable hydroponic models that eliminate cost barriers preventing farmers from adopting sustainable practices.",
        "mission.card3Title": "Solving Global Issues",
        "mission.card3Desc": "Demonstrating how hydroponics addresses water scarcity, food security, and land use challenges facing our world today.",
        
        // Science
        "science.tag": "The Science",
        "science.title1": "How Hydroponics",
        "science.title2": "Works",
        "science.subtitle": "A soil-free revolution in agriculture, powered by water, nutrients, and innovation",
        "science.card1Title": "Nutrient Film Technique",
        "science.card1Desc": "A thin film of nutrient-rich water continuously flows over plant roots, providing constant access to essential minerals while maximizing oxygen exposure.",
        "science.card2Title": "Accelerated Growth",
        "science.card2Desc": "Plants grow up to 3x faster due to direct nutrient access. Roots don't need to search for food, allowing energy to focus on vegetative growth.",
        "science.card3Title": "Water Conservation",
        "science.card3Desc": "Recirculating systems use up to 90% less water than traditional farming. Every drop is reused, making it ideal for water-scarce regions.",
        "science.card4Title": "Pesticide-Free",
        "science.card4Desc": "Controlled environments eliminate most pests and diseases, reducing or eliminating the need for harmful chemical pesticides.",
        "diagram.reservoir": "Nutrient Reservoir",
        "diagram.pump": "Water Pump",
        "diagram.channel": "Growing Channel (NFT)",
        
        // Team
        "team.tag": "The Visionaries",
        "team.title1": "Meet Our",
        "team.title2": "Team",
        "team.cofounder": "Co-Founder",
        "team.leaderRole": "Initiative Leader",
        "team.mentor": "Mentor",
        "team.mentorRole": "Hydroponic Expert & Mentor",
        "team.carlosDesc": "Passionate about sustainable agriculture and innovative solutions to Peru's food security challenges.",
        "team.gabrielDesc": "Dedicated to making hydroponic technology accessible and affordable for farmers across Peru.",
        "team.enriqueDesc": "Renowned hydroponic specialist with a significant social media following, dedicated to spreading hydroponic knowledge and innovation throughout Latin America.",
        
        // Diamond
        "diamond.tag": "Entrepreneurship",
        "diamond.desc": "Our initiative is proud to compete in the prestigious Diamond Challenge, presenting our innovative hydroponic model designed to revolutionize sustainable agriculture in Peru and beyond.",
        "diamond.feature1Title": "Innovation Award Contender",
        "diamond.feature1Desc": "Pioneering cost-efficient hydroponic solutions",
        "diamond.feature2Title": "Scalable Impact",
        "diamond.feature2Desc": "From local farms to national transformation",
        "diamond.feature3Title": "Market Ready",
        "diamond.feature3Desc": "Practical solutions for real-world agricultural challenges",
        "diamond.stat1": "Cost Reduction",
        "diamond.stat2": "Materials",
        "diamond.stat2Value": "Local",
        "diamond.stat3": "Assembly",
        "diamond.stat3Value": "Easy",
        
        // Contact
        "contact.tag": "Get Involved",
        "contact.title1": "Let's Grow",
        "contact.title2": "Together",
        "contact.desc": "Whether you're a farmer, educator, investor, or simply passionate about sustainable agriculture, we'd love to hear from you. Join us in revolutionizing Peru's agricultural future.",
        "contact.emailTitle": "Email Us",
        "contact.locationTitle": "Location",
        "contact.followTitle": "Follow Our Journey",
        
        // Form
        "form.name": "Your Name",
        "form.namePlaceholder": "Enter your name",
        "form.email": "Email Address",
        "form.emailPlaceholder": "Enter your email",
        "form.interest": "I'm Interested In",
        "form.selectOption": "Select an option",
        "form.option1": "Partnership Opportunity",
        "form.option2": "Investment",
        "form.option3": "Educational Collaboration",
        "form.option4": "Implementing Hydroponics",
        "form.option5": "Other",
        "form.message": "Your Message",
        "form.messagePlaceholder": "Tell us how you'd like to get involved...",
        "form.submit": "Send Message",
        
        // Footer
        "footer.desc": "Cultivating sustainable futures through innovative hydroponic solutions. Based in Lima, Peru.",
        "footer.navigate": "Navigate",
        "footer.mission": "Our Mission",
        "footer.science": "The Science",
        "footer.team": "Our Team",
        "footer.connect": "Connect",
        "footer.contactUs": "Contact Us",
        "footer.copyright": "© 2025 Cultiva Perú. Cultivating change for a greener tomorrow.",
        "footer.badge": "Diamond Challenge Participant"
    },
    es: {
        // Navigation
        "nav.mission": "Misión",
        "nav.science": "Ciencia",
        "nav.team": "Equipo",
        "nav.contact": "Contacto",
        
        // Hero
        "hero.badge": "Innovación Hidropónica desde Perú",
        "hero.title1": "Cultivando el",
        "hero.title2": "Futuro",
        "hero.title3": "Sin Tierra",
        "hero.description": "Revolucionando la agricultura con sistemas hidropónicos accesibles y económicos. Rompiendo barreras, educando comunidades y cultivando soluciones sostenibles para Perú y más allá.",
        "hero.cta1": "Descubre Cómo",
        "hero.cta2": "Únete al Movimiento",
        "hero.stat1": "Menos Uso de Agua",
        "hero.stat2": "Crecimiento Más Rápido",
        "hero.stat3": "Posibilidades",
        
        // Mission
        "mission.tag": "Nuestro Propósito",
        "mission.title1": "Cultivando el Cambio,",
        "mission.title2": "Gota a Gota",
        "mission.mainTitle": "Nuestra Misión",
        "mission.mainDesc": "Democratizar la agricultura hidropónica en todo el Perú desarrollando sistemas económicos que eliminen las barreras económicas, mientras educamos a las comunidades sobre prácticas agrícolas sostenibles que pueden transformar nuestro futuro alimentario.",
        "mission.card1Title": "Educación Primero",
        "mission.card1Desc": "Promoviendo el conocimiento hidropónico en escuelas y comunidades de todo el Perú, haciendo la innovación agrícola accesible para todos.",
        "mission.card2Title": "Rompiendo Barreras",
        "mission.card2Desc": "Desarrollando modelos hidropónicos asequibles que eliminan las barreras de costos que impiden a los agricultores adoptar prácticas sostenibles.",
        "mission.card3Title": "Resolviendo Problemas Globales",
        "mission.card3Desc": "Demostrando cómo la hidroponía aborda la escasez de agua, la seguridad alimentaria y los desafíos de uso del suelo que enfrenta nuestro mundo hoy.",
        
        // Science
        "science.tag": "La Ciencia",
        "science.title1": "Cómo Funciona",
        "science.title2": "la Hidroponía",
        "science.subtitle": "Una revolución agrícola sin tierra, impulsada por agua, nutrientes e innovación",
        "science.card1Title": "Técnica de Película Nutritiva",
        "science.card1Desc": "Una fina película de agua rica en nutrientes fluye continuamente sobre las raíces de las plantas, proporcionando acceso constante a minerales esenciales mientras maximiza la exposición al oxígeno.",
        "science.card2Title": "Crecimiento Acelerado",
        "science.card2Desc": "Las plantas crecen hasta 3 veces más rápido debido al acceso directo a nutrientes. Las raíces no necesitan buscar alimento, permitiendo que la energía se enfoque en el crecimiento vegetativo.",
        "science.card3Title": "Conservación del Agua",
        "science.card3Desc": "Los sistemas de recirculación usan hasta 90% menos agua que la agricultura tradicional. Cada gota se reutiliza, haciéndolo ideal para regiones con escasez de agua.",
        "science.card4Title": "Libre de Pesticidas",
        "science.card4Desc": "Los ambientes controlados eliminan la mayoría de plagas y enfermedades, reduciendo o eliminando la necesidad de pesticidas químicos dañinos.",
        "diagram.reservoir": "Reservorio de Nutrientes",
        "diagram.pump": "Bomba de Agua",
        "diagram.channel": "Canal de Cultivo (NFT)",
        
        // Team
        "team.tag": "Los Visionarios",
        "team.title1": "Conoce a Nuestro",
        "team.title2": "Equipo",
        "team.cofounder": "Co-Fundador",
        "team.leaderRole": "Líder de la Iniciativa",
        "team.mentor": "Mentor",
        "team.mentorRole": "Experto en Hidroponía y Mentor",
        "team.carlosDesc": "Apasionado por la agricultura sostenible y las soluciones innovadoras para los desafíos de seguridad alimentaria del Perú.",
        "team.gabrielDesc": "Dedicado a hacer la tecnología hidropónica accesible y asequible para los agricultores de todo el Perú.",
        "team.enriqueDesc": "Reconocido especialista en hidroponía con un gran seguimiento en redes sociales, dedicado a difundir el conocimiento y la innovación hidropónica en toda América Latina.",
        
        // Diamond
        "diamond.tag": "Emprendimiento",
        "diamond.desc": "Nuestra iniciativa se enorgullece de competir en el prestigioso Diamond Challenge, presentando nuestro modelo hidropónico innovador diseñado para revolucionar la agricultura sostenible en Perú y más allá.",
        "diamond.feature1Title": "Candidato al Premio de Innovación",
        "diamond.feature1Desc": "Pioneros en soluciones hidropónicas económicas",
        "diamond.feature2Title": "Impacto Escalable",
        "diamond.feature2Desc": "De granjas locales a transformación nacional",
        "diamond.feature3Title": "Listo para el Mercado",
        "diamond.feature3Desc": "Soluciones prácticas para desafíos agrícolas del mundo real",
        "diamond.stat1": "Reducción de Costos",
        "diamond.stat2": "Materiales",
        "diamond.stat2Value": "Locales",
        "diamond.stat3": "Ensamblaje",
        "diamond.stat3Value": "Fácil",
        
        // Contact
        "contact.tag": "Involúcrate",
        "contact.title1": "Crezcamos",
        "contact.title2": "Juntos",
        "contact.desc": "Ya seas agricultor, educador, inversionista o simplemente apasionado por la agricultura sostenible, nos encantaría saber de ti. Únete a nosotros para revolucionar el futuro agrícola del Perú.",
        "contact.emailTitle": "Escríbenos",
        "contact.locationTitle": "Ubicación",
        "contact.followTitle": "Sigue Nuestro Camino",
        
        // Form
        "form.name": "Tu Nombre",
        "form.namePlaceholder": "Ingresa tu nombre",
        "form.email": "Correo Electrónico",
        "form.emailPlaceholder": "Ingresa tu correo",
        "form.interest": "Me Interesa",
        "form.selectOption": "Selecciona una opción",
        "form.option1": "Oportunidad de Alianza",
        "form.option2": "Inversión",
        "form.option3": "Colaboración Educativa",
        "form.option4": "Implementar Hidroponía",
        "form.option5": "Otro",
        "form.message": "Tu Mensaje",
        "form.messagePlaceholder": "Cuéntanos cómo te gustaría participar...",
        "form.submit": "Enviar Mensaje",
        
        // Footer
        "footer.desc": "Cultivando futuros sostenibles a través de soluciones hidropónicas innovadoras. Con sede en Lima, Perú.",
        "footer.navigate": "Navegar",
        "footer.mission": "Nuestra Misión",
        "footer.science": "La Ciencia",
        "footer.team": "Nuestro Equipo",
        "footer.connect": "Conectar",
        "footer.contactUs": "Contáctanos",
        "footer.copyright": "© 2025 Cultiva Perú. Cultivando el cambio para un mañana más verde.",
        "footer.badge": "Participante del Diamond Challenge"
    }
};

// Current language
let currentLang = localStorage.getItem('cultivaperu-lang') || 'en';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmoothScroll();
    initAnimations();
    initMobileMenu();
    initFormHandler();
    initLanguageSwitcher();
    
    // Apply saved language
    setLanguage(currentLang);
    
    // Expose setLanguage globally
    window.setLanguage = setLanguage;
    window.translations = translations;
});

/* ==========================================
   LANGUAGE SWITCHER
   ========================================== */
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cultivaperu-lang', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Translate SVG text elements
    document.querySelectorAll('[data-i18n-svg]').forEach(el => {
        const key = el.dataset.i18nSvg;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update page title
    document.title = lang === 'es' 
        ? 'Cultiva Perú | Iniciativa Hidropónica' 
        : 'Cultiva Perú | Hydroponic Initiative Peru';
}

/* ==========================================
   NAVBAR
   ========================================== */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/* ==========================================
   SMOOTH SCROLL
   ========================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.nav-links');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}

/* ==========================================
   SCROLL ANIMATIONS
   ========================================== */
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animateElements = document.querySelectorAll(
        '.mission-card, .science-card, .team-card, .challenge-feature'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Add CSS for animated state
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Parallax effect for floating leaves
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const leaves = document.querySelectorAll('.leaf');
        
        leaves.forEach((leaf, index) => {
            const speed = 0.2 + (index * 0.1);
            leaf.style.transform = `translateY(${scrolled * speed}px) rotate(${45 + (index * 30)}deg)`;
        });
    });
}

/* ==========================================
   MOBILE MENU
   ========================================== */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
        
        // Add mobile menu styles
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .nav-links {
                    position: fixed;
                    top: 70px;
                    left: 0;
                    right: 0;
                    background: rgba(39, 68, 29, 0.98);
                    backdrop-filter: blur(20px);
                    flex-direction: column;
                    padding: 2rem;
                    gap: 1.5rem;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    transform: translateY(-100%);
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s ease;
                }
                
                .nav-links.active {
                    display: flex;
                    transform: translateY(0);
                    opacity: 1;
                    pointer-events: all;
                }
                
                .mobile-menu-btn.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                
                .mobile-menu-btn.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-menu-btn.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(5px, -5px);
                }
                
                .lang-switcher {
                    margin-left: 0;
                    margin-right: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/* ==========================================
   FORM HANDLER
   ========================================== */
function initFormHandler() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            
            // Show loading state
            const loadingText = currentLang === 'es' ? 'Enviando...' : 'Sending...';
            submitBtn.innerHTML = `
                <svg class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"/>
                </svg>
                ${loadingText}
            `;
            submitBtn.disabled = true;
            
            // Add spinner animation
            const spinnerStyle = document.createElement('style');
            spinnerStyle.textContent = `
                .spinner {
                    animation: spin 1s linear infinite;
                    width: 20px;
                    height: 20px;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(spinnerStyle);
            
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success state
            const successText = currentLang === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!';
            submitBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${successText}
            `;
            submitBtn.style.background = '#059669';
            
            // Reset form
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        });
    }
}

/* ==========================================
   SCROLL PROGRESS INDICATOR
   ========================================== */
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #22c55e, #10b981);
            z-index: 9999;
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}

// Initialize scroll progress
initScrollProgress();

/* ==========================================
   CURSOR EFFECT (Optional Enhancement)
   ========================================== */
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #22c55e;
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s, border-color 0.2s;
            z-index: 9999;
            mix-blend-mode: difference;
        }
        
        .custom-cursor.hover {
            width: 40px;
            height: 40px;
            border-color: #10b981;
        }
        
        @media (max-width: 768px) {
            .custom-cursor {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Initialize cursor effect on desktop
if (window.innerWidth > 768) {
    initCursorEffect();
}
