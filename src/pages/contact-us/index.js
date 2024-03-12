if (window.currentPage === 'contact-us') {
  // elements
  const formSubmitBtn = document.querySelector('#form-submit')
  const modal = document.querySelector('.contact-us-modal')
  const modalOverlay = document.querySelector('.contact-us-modal-overlay')

  if (formSubmitBtn) {
    formSubmitBtn.addEventListener('click', (ev) => sendForm(ev))
  }

  if (modal && modalOverlay) {
    modalOverlay.addEventListener('click', () => {
      modal.classList.remove('active')
      modalOverlay.classList.remove('active')
    })
  }

  //   send form function
  function sendForm(ev) {
    ev.preventDefault()

    if (modal && modalOverlay) {
      modal.classList.add('active')
      modalOverlay.classList.add('active')
    }
  }
}
