import { cutText } from '../../../utils/cutText.js'

if (window.currentPage === 'orders') {
  const checkoutOrderTitles = document.querySelectorAll(
    '.summary-order-item-title'
  )
  const orderDropdowns = document.querySelectorAll('.order-dropdown')
  const statusDropdownTrigger = document.querySelector(
    '.status-dropdown-trigger'
  )
  if (statusDropdownTrigger) {
    let active = false

    function toggle() {
      active
        ? statusDropdownTrigger.classList.add('active')
        : statusDropdownTrigger.classList.remove('active')
    }

    statusDropdownTrigger.addEventListener('click', () => {
      if (active) {
        active = false
        toggle()
      } else {
        active = true
        toggle()
      }
    })
  }

  if (orderDropdowns) {
    Array.from(orderDropdowns).forEach((order) => {
      const head = order.querySelector('.head')
      const list = order.querySelector('.body')
      let active = false

      function toggle() {
        if (active) {
          order.classList.add('active')
          list.style.height = `${(120 / 1728) * window.innerWidth}px`
        } else {
          order.classList.remove('active')
          list.style.height = `0px`
        }
      }

      head.addEventListener('click', () => {
        if (active) {
          active = false
          toggle()
        } else {
          active = true
          toggle()
        }
      })
    })
  }

  if (checkoutOrderTitles) {
    Array.from(checkoutOrderTitles).forEach(
      (t) => (t.innerHTML = cutText(t.innerHTML.trim(), 18))
    )
  }
}
