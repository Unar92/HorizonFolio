//document ready function
$(document).ready(function() {
   
    // get the main container widht
    const mainContainerWidth = $('.js-main-container').width();
    console.log(mainContainerWidth);

    // get the main container height
    const mainContainerHeight = $('.js-main-container').height();
    console.log(mainContainerHeight);

    // get the main container position

    //register the gsap and add the scroll trigger
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.js-main-container', {
        scrollTrigger: {
            trigger: '.js-main-container',
            start: 'top top',
            end: mainContainerWidth + 'px',
            scrub: 1,
            markers: true,
            pin: true,
        },
        x:'-'+mainContainerWidth,
    });

    //move the main container to the right
    gsap.to('.js-main-container', {
        x: 0,
        duration: 0.3,
        ease: 'power2.inOut',
    });
    
});








