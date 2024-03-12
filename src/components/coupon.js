export const initCoupons = () => {
  const coupons = document.querySelectorAll('.coupon')

  function copyCouponCode(code, coupon) {
    document.execCommand(code)

    if (!coupon.classList.contains('copied')) {
      coupon.classList.add('copied')

      coupon.querySelector(
        '.click-to-copy'
      ).textContent = `copied successfully!`

      setTimeout(() => {
        coupon.classList.remove('copied')
        coupon.querySelector('.click-to-copy').textContent = `click to copy`
      }, 2000)
    }
  }

  if (coupons) {
    Array.from(coupons).forEach((coupon) =>
      coupon.addEventListener('click', () =>
        copyCouponCode(coupon.dataset.code, coupon)
      )
    )
  }
}
