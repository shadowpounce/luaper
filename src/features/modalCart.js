import { cutText } from '../utils/cutText.js'

export const modalCart = () => {
  const modalCartButton = document.querySelector('.modal-cart-button')
  const modalCartCrossButton = document.querySelector(
    '.modal-cart-cross-button'
  )
  const modalCart = document.querySelector('.modal-cart')
  const modalCartOverlay = document.querySelector('.modal-cart-overlay')
  const modalCartOrderTitles = modalCart.querySelectorAll(
    '.modal-cart-order-title'
  )

  function toggleStyles(state) {
    if (state) {
      modalCart.classList.add('active')
      modalCartOverlay.classList.add('active')
    } else {
      modalCart.classList.remove('active')
      modalCartOverlay.classList.remove('active')
    }
  }

  function toggleModal(state) {
    state ? (modalCartActive = true) : (modalCartActive = false)

    toggleStyles(modalCartActive)
  }

  let modalCartActive = false

  if (modalCart && modalCartOverlay) {
    if (modalCartButton) {
      modalCartButton.addEventListener('click', () => toggleModal(true))
    }

    modalCartOverlay.addEventListener('click', () => toggleModal(false))
  }

  if (modalCartCrossButton) {
    modalCartCrossButton.addEventListener('click', () => toggleModal(false))
  }

  if (modalCartOrderTitles) {
    console.log(modalCartOrderTitles)

    Array.from(modalCartOrderTitles).forEach((t) => {
      t.innerHTML = cutText(t.innerHTML.trim(), 26)
    })
  }
}
