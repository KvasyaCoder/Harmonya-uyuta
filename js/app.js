window.addEventListener('DOMContentLoaded', () => {
    $('#slider').slick('setPosition');
    $(".one-time").not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });

   

    
});