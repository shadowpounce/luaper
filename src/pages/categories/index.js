if (window.currentPage === 'categories') {
  // mobile filter
  const mobileFilterBtn = document.querySelector('#mobile-filter-btn')
  const closeMobileFilterBtns = document.querySelectorAll(
    '.close-mobile-filter-btn'
  )
  const mobileFilter = document.querySelector('.products-filter-mobile')

  let mobileFilterActive = false

  function toggle() {
    mobileFilterActive
      ? mobileFilter.classList.add('active')
      : mobileFilter.classList.remove('active')
  }

  if (mobileFilterBtn && mobileFilter) {
    mobileFilterBtn.addEventListener('click', () => {
      if (mobileFilterActive) {
        mobileFilterActive = false
        toggle()
      } else {
        mobileFilterActive = true
        toggle()
      }
    })
  }

  if (closeMobileFilterBtns) {
    Array.from(closeMobileFilterBtns).forEach((btn) =>
      btn.addEventListener('click', () => {
        mobileFilterActive = false
        toggle()
      })
    )
  }

  // dual range slider
  let sliderOne = document.getElementById('slider-1')
  let sliderTwo = document.getElementById('slider-2')
  let minGap = 0
  let sliderTrack = document.querySelector('.slider-track')
  let sliderMaxValue = document.getElementById('slider-1').max

  sliderOne.addEventListener('input', () => slideOne())
  sliderTwo.addEventListener('input', () => slideOne())

  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap
    }
    // displayValOne.textContent = sliderOne.value
    fillColor()
  }
  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap
    }
    // displayValTwo.textContent = sliderTwo.value
    fillColor()
  }
  function fillColor() {
    let percent1 = (sliderOne.value / sliderMaxValue) * 100
    let percent2 = (sliderTwo.value / sliderMaxValue) * 100
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #7962EE ${percent1}% , #7962EE ${percent2}%, #dadae5 ${percent2}%)`
  }

  slideOne()
  slideTwo()
}
