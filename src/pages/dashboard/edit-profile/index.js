import { modal } from '../../../features/modal.js'

let addPaymentModal

if (window.currentPage === 'edit-profile') {
  addPaymentModal = modal(
    '#update-avatar-modal',
    '#update-avatar-modal-overlay',
    '#update-avatar-button',
    '.update-avatar-modal-close'
  )
}

export default addPaymentModal
