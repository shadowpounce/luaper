import { cutText } from '../../utils/cutText.js'

if (window.currentPage === 'checkout') {
  const checkoutPage = document.querySelector('.checkout')
  const checkoutSummaryArrow = document.querySelector('.checkout-summary-arrow')
  const checkoutOrderTitles = document.querySelectorAll(
    '.summary-order-item-title'
  )
  const checkoutOrdersList = document.querySelector(
    '.checkout-summary-orders-list'
  )
  const checkoutOrderPreviews = document.querySelector(
    '.checkout-summary-order-previews'
  )
  const checkoutOrdersListHeight = checkoutOrdersList.scrollHeight
  const checkoutOrderPreviewsHeight = checkoutOrderPreviews.scrollHeight

  const stageOneFields = document.querySelector('.stage-one-fields')
  const stageTwoFields = document.querySelector('.stage-two-fields')

  const toStageTwoBtn = document.querySelector('#to-stage-two')
  const toStageOneBtn = document.querySelector('#to-stage-one')

  const editButtons = document.querySelectorAll('.edit-btn')

  checkoutOrderPreviews.style.height = `${checkoutOrderPreviewsHeight}px`

  let active = false
  let checkoutStage = 1

  if (toStageOneBtn) {
    toStageOneBtn.addEventListener('click', () => toStage(1))
  }

  if (toStageTwoBtn) {
    toStageTwoBtn.addEventListener('click', () => toStage(2))
  }

  if (editButtons) {
    Array.from(editButtons).forEach((btn) =>
      btn.addEventListener('click', (ev) => {
        const editFor = document.querySelector(
          `[data-group="${ev.target.dataset.for}"]`
        )

        toStage(1)

        if (editFor) {
          window.scrollTo({
            top: editFor.offsetTop - window.innerHeight / 3,
            left: 0,
            behavior: 'smooth',
          })
        }
      })
    )
  }

  if (checkoutSummaryArrow) {
    checkoutSummaryArrow.addEventListener('click', () => {
      active ? (active = false) : (active = true)

      toggle()
    })
  }

  if (checkoutOrderTitles) {
    Array.from(checkoutOrderTitles).forEach(
      (t) => (t.innerHTML = cutText(t.innerHTML.trim(), 26))
    )
  }

  function toggle() {
    if (active) {
      checkoutOrdersList.style.height = `${checkoutOrdersListHeight}px`
      checkoutOrdersList.classList.add('active')
      checkoutOrderPreviews.classList.remove('active')
      checkoutOrderPreviews.style.height = `0px`
    } else {
      checkoutOrdersList.style.height = `0px`
      checkoutOrderPreviews.classList.add('active')
      checkoutOrdersList.classList.remove('active')
      checkoutOrderPreviews.style.height = `${checkoutOrderPreviewsHeight}px`
    }
  }

  function toStage(stage) {
    checkoutStage = stage

    if (checkoutStage === 1) {
      checkoutPage.classList.remove('stage-two')
    }

    if (checkoutStage === 2) {
      checkoutPage.classList.add('stage-two')
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
}
