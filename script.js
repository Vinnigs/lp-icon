
const swiper = new Swiper(".mySwiper", {
    effect: "slide",
    slidesPerView: 1,
    
    loop: true,
    loopedSlides: 1,


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },


});


const swiperPrincipal = new Swiper(".swiperPrincipal", {
    effect: "slide",
    slidesPerView: 1,
    
    loop: true,
    loopedSlides: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

  

});


