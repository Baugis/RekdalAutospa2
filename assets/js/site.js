/* SWIPER JS */
const swiperEl = document.querySelector('swiper-container')

const params = {
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    992: {
      showSwitchArrows: false,
    },
  }
}

Object.assign(swiperEl, params)

swiperEl.initialize();

/* MIXITUP */
var products = document.querySelector("#tjenester");
var mixer = mixitup(products);


