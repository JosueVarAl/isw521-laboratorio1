document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // TRANSLATIONS DICTIONARY
    // ==========================================================================
    const translations = {
        es: {
            "nav-start": "Inicio",
            "nav-portfolio": "Portafolio",
            "nav-services": "Servicios",
            "nav-course": "Curso",
            "nav-contact": "Contacto",
            "btn-lang-aria": "Cambiar idioma a inglés",
            "hero-badge": "Editor & Diseñador de Miniaturas",
            "hero-title": "Edición de video que retiene. Miniaturas que obtienen clics.",
            "hero-description": "Ayudo a los creadores e influencers más importantes de Costa Rica a transformar sus ideas en videos virales y contenido de alto rendimiento.",
            "hero-cta-work": "Ver Portafolio",
            "hero-cta-course": "Comprar Curso",
            "stat-views": "Vistas Generadas",
            "stat-experience": "Años de Experiencia",
            "stat-channels": "Canales Editados",
            "stat-ctr": "CTR Promedio de Miniaturas",
            "portfolio-title": "Miniaturas Destacadas",
            "portfolio-subtitle": "Diseños optimizados para maximizar el porcentaje de clics (CTR).",
            "card1-cat": "Viajes & Documentales",
            "card1-title": "Secreto en Galápagos",
            "card1-desc": "Diseño para vlogs de viajes con recortes de alta precisión de fauna local y corrección de color avanzada.",
            "card2-cat": "Aventura & Supervivencia",
            "card2-title": "Supervivencia en el Hielo",
            "card2-desc": "Composición narrativa para retos climáticos con efectos de nieve, fauna y gradiente de aurora boreal.",
            "card3-cat": "Retos & Estilo de Vida",
            "card3-title": "El Sueño Americano",
            "card3-desc": "Montaje de estilo reto combinando retrato emocional, auto deportivo de lujo e historia de fondo social.",
            "services-title": "Servicios Profesionales",
            "services-subtitle": "Soluciones personalizadas para llevar la producción de tus videos al siguiente nivel.",
            "service1-title": "Edición de Video Retentiva",
            "service1-desc": "Cortes dinámicos, diseño de sonido cinematográfico, efectos visuales de precisión y ritmos acelerados estructurados para retener a la audiencia y maximizar el tiempo de reproducción.",
            "service2-title": "Diseño de Miniaturas CTR",
            "service2-desc": "Análisis psicológico de la audiencia, corrección de color avanzada, modelado de texto tridimensional y composiciones con contraste optimizado para destacar sobre cualquier competencia.",
            "service3-title": "Consultoría Estratégica",
            "service3-desc": "Optimización de títulos, re-estructuración de introducciones (los primeros 30 segundos críticos), auditoría técnica del canal e ideas de contenido enfocadas en la retención masiva.",
            "course-tag": "CURSO EXCLUSIVO ONLINE",
            "course-title": "Fórmula Miniaturas & Edición de Alto Impacto",
            "course-desc": "Aprende paso a paso los secretos y flujos de trabajo que utilizo diariamente para crear contenido para los canales más grandes de Costa Rica. Desde la conceptualización de ideas hasta la edición de sonido y exportación óptima.",
            "course-feat1": "Más de 20 horas de lecciones en video HD",
            "course-feat2": "Recursos descargables (Sound effects, presets de color, PSDs de miniaturas)",
            "course-feat3": "Acceso de por vida y comunidad privada de estudiantes",
            "course-feat4": "Proyectos prácticos calificados por mí",
            "course-promo": "Oferta de lanzamiento - Pago único",
            "course-buy": "Comprar Curso Ahora",
            "course-guarantee": "Garantía de reembolso de 14 días sin preguntas.",
            "contact-title": "Inicia tu Proyecto",
            "contact-subtitle": "Cuéntame sobre tu canal de YouTube, tus objetivos o tus dudas sobre el curso.",
            "form-name": "Nombre Completo",
            "form-email": "Correo Electrónico",
            "form-subject": "Asunto",
            "form-sub-select": "Selecciona una opción",
            "form-sub-video": "Edición de Video",
            "form-sub-thumb": "Diseño de Miniaturas",
            "form-sub-course": "Información sobre el Curso",
            "form-sub-other": "Otro Asunto",
            "form-msg": "Mensaje",
            "form-submit": "Enviar Mensaje",
            "footer-desc": "Estrategias de edición y diseño visual de alto impacto para creadores modernos.",
            "footer-social-title": "Redes Sociales",
            "footer-rights": "Todos los derechos reservados."
        },
        en: {
            "nav-start": "Home",
            "nav-portfolio": "Portfolio",
            "nav-services": "Services",
            "nav-course": "Course",
            "nav-contact": "Contact",
            "btn-lang-aria": "Switch language to Spanish",
            "hero-badge": "Video Editor & Thumbnail Designer",
            "hero-title": "Video editing that retains. Thumbnails that get clicks.",
            "hero-description": "I help the most prominent creators and influencers in Costa Rica transform their ideas into viral videos and high-performance content.",
            "hero-cta-work": "View Portfolio",
            "hero-cta-course": "Buy Course",
            "stat-views": "Views Generated",
            "stat-experience": "Years of Experience",
            "stat-channels": "Channels Edited",
            "stat-ctr": "Average Thumbnail CTR",
            "portfolio-title": "Featured Thumbnails",
            "portfolio-subtitle": "Designs optimized to maximize click-through rate (CTR).",
            "card1-cat": "Travel & Documentaries",
            "card1-title": "Secret in Galapagos",
            "card1-desc": "Travel vlog design featuring high-precision cuts of local wildlife and advanced color grading.",
            "card2-cat": "Adventure & Survival",
            "card2-title": "Ice Survival Challenge",
            "card2-desc": "Narrative layout for extreme weather challenges with snow effects and northern lights gradient.",
            "card3-cat": "Challenges & Lifestyle",
            "card3-title": "The American Dream",
            "card3-desc": "Challenge-style composition combining emotional portrait, luxury sports car, and social story.",
            "services-title": "Professional Services",
            "services-subtitle": "Customized solutions to take your video production to the next level.",
            "service1-title": "Retentive Video Editing",
            "service1-desc": "Dynamic cuts, cinematic sound design, precision visual effects, and fast pacing structured to retain the audience and maximize watch time.",
            "service2-title": "CTR Thumbnail Design",
            "service2-desc": "Audience psychological analysis, advanced color correction, 3D text modeling, and contrast-optimized layouts to stand out from any competitor.",
            "service3-title": "Strategic Consulting",
            "service3-desc": "Title optimization, restructuring of introductions (the critical first 30 seconds), channel technical audit, and content ideas focused on massive retention.",
            "course-tag": "EXCLUSIVE ONLINE COURSE",
            "course-title": "Thumbnails & High-Impact Editing Formula",
            "course-desc": "Learn step-by-step the secrets and workflows I use daily to create content for Costa Rica's largest channels. From idea conceptualization to sound design and optimal export.",
            "course-feat1": "Over 20 hours of HD video lessons",
            "course-feat2": "Downloadable resources (Sound effects, color presets, thumbnail PSDs)",
            "course-feat3": "Lifetime access and private student community",
            "course-feat4": "Practical projects graded by me",
            "course-promo": "Launch Offer - One-time payment",
            "course-buy": "Buy Course Now",
            "course-guarantee": "14-day refund guarantee, no questions asked.",
            "contact-title": "Start your Project",
            "contact-subtitle": "Tell me about your YouTube channel, goals, or questions about the course.",
            "form-name": "Full Name",
            "form-email": "Email Address",
            "form-subject": "Subject",
            "form-sub-select": "Select an option",
            "form-sub-video": "Video Editing",
            "form-sub-thumb": "Thumbnail Design",
            "form-sub-course": "Course Information",
            "form-sub-other": "Other Subject",
            "form-msg": "Message",
            "form-submit": "Send Message",
            "footer-desc": "High-impact editing strategies and visual design for modern creators.",
            "footer-social-title": "Social Networks",
            "footer-rights": "All rights reserved."
        }
    };

    const placeholders = {
        es: {
            name: "Ingresa tu nombre",
            email: "tucorreo@ejemplo.com",
            message: "Escribe tu mensaje detallado aquí..."
        },
        en: {
            name: "Enter your name",
            email: "yourname@example.com",
            message: "Write your detailed message here..."
        }
    };

    const validationMessages = {
        es: {
            nameRequired: "El nombre es obligatorio.",
            nameShort: "El nombre debe tener al menos 3 caracteres.",
            emailRequired: "El correo electrónico es obligatorio.",
            emailInvalid: "Ingresa un correo electrónico válido.",
            subjectRequired: "Por favor selecciona un asunto.",
            messageRequired: "El mensaje es obligatorio.",
            messageShort: "El mensaje debe tener al menos 10 caracteres.",
            submitSuccess: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto."
        },
        en: {
            nameRequired: "Name is required.",
            nameShort: "Name must be at least 3 characters long.",
            emailRequired: "Email address is required.",
            emailInvalid: "Please enter a valid email address.",
            subjectRequired: "Please select a subject.",
            messageRequired: "Message is required.",
            messageShort: "Message must be at least 10 characters long.",
            submitSuccess: "Message sent successfully! We will contact you soon."
        }
    };

    // ==========================================================================
    // LANGUAGE STATE MANAGEMENT (Web Storage)
    // ==========================================================================
    const langBtn = document.getElementById("lang-btn");
    const htmlTag = document.documentElement;

    // Load initial preference or default to Spanish ('es')
    let currentLang = localStorage.getItem("preferred-lang") || "es";
    applyLanguage(currentLang);

    // Toggle button click listener
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        localStorage.setItem("preferred-lang", currentLang);
        applyLanguage(currentLang);
    });

    function applyLanguage(lang) {
        // 1. Update text nodes based on data-i18n attributes
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // 2. Update placeholders dynamically
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        if (nameInput) nameInput.placeholder = placeholders[lang].name;
        if (emailInput) emailInput.placeholder = placeholders[lang].email;
        if (messageInput) messageInput.placeholder = placeholders[lang].message;

        // 3. Update toggle button UI
        if (lang === "es") {
            langBtn.textContent = "EN";
            langBtn.setAttribute("aria-label", translations.es["btn-lang-aria"]);
            htmlTag.setAttribute("lang", "es");
        } else {
            langBtn.textContent = "ES";
            langBtn.setAttribute("aria-label", translations.en["btn-lang-aria"]);
            htmlTag.setAttribute("lang", "en");
        }

        // 4. If error messages are currently visible, update their language context
        validateField(nameInput, false);
        validateField(emailInput, false);
        validateField(messageInput, false);
        validateField(document.getElementById("subject"), false);
    }

    // ==========================================================================
    // FORM VALIDATION & ACCESSIBILITY
    // ==========================================================================
    const form = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    if (form) {
        // Clear active status/error indicator on input focus/type
        form.querySelectorAll("input, select, textarea").forEach(input => {
            input.addEventListener("input", () => {
                clearError(input);
            });
            input.addEventListener("change", () => {
                clearError(input);
            });
            // Validation on blur to assist users proactively
            input.addEventListener("blur", () => {
                validateField(input, false);
            });
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            let isFormValid = true;
            let firstInvalidElement = null;

            // List of inputs to validate
            const fieldsToValidate = [
                document.getElementById("name"),
                document.getElementById("email"),
                document.getElementById("subject"),
                document.getElementById("message")
            ];

            fieldsToValidate.forEach(field => {
                const isValid = validateField(field, true);
                if (!isValid) {
                    isFormValid = false;
                    if (!firstInvalidElement) {
                        firstInvalidElement = field;
                    }
                }
            });

            // Focus the first invalid element to assist keyboard/screen-reader navigation
            if (!isFormValid && firstInvalidElement) {
                firstInvalidElement.focus();
            }

            if (isFormValid) {
                // Simulating successful submit message
                formFeedback.style.display = "block";
                formFeedback.textContent = validationMessages[currentLang].submitSuccess;
                
                // Clear the form
                form.reset();

                // Clear feedback after 5 seconds
                setTimeout(() => {
                    formFeedback.style.display = "none";
                }, 5000);
            }
        });
    }

    // Individual field validation engine
    function validateField(field, forceShowError = true) {
        if (!field) return true;

        const val = field.value.trim();
        const id = field.id;
        const errorSpan = document.getElementById(`${id}-error`);
        const formGroup = field.closest(".form-group");
        let errorMessage = "";

        if (id === "name") {
            if (val === "") {
                errorMessage = validationMessages[currentLang].nameRequired;
            } else if (val.length < 3) {
                errorMessage = validationMessages[currentLang].nameShort;
            }
        } else if (id === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (val === "") {
                errorMessage = validationMessages[currentLang].emailRequired;
            } else if (!emailRegex.test(val)) {
                errorMessage = validationMessages[currentLang].emailInvalid;
            }
        } else if (id === "subject") {
            if (val === "") {
                errorMessage = validationMessages[currentLang].subjectRequired;
            }
        } else if (id === "message") {
            if (val === "") {
                errorMessage = validationMessages[currentLang].messageRequired;
            } else if (val.length < 10) {
                errorMessage = validationMessages[currentLang].messageShort;
            }
        }

        if (errorMessage !== "") {
            if (forceShowError) {
                if (errorSpan) {
                    errorSpan.textContent = errorMessage;
                    field.setAttribute("aria-invalid", "true");
                    field.setAttribute("aria-describedby", `${id}-error`);
                }
                if (formGroup) {
                    formGroup.classList.add("has-error");
                }
            }
            return false;
        } else {
            clearError(field);
            return true;
        }
    }

    function clearError(field) {
        if (!field) return;
        const id = field.id;
        const errorSpan = document.getElementById(`${id}-error`);
        const formGroup = field.closest(".form-group");

        if (errorSpan) {
            errorSpan.textContent = "";
        }
        if (formGroup) {
            formGroup.classList.remove("has-error");
        }
        field.removeAttribute("aria-invalid");
    }
});
