// AOS.init();

// let target = document.querySelector(".services__cards-wrapper");

   var swiper = new Swiper(".conference-swiper", {
    slidesPerView: 3.4,
    spaceBetween: 42,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.4,
          spaceBetween: 42,
        },
      },
   });
   var swiper = new Swiper(".event-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
   });

//    $(window).scroll(function(){
//     if ($(window).scrollTop() >= 50) {
//         $('.navbar').addClass('active');
//     }
//     else {
//         $('.navbar').removeClass('active');
//     }
// });
