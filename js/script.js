// const swiper = new Swiper(".mySwiper", {
//     effect: "slide",
//     slidesPerView: 2,
//     speed: 3000,
//     loop: true,
//     loopedSlides: 9,
//     spaceBetween: 32,
//     autoplay: {
//         "delay": 1000,
//         "disableOnInteraction": false,

//     },

//     breakpoints: {
//         // when window width is >= 320px
//         580: {
//           slidesPerView: 3,
//           spaceBetween: 32,
//         },
//         740: {
//           slidesPerView: 4,
//           spaceBetween: 32,
//         },
//         900: {
//           slidesPerView: 5,
//           spaceBetween: 32,
//         }
//     }

// });

const swiper = new Swiper(".mySwiper", {
    effect: "slide",
    slidesPerView: 1,
    // spaceBetween: 32,
    // slideActiveClass: 'swiper-slide-active',
    // centeredSlides: true,
    // initialSlide: 0,
    // slideToClickedSlide: true,
    // speed: 3000,
    loop: true,
    loopedSlides: 1,
    // spaceBetween: 32,
    // autoplay: {
    //     "delay": 1000,
    //     "disableOnInteraction": false,

    // },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

  

    // breakpoints: {
    //     // when window width is >= 320px
    //     850: {
    //       slidesPerView: 2,
    //       spaceBetween: 32,
    //     },
    //     1250: {
    //       slidesPerView: 3,
    //       spaceBetween: 32,
    //     },
    //     // 900: {
    //     //   slidesPerView: 5,
    //     //   spaceBetween: 32,
    //     // }
    // }

});


const swiperPrincipal = new Swiper(".swiperPrincipal", {
    effect: "slide",
    slidesPerView: 1,
    // spaceBetween: 32,
    // slideActiveClass: 'swiper-slide-active',
    // centeredSlides: true,
    // initialSlide: 0,
    // slideToClickedSlide: true,
    // speed: 3000,
    loop: true,
    loopedSlides: 1,
    // spaceBetween: 32,
    // autoplay: {
    //     "delay": 1000,
    //     "disableOnInteraction": false,

    // },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

  

    // breakpoints: {
    //     // when window width is >= 320px
    //     850: {
    //       slidesPerView: 2,
    //       spaceBetween: 32,
    //     },
    //     1250: {
    //       slidesPerView: 3,
    //       spaceBetween: 32,
    //     },
    //     // 900: {
    //     //   slidesPerView: 5,
    //     //   spaceBetween: 32,
    //     // }
    // }

});


