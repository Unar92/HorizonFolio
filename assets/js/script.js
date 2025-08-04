$(document).ready(function() {
    const mainContainerWidth = $('.js-main-container').width();
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.js-main-container', {
        scrollTrigger: {
            trigger: '.js-main-container',
            start: 'top top',
            end: mainContainerWidth + 'px',
            scrub: 1,
            pin: true,
        },
        x: '-' + mainContainerWidth,
    });

    const popupData = {
        'section-1': {
            title: 'Custom Web Development',
            bannerImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            mainContent: 'We build bespoke websites that are fast, responsive, and tailored to your brand\'s unique needs. Our team of expert developers uses the latest technologies to create stunning digital experiences that captivate your audience and drive results. From corporate sites to creative portfolios, we deliver excellence.',
            features: [
                'Responsive Design',
                'SEO Optimization',
                'Custom CMS',
                'High-Performance'
            ],
            cta: 'Get a Free Consultation'
        },
        'section-2': {
            title: 'E-Commerce Solutions',
            bannerImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            mainContent: 'From Shopify to custom-built platforms, we create powerful e-commerce websites that drive sales and provide a seamless user experience. We focus on creating intuitive navigation, secure payment gateways, and effective product showcases that convert visitors into loyal customers.',
            features: [
                'Secure Payments',
                'Inventory Management',
                'Customer Accounts',
                'Analytics Integration'
            ],
            cta: 'Start Selling Online'
        },
        'section-3': {
            title: 'Our Recent Projects',
            bannerImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            mainContent: 'We are proud of the work we do. Take a look at some of our latest projects and see how we\'ve helped our clients succeed online. Each project showcases our commitment to quality, innovation, and client satisfaction. Our portfolio speaks for itself.',
            features: [
                'Diverse Industries',
                'Proven Results',
                'Client Testimonials',
                'Case Studies'
            ],
            cta: 'View Our Portfolio'
        },
        'section-4': {
            title: 'Let\'s Build Something Great',
            bannerImage: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            mainContent: 'Have a project in mind? We\'d love to hear from you. Contact us today to discuss your ideas and get a free quote. Our team is ready to collaborate with you to bring your vision to life and create something truly exceptional. Let\'s start the conversation.',
            features: [
                'Free Quote',
                'Collaborative Process',
                'Expert Advice',
                'Dedicated Support'
            ],
            cta: 'Contact Us Today'
        }
    };

    const popupOverlay = $('.popup-overlay');
    const popupContainer = $('.popup-container');
    const popupContent = $('.popup-content');
    const popupClose = $('.popup-close');

    const openPopup = (data) => {
        popupContent.html(`
            <div class="popup-header" style="background-image: url('${data.bannerImage}')">
                <h1>${data.title}</h1>
            </div>
            <div class="popup-body">
                <div class="popup-main-content">
                    <p>${data.mainContent}</p>
                </div>
                <div class="popup-features">
                    <h3>Key Features</h3>
                    <ul>
                        ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="popup-footer">
                <button class="cta-button">${data.cta}</button>
            </div>
        `);
        popupOverlay.show();
        gsap.fromTo(popupContainer, {
            y: '100%',
            scale: 0.7,
            opacity: 0
        }, {
            duration: 0.7,
            y: '0%',
            scale: 1,
            opacity: 1,
            visibility: 'visible',
            ease: 'power2.inOut'
        });
    };

    const closePopup = () => {
        gsap.to(popupContainer, {
            duration: 0.7,
            y: '100%',
            scale: 0.7,
            opacity: 0,
            visibility: 'hidden',
            ease: 'power2.inOut',
            onComplete: () => {
                popupOverlay.hide();
            }
        });
    };

    $('.section').on('click', function() {
        const sectionClass = $(this).attr('class').split(' ')[1];
        if (popupData[sectionClass]) {
            openPopup(popupData[sectionClass]);
        }
    });

    popupClose.on('click', closePopup);
});
