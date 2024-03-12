if (window.currentPage === 'faq') {
  const faqItems = Array.from(document.querySelectorAll('.faq-item'))

  if (faqItems) {
    faqItems.forEach((item) => {
      const head = item.querySelector('.faq-item-head')
      const body = item.querySelector('.faq-item-body')
      const bodyHeight = body.scrollHeight

      body.style.height = `0px`

      head.addEventListener('click', () => {
        if (item.classList.contains('active')) {
          item.classList.remove('active')

          body.style.height = `0px`
        } else {
          item.classList.add('active')

          body.style.height = `${bodyHeight}px`
        }
      })
    })
  }
}
