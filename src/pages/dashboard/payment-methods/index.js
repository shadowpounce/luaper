import { modal } from '../../../features/modal.js'

let addPaymentModal

if (window.currentPage === 'payment-methods') {
  addPaymentModal = modal(
    '#add-payment-modal',
    '#add-payment-modal-overlay',
    '#add-payment-button',
    '.add-payment-modal-close'
  )
}

export default addPaymentModal
