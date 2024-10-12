$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:1,
    speed: 500,
    easing: "ease",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    waitForAnimate: false,
  });
});
