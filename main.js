$("#img-carousel").owlCarousel({
  center: false,
  items: 1,
  nav: false,
  loop: true,
  margin: 10,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive: {
    700: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});
