import { modal } from '../../features/modal.js'
import { cutText } from '../../utils/cutText.js'

if (window.currentPage === 'single-product') {
  const productTitleReview = document.querySelector(
    '.single-product-title-review'
  )

  if (productTitleReview) {
    productTitleReview.innerHTML = cutText(
      productTitleReview.innerHTML.trim(),
      46
    )
  }

  const productMediaModalSwiper = new Swiper(
    '.product-media-modal-content-swiper',
    {
      slidesPerView: 'auto',
      spaceBetween: 0,
      freeMode: true,
      effect: 'fade',
      loop: true,
    }
  )

  // product content tabs
  const productTabs = document.querySelector('.product-tabs')
  const tabs = document.querySelectorAll('.tab')
  const contentTabs = document.querySelectorAll('[data-is-tab="true"]')
  const productWrapper = document.querySelector('.product-wrapper')
  const productOrderPanel = document.querySelector('.product-order-panel')
  const productInfo = document.querySelector('.product-info')

  const productMediaSwiperBtnLeft = document.querySelector(
    '#product-media-swiper-left'
  )
  const productMediaSwiperBtnRight = document.querySelector(
    '#product-media-swiper-right'
  )

  if (productMediaSwiperBtnLeft && productMediaSwiperBtnRight) {
    productMediaSwiperBtnRight.addEventListener('click', () =>
      productMediaModalSwiper.slideNext()
    )

    productMediaSwiperBtnLeft.addEventListener('click', () =>
      productMediaModalSwiper.slidePrev()
    )
  }

  let productMediaModal

  productMediaModal = modal(
    '#product-media-modal',
    '#product-media-modal-overlay',
    '.product-media-button',
    '.product-media-modal-close'
  )

  let addReviewModal

  addReviewModal = modal(
    '#add-review-modal',
    '#add-review-modal-overlay',
    '.add-review-button',
    '.add-review-modal-close'
  )

  if (tabs && contentTabs && productTabs) {
    if (contentTabs) {
      Array.from(contentTabs).forEach((item) => {
        const tab = document.querySelector(
          `[data-tab="${item.dataset.contentTab}"]`
        )

        if (
          item.offsetHeight > window.innerHeight * 0.8 &&
          !item.classList.contains('unlimited')
        ) {
          const loadMore = item.querySelector('.load-more')

          item.classList.add('product-tab-content-limited')

          loadMore &&
            loadMore.addEventListener('click', () => {
              if (!item.classList.contains('collapsed')) {
                item.classList.add('collapsed')

                window.scrollSmoother.scrollTo(
                  `[data-tab="${item.dataset.contentTab}"]`,
                  true,
                  'top top+=35%'
                )
              }
            })
        }

        ScrollTrigger.create({
          trigger: item,
          start: 'top top+=85%',
          end: `bottom bottom-=15%`,
          onEnterBack: () => {
            removeStylesFromTabs()
            tab && tab.classList.add('active')
          },
          onEnter: () => {
            removeStylesFromTabs()
            tab && tab.classList.add('active')
          },
        })
      })
    }

    Array.from(tabs).forEach((tab) =>
      tab.addEventListener('click', (ev) => {
        ev.preventDefault()

        const content = document.querySelector(
          `[data-content-tab="${tab.dataset.tab}"]`
        )

        if (content) {
          window.scrollSmoother.scrollTo(
            `[data-content-tab="${tab.dataset.tab}"]`,
            true,
            'top top+=25%'
          )
        }
      })
    )

    function removeStylesFromTabs() {
      Array.from(tabs).forEach((tab) => tab.classList.remove('active'))
    }

    if (productWrapper && productOrderPanel && window.innerWidth >= 577) {
      ScrollTrigger.create({
        trigger: 'footer',
        start: 'top top-=260%',
        end: 'bottom bottom-=300%',

        onEnter: () =>
          gsap.to(productTabs, {
            opacity: 0,
          }),
      })

      ScrollTrigger.create({
        trigger: '.product',
        start: 'top top-=375%',
        end: 'bottom bottom-=300%',
        onEnterBack: () => {
          gsap.to(productTabs, {
            opacity: 1,
          })
        },
      })

      ScrollTrigger.create({
        trigger: '.single-product',
        start: `top top`,
        end: `bottom bottom-=200%`,
        scrub: 0.1,
        pin: true,
        pinType: window.innerWidth > 768 ? 'transform' : 'fixed',
        anticipatePin: 1,
        animation: gsap
          .timeline()
          .to(
            productInfo,
            {
              y: -productInfo.offsetHeight * 0.8,
            },
            0
          )
          .fromTo(
            productTabs,
            {
              duration: 0.065,
              delay: 0.025,
              opacity: 0,
              top: document.querySelector('.fixed-nav').offsetHeight,
            },
            {
              duration: 0.065,
              delay: 0.025,
              opacity: 1,
              top: document.querySelector('.fixed-nav').offsetHeight,
            },
            0
          ),
      })
    }

    if (window.innerWidth <= 576) {
      ScrollTrigger.create({
        trigger: '.product-reviews',
        start: 'top top+=65%',
        end: 'bottom bottom-=25%',
        scrub: 0.01,
        animation: gsap.fromTo(
          productTabs,
          {
            duration: 0.01,
            opacity: 0,
            top: document.querySelector('.fixed-nav').offsetHeight,
          },
          {
            duration: 0.01,
            opacity: 1,
            top: document.querySelector('.fixed-nav').offsetHeight,
          }
        ),
      })
    }
  }

  // product media swiper
  const productMediaSwiper = new Swiper('.product-media-swiper', {
    effect: 'fade',
    loop: true,
  })

  window.productMediaSwiper = productMediaSwiper

  const btnLeft = document.querySelector('.product-media-swiper-arrow.left')
  const btnRight = document.querySelector('.product-media-swiper-arrow.right')

  if (btnLeft && btnRight) {
    btnLeft.addEventListener('click', () => productMediaSwiper.slidePrev())

    btnRight.addEventListener('click', () => productMediaSwiper.slideNext())
  }
}
