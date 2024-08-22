$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    waitForAnimate: false,
  });
});
