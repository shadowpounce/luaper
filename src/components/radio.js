export const radioInputs = () => {
  const radioInputs = document.querySelectorAll('.radio-select')

  if (radioInputs) {
    Array.from(radioInputs).forEach((r) =>
      r.addEventListener('click', () => {
        const input = r.querySelector('input')

        if (r.classList.contains('checked')) {
          Array.from(radioInputs).forEach((r) => r.classList.remove('checked'))

          r.classList.add('checked')
        } else {
          Array.from(radioInputs).forEach((r) => r.classList.remove('checked'))

          r.classList.add('checked')
          input.checked = true
        }
      })
    )
  }
}
