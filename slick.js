 $(document).ready(function(){
    $('.articles-container').slick({
        slidesToShow: 2,
        slidesToScroll: 3,
        
        dots: true,
        arrows: true,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow'),
    });
});
