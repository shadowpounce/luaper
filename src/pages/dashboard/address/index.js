if (window.currentPage === 'address') {
  const editBlocks = document.querySelector('#address-edit-blocks')
  const editBilling = document.querySelector('#edit-billing')
  const editShipping = document.querySelector('#edit-shipping')

  const billingForm = document.querySelector('#billing-address')
  const shippingForm = document.querySelector('#shipping-address')

  const saveButtons = document.querySelectorAll('.save-address')

  if (saveButtons) {
    Array.from(saveButtons).forEach((button) =>
      button.addEventListener('click', () => show())
    )
  }

  if (editBilling && editShipping) {
    editBilling.addEventListener('click', (ev) => {
      ev.preventDefault()
      editAddress('billing')
    })

    editShipping.addEventListener('click', (ev) => {
      ev.preventDefault()
      editAddress('shipping')
    })
  }

  function hide() {
    editBlocks.style.display = `none`
    shippingForm.style.display = `none`
    billingForm.style.display = `none`
  }

  function show() {
    shippingForm.style.display = `none`
    billingForm.style.display = `none`
    editBlocks.style.display = `flex`
  }

  function editAddress(type) {
    hide()

    if (type === 'billing') {
      billingForm.style.display = `flex`
    }

    if (type === 'shipping') {
      shippingForm.style.display = `flex`
    }
  }
}
