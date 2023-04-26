var MySwiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loopedSlides: 1,
    allowTouchMove: false,
  });
