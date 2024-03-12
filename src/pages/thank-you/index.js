if (window.currentPage === 'thank-you') {
  if (window.innerWidth <= 768) {
    const interesedProductsSwiper = new Swiper('.cart-interested-products', {
      slidesPerView: 'auto',
      spaceBetween: (16 / 1728) * window.innerWidth,
      freeMode: true,
    })
  }
}
