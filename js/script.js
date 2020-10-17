$('.slider-wrap').slick({
  infinite: true,
  slidesToShow: 3,
  autoPlay: false,
  arrows: false,
  dots: true,
  autoplaySpeed: 1000,
  centerMode: true,
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
    }
  },

  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    }
  },
  ]
});

$( "#menuToggle" ).click(function() {
  $( ".menu .ul" ).toggleClass("open");
   $( ".bg-box" ).toggleClass("open");
});
