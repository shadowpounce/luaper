export const initDropdowns = () => {
  const dropdowns = document.querySelectorAll('.dropdown')

  const filterDropdowns = document.querySelectorAll('.filter-dropdown')

  if (filterDropdowns) {
    Array.from(filterDropdowns).forEach((d) => {
      d.dataset.active = 'true'

      const body = d.querySelector('.filter-dropdown-body')

      const head = d.querySelector('.filter-dropdown-head')
      const height = body.offsetHeight

      body.style.height = `${height}px`

      function toggleStyles() {
        d.dataset.active === 'true'
          ? d.classList.add('active')
          : d.classList.remove('active')
      }

      head.addEventListener('click', () => {
        if (!d.dataset.active || d.dataset.active === 'false') {
          d.dataset.active = 'true'
          body.style.height = `${height}px`
        } else {
          d.dataset.active = 'false'
          body.style.height = `0px`
        }

        toggleStyles()
      })
    })
  }

  if (dropdowns) {
    Array.from(dropdowns).forEach((d) => {
      const head = d.querySelector('.dropdown-head')
      const items = d.querySelectorAll('.dropdown-body .item')

      function toggleStyles() {
        d.dataset.active === 'true'
          ? d.classList.add('active')
          : d.classList.remove('active')
      }

      Array.from(items).forEach((item) => {
        item.addEventListener('click', () => {
          d.dataset.active = 'false'

          toggleStyles()
        })
      })

      head.addEventListener('click', () => {
        if (!d.dataset.active || d.dataset.active === 'false') {
          d.dataset.active = 'true'
        } else {
          d.dataset.active = 'false'
        }

        toggleStyles()
      })
    })
  }
}
