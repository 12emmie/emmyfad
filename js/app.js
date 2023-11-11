$(document).ready(function(){
  //HEAD SLIDER
  $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    navText : ['PREV', 'NEXT'],
    responsive:{
      0:{

      },
      670:{

      },
      1000:{

      },
    }
  })

  //TEAM SLIDER
  $('#team-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    smartSpeed: 1000,
    navText : ['PREV', 'NEXT'],
    responsive:{
      0:{
        items: 1,
        nav: false,
        margin: 0,
      },
      780:{
        items: 2,
      },
      1140:{
        items: 2,
        center: true,
        dots: true,
      },
    }
  })
  //REVIEWS SLIDER
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    smartSpeed: 800,
  })
});
