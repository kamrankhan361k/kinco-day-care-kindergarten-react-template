import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

export const heroSlider = {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
};
export const themesflatcarousel = {
  loop: true,
  speed: 1400,
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  navigation: {
    nextEl: ".owl-prev",
    prevEl: ".owl-next",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
};
export const fourSlider = {
  loop: true,
  speed: 1400,
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1790: {
      slidesPerView: 4,
    },
  },
};
export const twoSlider = {
  loop: true,
  speed: 1400,
  spaceBetween: 66,

  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
  },
};
export const testimonialSlider = {
  loop: true,
  speed: 1400,
  spaceBetween: 90,

  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
};
export const brandSlider = {
  loop: true,
  speed: 1400,
  spaceBetween: 60,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
};
