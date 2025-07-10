// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = gsap.utils.toArray(".section");
const container = document.querySelector(".container");

// Create the main horizontal scroll animation
const scrollTween = gsap.to(container, {
    x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => "+=" + (container.scrollWidth - document.documentElement.clientWidth),
        invalidateOnRefresh: true
    }
});

// Function to go to a specific section
function goToSection(index) {
    index = gsap.utils.clamp(0, sections.length - 1, index);
    
    const targetProgress = index / (sections.length - 1);
    const targetScroll = scrollTween.scrollTrigger.start + (scrollTween.scrollTrigger.end - scrollTween.scrollTrigger.start) * targetProgress;
    
    gsap.to(window, {
        scrollTo: {
            y: targetScroll,
            autoKill: false
        },
        duration: 1,
        ease: "power2.inOut",
        overwrite: "auto"
    });
}

// Arrow button click handler
window.scrollToNext = function() {
    const currentProgress = scrollTween.scrollTrigger.progress;
    const currentSection_float = currentProgress * (sections.length - 1);
    goToSection(Math.floor(currentSection_float) + 1);
};

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const currentProgress = scrollTween.scrollTrigger.progress;
    const currentSection_float = currentProgress * (sections.length - 1);

    if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToSection(Math.floor(currentSection_float) + 1);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSection(Math.ceil(currentSection_float) - 1);
    }
});

// Mousewheel navigation for smooth horizontal scrolling
window.addEventListener('wheel', (e) => {
    // We only want to hijack the vertical scroll.
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        // Add the vertical scroll amount to the current scroll position.
        window.scrollBy(0, e.deltaY);
    }
}, { passive: false });

// Add touch swipe support
let startX;
let isDragging = false;
let currentX;

container.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - gsap.getProperty(container, "x");
    currentX = gsap.getProperty(container, "x");
}, {passive: true});

container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    const x = e.touches[0].pageX - startX;
    const bounds = container.offsetWidth - window.innerWidth;
    
    gsap.set(container, {
        x: gsap.utils.clamp(-bounds, 0, x)
    });
}, {passive: true});

container.addEventListener('touchend', () => {
    isDragging = false;
    const momentum = gsap.getProperty(container, "x") - currentX;
    const targetSection = -Math.round(gsap.getProperty(container, "x") / window.innerWidth);
    
    currentSection = gsap.utils.clamp(0, sections.length - 1, targetSection);
    const targetX = currentSection * window.innerWidth;
    
    gsap.to(container, {
        x: -targetX,
        duration: 0.5,
        ease: "power2.out"
    });
});
