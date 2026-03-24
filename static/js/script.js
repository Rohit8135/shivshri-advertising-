const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const revealElements = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter-button");
const portfolioCards = document.querySelectorAll(".portfolio-card");
const portfolioTriggers = document.querySelectorAll(".portfolio-trigger");
const portfolioModal = document.getElementById("portfolioModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.querySelector(".modal-close");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const languageButtons = document.querySelectorAll(".lang-btn");
const pageTitleKey = document.body.dataset.pageTitleKey;

const translations = {
    en: {
        site_title: "Shivshri Advertising",
        home_page: "Home",
        services_page: "Our Services",
        portfolio_page: "Portfolio",
        contact_page: "Contact",
        nav_home: "Home",
        hero_title: "Shivshri Advertising",
        tagline: "All Types of Printing Solutions",
        call_now: "Call Now",
        whatsapp: "WhatsApp",
        services: "Our Services",
        portfolio: "Portfolio",
        contact: "Contact",
        reviews: "Customer Reviews",
        intro: "We provide fast and high-quality printing solutions for banners, boards, and branding materials.",
        highlight1: "Fast turnaround for banners, boards, and branding materials",
        highlight2: "Clean design support for both print and digital campaigns",
        highlight3: "Reliable service for local businesses, shops, and events",
        contact_title: "Contact Us",
        name: "Name",
        phone: "Phone",
        message: "Message",
        send: "Send",
        address: "Alandi Devachi, 412105",
        working_hours: "Working Hours: 10 AM - 10 PM",
        working_hours_only: "10 AM - 10 PM",
        footer_owned: "Owned by",
        footer_quick_links: "Quick Links",
        footer_email: "Email",
        footer_directions: "Directions",
        footer_rights: "© 2026 Shivshri Advertising. All rights reserved.",
        hero_eyebrow: "Professional Printing & Branding",
        about_us: "About Us",
        about_heading: "Printing support that helps local businesses look established",
        about_copy: "Shivshri Advertising delivers dependable print quality, smart layouts, and professional branding support for shops, events, and growing businesses in and around Alandi Devachi.",
        trusted_team: "Trusted Local Team",
        trusted_copy: "From flex printing to backlight boards, we focus on fast service, clean finishing, and practical design that works in the real world.",
        highlights_title: "Highlights",
        highlights_heading: "Professional output with quick support and clean execution",
        featured_heading: "Solutions built for visibility and trust",
        featured_copy: "From eye-catching flex printing to digital creatives, every service is designed to present your business more professionally.",
        instagram_title: "Instagram",
        instagram_heading: "Creative work you can keep updating",
        instagram_copy: "Use these blocks for your latest banner designs, flex prints, completed signage work, or customer project highlights.",
        instagram_button: "Follow on Instagram",
        location_title: "Location",
        location_heading: "Visit Shivshri Advertising in Alandi Devachi",
        location_copy: "Call us during business hours or stop by to discuss flex printing, banners, vinyl work, and branding materials.",
        get_directions: "Get Directions",
        services_heading: "Premium printing and advertising services for local business growth",
        services_copy: "Explore the core services that help customers discover, recognize, and trust your brand offline and online.",
        portfolio_heading: "Recent print, signage, and branding presentation samples",
        portfolio_copy: "Browse the sample gallery below and replace any image later with your actual customer work from static/images.",
        filter_all: "All",
        filter_flex: "Flex",
        filter_banner: "Banner",
        filter_vinyl: "Vinyl",
        filter_boards: "Boards",
        filter_social: "Social",
        portfolio_item_0: "Retail Flex Banner",
        portfolio_item_1: "Event Backdrop",
        portfolio_item_2: "Vinyl Window Graphic",
        portfolio_item_3: "Menu Light Board",
        portfolio_item_4: "Instagram Campaign Set",
        portfolio_item_5: "Festival Hoarding",
        contact_heading: "Let's discuss your next print or advertising requirement",
        contact_copy: "Share your details and we will get back to you with the right print, design, or signage solution.",
        owners_label: "Owners:",
        phone_label_1: "Phone 1:",
        phone_label_2: "Phone 2:",
        email_label: "Email:",
        working_hours_label: "Working Hours:",
        address_label: "Address:",
        start_chat: "Start Chat",
        name_placeholder: "Your name",
        phone_placeholder: "Your phone number",
        message_placeholder: "Tell us what you need",
        review_0: '"Best printing service in Alandi, fast and reliable"',
        review_1: '"Very good quality and affordable price"',
        review_2: '"Highly recommended for banner and flex printing"',
        reviewer_0: "Local Business Owner",
        reviewer_1: "Shop Owner",
        reviewer_2: "Event Organizer",
        working_hours_label_short: "Business Hours",
        address_label_short: "Location",
        working_hours_support: "Working hours for convenient customer support",
        reviews_subheading: "Trusted by growing local businesses",
        stat_fast: "Fast",
        stat_clean: "Clean",
        stat_reliable: "Reliable",
        stat_hours: "10-10",
        service_0_title: "Flex Printing",
        service_0_desc: "High-quality banners in all sizes.",
        service_1_title: "Star Printing",
        service_1_desc: "Durable and attractive prints.",
        service_2_title: "Vinyl Printing",
        service_2_desc: "Premium finish and long-lasting.",
        service_3_title: "Banner Design",
        service_3_desc: "Custom creative designs.",
        service_4_title: "Social Media Design",
        service_4_desc: "Digital promotional creatives.",
        service_5_title: "Backlight Boards",
        service_5_desc: "Bright and eye-catching boards.",
        sending_message: "Sending your enquiry...",
        success_message: "Thanks for contacting Shivshri Advertising. We will reach out shortly.",
        validation_message: "Please fill in all fields.",
        error_message: "Something went wrong."
    },
    mr: {
        site_title: "Shivshri Advertising",
        home_page: "होम",
        services_page: "आमच्या सेवा",
        portfolio_page: "आमचे काम",
        contact_page: "संपर्क करा",
        nav_home: "होम",
        hero_title: "Shivshri Advertising",
        tagline: "सर्व प्रकारच्या प्रिंटिंग सेवा",
        call_now: "आता कॉल करा",
        whatsapp: "व्हॉट्सअॅप करा",
        services: "आमच्या सेवा",
        portfolio: "आमचे काम",
        contact: "संपर्क करा",
        reviews: "ग्राहक अभिप्राय",
        intro: "आम्ही बॅनर, बोर्ड आणि ब्रँडिंगसाठी जलद व उच्च-गुणवत्तेच्या प्रिंटिंग सेवा देतो.",
        highlight1: "बॅनर, बोर्ड आणि ब्रँडिंग मटेरियलसाठी जलद सेवा",
        highlight2: "प्रिंट आणि डिजिटल दोन्हीसाठी उत्कृष्ट डिझाइन सपोर्ट",
        highlight3: "स्थानिक व्यवसाय, दुकाने आणि कार्यक्रमांसाठी विश्वासार्ह सेवा",
        contact_title: "संपर्क करा",
        name: "नाव",
        phone: "मोबाईल नंबर",
        message: "संदेश",
        send: "पाठवा",
        address: "आळंदी देवाची, 412105",
        working_hours: "वेळ: सकाळी १० ते रात्री १०",
        working_hours_only: "सकाळी १० ते रात्री १०",
        footer_owned: "मालक",
        footer_quick_links: "जलद लिंक्स",
        footer_email: "ईमेल",
        footer_directions: "दिशा",
        footer_rights: "© 2026 Shivshri Advertising. सर्व हक्क राखीव.",
        hero_eyebrow: "प्रोफेशनल प्रिंटिंग आणि ब्रँडिंग",
        about_us: "आमच्याबद्दल",
        about_heading: "स्थानिक व्यवसायांना अधिक विश्वासार्ह आणि प्रोफेशनल दिसण्यासाठी मदत करणारी प्रिंटिंग सेवा",
        about_copy: "Shivshri Advertising आळंदी देवाची आणि परिसरातील दुकाने, कार्यक्रम आणि वाढणाऱ्या व्यवसायांसाठी विश्वासार्ह प्रिंट गुणवत्ता, स्मार्ट लेआउट्स आणि प्रोफेशनल ब्रँडिंग सपोर्ट देते.",
        trusted_team: "विश्वासार्ह स्थानिक टीम",
        trusted_copy: "फ्लेक्स प्रिंटिंगपासून बॅकलाइट बोर्ड्सपर्यंत आम्ही जलद सेवा, स्वच्छ फिनिशिंग आणि प्रत्यक्ष उपयोगी डिझाइनवर लक्ष केंद्रित करतो.",
        highlights_title: "ठळक वैशिष्ट्ये",
        highlights_heading: "जलद सपोर्ट आणि स्वच्छ कामासह प्रोफेशनल आउटपुट",
        featured_heading: "दिसायला उठून दिसणाऱ्या आणि विश्वास वाढवणाऱ्या सेवा",
        featured_copy: "आकर्षक फ्लेक्स प्रिंटिंगपासून डिजिटल क्रिएटिव्हपर्यंत प्रत्येक सेवा तुमचा व्यवसाय अधिक प्रोफेशनल दिसण्यासाठी तयार केली आहे.",
        instagram_title: "इंस्टाग्राम",
        instagram_heading: "तुमचे क्रिएटिव्ह काम सतत दाखवत राहा",
        instagram_copy: "तुमचे नवीन बॅनर डिझाइन, फ्लेक्स प्रिंट्स, पूर्ण झालेले साइनज काम आणि ग्राहक प्रोजेक्ट हायलाइट्स या विभागात दाखवा.",
        instagram_button: "इंस्टाग्रामवर फॉलो करा",
        location_title: "स्थान",
        location_heading: "आळंदी देवाची येथे Shivshri Advertising ला भेट द्या",
        location_copy: "फ्लेक्स प्रिंटिंग, बॅनर, व्हिनाइल काम आणि ब्रँडिंग मटेरियलसाठी कामाच्या वेळेत आम्हाला कॉल करा किंवा प्रत्यक्ष भेट द्या.",
        get_directions: "दिशा पहा",
        services_heading: "स्थानिक व्यवसाय वाढीसाठी प्रीमियम प्रिंटिंग आणि जाहिरात सेवा",
        services_copy: "ऑफलाइन आणि ऑनलाइन तुमच्या ब्रँडवर ग्राहकांचा विश्वास वाढवणाऱ्या मुख्य सेवांचा आढावा घ्या.",
        portfolio_heading: "अलीकडील प्रिंट, साइनज आणि ब्रँडिंग सॅम्पल्स",
        portfolio_copy: "खालील गॅलरी पाहा आणि नंतर static/images मधील तुमच्या खऱ्या कामांच्या फोटोंनी ती सहज बदला.",
        filter_all: "सर्व",
        filter_flex: "फ्लेक्स",
        filter_banner: "बॅनर",
        filter_vinyl: "व्हिनाइल",
        filter_boards: "बोर्ड्स",
        filter_social: "सोशल",
        portfolio_item_0: "रिटेल फ्लेक्स बॅनर",
        portfolio_item_1: "इव्हेंट बॅकड्रॉप",
        portfolio_item_2: "व्हिनाइल विंडो ग्राफिक",
        portfolio_item_3: "मेन्यू लाईट बोर्ड",
        portfolio_item_4: "इंस्टाग्राम कॅम्पेन सेट",
        portfolio_item_5: "फेस्टिव्हल होर्डिंग",
        contact_heading: "तुमच्या पुढील प्रिंटिंग किंवा जाहिरात कामाबद्दल चर्चा करूया",
        contact_copy: "तुमची माहिती शेअर करा. आम्ही योग्य प्रिंट, डिझाइन किंवा साइनज सोल्यूशनसह तुमच्याशी संपर्क करू.",
        owners_label: "मालक:",
        phone_label_1: "मोबाईल 1:",
        phone_label_2: "मोबाईल 2:",
        email_label: "ईमेल:",
        working_hours_label: "वेळ:",
        address_label: "पत्ता:",
        start_chat: "चॅट सुरू करा",
        name_placeholder: "तुमचे नाव",
        phone_placeholder: "तुमचा मोबाईल नंबर",
        message_placeholder: "तुम्हाला काय हवे आहे ते लिहा",
        review_0: '"अलंदीतील सर्वोत्तम प्रिंटिंग सेवा, जलद आणि विश्वासार्ह"',
        review_1: '"खूप चांगली गुणवत्ता आणि परवडणारी किंमत"',
        review_2: '"बॅनर आणि फ्लेक्स प्रिंटिंगसाठी नक्की शिफारस करतो"',
        reviewer_0: "स्थानिक व्यवसाय मालक",
        reviewer_1: "दुकान मालक",
        reviewer_2: "कार्यक्रम आयोजक",
        working_hours_label_short: "वेळ",
        address_label_short: "पत्ता",
        working_hours_support: "सोयीस्कर ग्राहक सेवेसाठी कामाचे तास",
        reviews_subheading: "वाढत्या स्थानिक व्यवसायांचा विश्वास जिंकलेली सेवा",
        stat_fast: "जलद",
        stat_clean: "सुंदर",
        stat_reliable: "विश्वासार्ह",
        stat_hours: "10-10",
        service_0_title: "फ्लेक्स प्रिंटिंग",
        service_0_desc: "सर्व आकारांमध्ये उच्च-गुणवत्तेचे बॅनर्स.",
        service_1_title: "स्टार प्रिंटिंग",
        service_1_desc: "टिकाऊ आणि आकर्षक प्रिंट्स.",
        service_2_title: "व्हिनाइल प्रिंटिंग",
        service_2_desc: "प्रीमियम फिनिश आणि दीर्घकाळ टिकणारे.",
        service_3_title: "बॅनर डिझाइन",
        service_3_desc: "कस्टम क्रिएटिव्ह डिझाइन्स.",
        service_4_title: "सोशल मीडिया डिझाइन",
        service_4_desc: "डिजिटल प्रमोशनल क्रिएटिव्ह्स.",
        service_5_title: "बॅकलाइट बोर्ड्स",
        service_5_desc: "उजळ आणि नजरेत भरणारे बोर्ड्स.",
        sending_message: "तुमची चौकशी पाठवली जात आहे...",
        success_message: "Shivshri Advertising शी संपर्क केल्याबद्दल धन्यवाद. आम्ही लवकरच संपर्क करू.",
        validation_message: "कृपया सर्व माहिती भरा.",
        error_message: "काहीतरी चूक झाली."
    }
};

function updateDocumentTitle(lang) {
    const siteTitle = translations[lang].site_title;
    const pageTitle = translations[lang][pageTitleKey] || siteTitle;
    document.title = pageTitle === siteTitle ? siteTitle : `${pageTitle} | ${siteTitle}`;
}

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "mr" ? "mr" : "en";
    document.body.classList.add("language-fade");

    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        } else {
            console.log("Missing translation:", key);
        }
    });

    document.querySelectorAll("[data-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-placeholder");
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        } else {
            console.log("Missing translation:", key);
        }
    });

    languageButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    updateDocumentTitle(lang);

    window.setTimeout(() => {
        document.body.classList.remove("language-fade");
    }, 180);
}

const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        siteNav.classList.toggle("open");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("open");
        });
    });
}

if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealElements.forEach((element) => revealObserver.observe(element));
}

if (filterButtons.length && portfolioCards.length) {
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            filterButtons.forEach((item) => item.classList.remove("active"));
            button.classList.add("active");
            portfolioCards.forEach((card) => {
                const matches = filter === "all" || card.dataset.category === filter;
                card.style.display = matches ? "block" : "none";
            });
        });
    });
}

if (portfolioTriggers.length && portfolioModal && modalImage && modalClose) {
    portfolioTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const lang = localStorage.getItem("lang") || "en";
            const titleKey = trigger.dataset.titleKey;
            modalImage.src = trigger.dataset.image;
            modalImage.alt = titleKey && translations[lang][titleKey] ? translations[lang][titleKey] : trigger.dataset.title;
            portfolioModal.classList.add("open");
            portfolioModal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    });

    const closeModal = () => {
        portfolioModal.classList.remove("open");
        portfolioModal.setAttribute("aria-hidden", "true");
        modalImage.src = "";
        document.body.style.overflow = "";
    };

    modalClose.addEventListener("click", closeModal);
    portfolioModal.addEventListener("click", (event) => {
        if (event.target === portfolioModal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && portfolioModal.classList.contains("open")) {
            closeModal();
        }
    });
}

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const lang = localStorage.getItem("lang") || "en";
        formStatus.textContent = translations[lang].sending_message;

        const formData = new FormData(contactForm);
        const payload = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || translations[lang].error_message);
            }

            formStatus.textContent = translations[lang].success_message;
            contactForm.reset();
        } catch (error) {
            if (error.message === "Please fill in all fields.") {
                formStatus.textContent = translations[lang].validation_message;
            } else {
                formStatus.textContent = error.message || translations[lang].error_message;
            }
        }
    });
}
