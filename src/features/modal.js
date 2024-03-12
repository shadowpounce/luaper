export const modal = (selector, overlaySelector, trigger, closeTrigger) => {
  const modal = document.querySelector(selector)
  const modalCloseBtn = modal ? modal.querySelector('.cross-button') : false
  const overlay = document.querySelector(overlaySelector)
  const triggers = document.querySelectorAll(trigger)
  const closeTriggers = document.querySelectorAll(closeTrigger)

  let active = false

  if (overlay) {
    overlay.addEventListener('click', () => {
      active = false
      toggle()
    })
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      active = false
      toggle()
    })
  }

  function toggle() {
    if (active) {
      modal.classList.add('active')
      overlay.classList.add('active')
    } else {
      modal.classList.remove('active')
      overlay.classList.remove('active')
    }
  }

  if (triggers) {
    Array.from(triggers).forEach((t) =>
      t.addEventListener('click', () => {
        active = true
        toggle()
      })
    )
  }

  if (closeTriggers) {
    Array.from(closeTriggers).forEach((t) =>
      t.addEventListener('click', () => {
        active = false
        toggle()
      })
    )
  }
}
