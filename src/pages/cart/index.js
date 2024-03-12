import { cutText } from '../../utils/cutText.js'

if (window.currentPage === 'cart') {
  const cartOrderTitles = document.querySelectorAll('.cart-order-item-title')

  const interesedProductsSwiper = new Swiper('.cart-interested-products', {
    slidesPerView: 'auto',
    spaceBetween: (16 / 1728) * window.innerWidth,
    freeMode: true,
  })

  if (cartOrderTitles) {
    Array.from(cartOrderTitles).forEach(
      (t) => (t.innerHTML = cutText(t.innerHTML.trim(), 26))
    )
  }

  // WORDPRESS EBANIY

  const wpItems = Array.from(document.querySelectorAll('.cart .list > main'))

  if (wpItems) {
    // wp items loop

    wpItems.forEach((wpItem) => {
      const wpTitle = wpItem
        .querySelector('.product-content-detail > a')
        .textContent.trim()
      const wpThumb = wpItem.querySelector('.attachment-thumbnail')
      const wpQtyInput = wpItem.querySelector('.quantity .qty-box .input-text')
      const wpQty = wpItem.querySelector('.quantity .qty-box .input-text').value

      console.log(wpQty)

      const orderItem = document.querySelector(
        `#item-${wpItem.dataset.forItem}`
      )

      if (orderItem) {
        const title = orderItem.querySelector('.cart-order-item-title')
        const thumb = orderItem.querySelector('.order-photo > img')
        const qty = orderItem.querySelectorAll('.product-amount span')

        const qtyMinus = orderItem.querySelectorAll('.product-amount .subtract')
        const qtyPlus = orderItem.querySelectorAll('.product-amount .add')

        ifZero()

        title.innerHTML = wpTitle
        thumb.src = wpThumb.src

        Array.from(qty).forEach((qty) => (qty.innerHTML = wpQty))

        Array.from(qtyMinus).forEach((qtyMinus) =>
          qtyMinus.addEventListener('click', () => changeQty(0))
        )
        Array.from(qtyPlus).forEach((qtyPlus) =>
          qtyPlus.addEventListener('click', () => changeQty(1))
        )

        // functions

        function changeQty(direction) {
          if (direction === 0) {
            if (wpQtyInput.value !== 0) {
              wpQtyInput.value = wpQtyInput.value - 1
            }
          }

          if (direction === 1) {
            wpQtyInput.value = Number(wpQtyInput.value) + 1
          }

          Array.from(qty).forEach((qty) => (qty.innerHTML = wpQtyInput.value))
          ifZero()
        }

        function ifZero() {
          Number(wpQtyInput.value) === 0
            ? Array.from(qtyMinus).forEach((qtyMinus) =>
                qtyMinus.classList.add('disabled')
              )
            : Array.from(qtyMinus).forEach((qtyMinus) =>
                qtyMinus.classList.remove('disabled')
              )
        }
      }
    })

    console.log(wpItems)
  }
}
