export const inputsMovingPlaceholder = () => {
  const inputsMovingPlaceholder = document.querySelectorAll(
    '.input-moving-placeholder'
  )

  if (inputsMovingPlaceholder) {
    Array.from(inputsMovingPlaceholder).forEach((i) => {
      const input = i.querySelector('input')

      input.addEventListener('input', (ev) => {
        if (ev.target.value) {
          i.classList.add('filled')
        } else {
          i.classList.remove('filled')
        }
      })
    })
  }
}
