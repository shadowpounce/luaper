import './style.css'
import './src/libs/gsap.min.js'
import './src/libs/ScrollSmoother.min.js'
import './src/libs/ScrollTrigger.min.js'

import './src/pages/home/index.js'
import './src/pages/categories/index.js'
import './src/pages/single-product/index.js'
import './src/pages/contact-us/index.js'
import './src/pages/cart/index.js'
import './src/pages/checkout/index.js'
import './src/pages/faq/index.js'
import './src/pages/dashboard/index.js'
import './src/pages/dashboard/address/index.js'
import './src/pages/dashboard/payment-methods/index.js'
import './src/pages/dashboard/orders/index.js'
import './src/pages/dashboard/edit-profile/index.js'
import './src/pages/thank-you/index.js'

import { initDropdowns } from './src/components/dropdown.js'
import { tickerInit } from './src/components/ticker.js'
import { modalCart } from './src/features/modalCart.js'
import { radioInputs } from './src/components/radio.js'
import { inputsMovingPlaceholder } from './src/components/input.js'
import { initCoupons } from './src/components/coupon.js'
import { initRate } from './src/components/rate.js'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// init smooth scroll
const scrollSmoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1,
  smoothTouch: 0,
})

window.scrollSmoother = scrollSmoother

// register scroll trigger gsap for elements, which must apper by scroll
const revealElements = document.querySelectorAll('.reveal')

if (revealElements) {
  Array.from(revealElements).forEach((el, idx) => {
    ScrollTrigger.create({
      trigger: el.dataset.trigger ?? el,
      start: el.dataset.start ?? `top top+=75%`,
      onEnter: () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          strokeDashoffset: 0,
          delay: el.dataset.delay ?? 0,
          duration: el.dataset.duration ?? 0.75,
        })
      },
    })
  })
}

// init dropdowns
initDropdowns()

// init ticker
tickerInit()

// init modal cart
modalCart()

// init radio inputs
radioInputs()

// init inputs with moving placeholder
inputsMovingPlaceholder()

// init coupons
initCoupons()

// init rate inputs
initRate()
