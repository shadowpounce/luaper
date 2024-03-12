export const initRate = () => {
  const rateInputs = document.querySelectorAll('.rate-input')

  if (rateInputs) {
    Array.from(rateInputs).forEach((el) => {
      const stars = el.querySelectorAll('.star')

      if (stars) {
        Array.from(stars).forEach((star, idx) => {
          star.addEventListener('click', () => {
            if (idx + 1 === stars.length) {
              Array.from(stars).forEach(
                (star) => (star.style.filter = `grayscale(0)`)
              )
            } else {
              Array.from(stars)
                .slice(0, idx + 1)
                .forEach((star) => (star.style.filter = `grayscale(0)`))

              Array.from(stars)
                .slice(idx + 1, stars.length)
                .forEach((star) => (star.style.filter = `grayscale(1)`))
            }
          })
        })
      }
    })
  }
}
