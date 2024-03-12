import { cutText } from '../../utils/cutText.js'

if (window.currentPage === 'home') {
  // cut titles for products cards in "You may also like section"
  const productCardTitles = document.querySelectorAll('.product-card__title')

  if (productCardTitles) {
    Array.from(productCardTitles).forEach((t) => {
      t.innerHTML = cutText(t.innerHTML.trim(), 34)
    })
  }

  // reviews carousel
  const reviewsCarousel = new Swiper('.reviews-swiper', {
    slidesPerView: 'auto',
    spaceBetween: (16 / 1728) * window.innerWidth,
    freeMode: true,
  })

  // falling pills in hero sections
  const canvasBox = document.querySelector('.hero-block-canvas')
  const canvas = document.querySelector('.hero-block-canvas canvas')

  const pillsData = [
    {
      imgLink: `/falling-pills/1.png`,
      xSize: (151 / 1728) * window.innerWidth,
    },
    {
      imgLink: `/falling-pills/2.png`,
      xSize: (138 / 1728) * window.innerWidth,
    },
    {
      imgLink: `/falling-pills/3.png`,
      xSize: (119 / 1728) * window.innerWidth,
    },
    {
      imgLink: `/falling-pills/4.png`,
      xSize: (139 / 1728) * window.innerWidth,
    },
    {
      imgLink: `/falling-pills/5.png`,
      xSize: (142 / 1728) * window.innerWidth,
    },
    {
      imgLink: `/falling-pills/6.png`,
      xSize: (142 / 1728) * window.innerWidth,
    },
    {
      imgLink: `/falling-pills/7.png`,
      xSize: (139 / 1728) * window.innerWidth,
    },
  ]

  const BlockSpawn = (link, xSize, i, screenWidth) => {
    const sizeScale =
      screenWidth >= 1440
        ? 1.25 //desktop
        : screenWidth >= 769
        ? (screenWidth * 1.25) / 1440 //desktop small
        : screenWidth >= 450
        ? (screenWidth * 1.25) / 650 //tablet
        : screenWidth >= 320
        ? (screenWidth * 1.25) / 550 //mobile
        : 1

    return Matter.Bodies.rectangle(
      screenWidth <= 768
        ? 30 * sizeScale + 30 * sizeScale * (i + 1)
        : 90 * sizeScale + 140 * sizeScale * (i + 1), // x position
      i % 2
        ? -500 * sizeScale * (1 * (i + 1))
        : -400 * sizeScale * (1 * (i + 1)), // y position
      xSize * sizeScale, // width
      80 * sizeScale, // height
      {
        restitution: 0.7,
        chamfer: { radius: 40 * sizeScale }, // block radius
        render: {
          sprite: {
            texture: link,
            xScale: 1 * sizeScale,
            yScale: 1 * sizeScale,
          },
        },
      }
    )
  }

  const RenderScene = () => {
    const screenWidth = canvas.offsetWidth
    const screenHeight = canvas.offsetHeight

    let engine = Matter.Engine.create({})

    engine.gravity.y = 0.7 // set gravity

    let render = Matter.Render.create({
      element: canvasBox,
      engine: engine,
      canvas: canvas,
      options: {
        width: screenWidth,
        height: screenHeight,
        background: 'transparent',
        wireframes: false,
      },
    })

    const circleOne = Matter.Bodies.circle(
      screenWidth / 2,
      -screenHeight,
      (26 / 1728) * window.innerWidth,
      {
        render: {
          fillStyle: 'black',
        },
      }
    )

    const circleTwo = Matter.Bodies.circle(
      screenWidth / 2,
      -screenHeight,
      (16 / 1728) * window.innerWidth,
      {
        render: {
          fillStyle: 'black',
        },
      }
    )

    const circleThree = Matter.Bodies.circle(
      screenWidth / 2,
      -screenHeight,
      (20 / 1728) * window.innerWidth,
      {
        render: {
          fillStyle: 'white',
        },
      }
    )

    const circleFour = Matter.Bodies.circle(
      screenWidth / 2,
      -screenHeight,
      (20 / 1728) * window.innerWidth,
      {
        render: {
          fillStyle: 'white',
        },
      }
    )

    const floor = Matter.Bodies.rectangle(
      screenWidth / 2, // scene position x
      screenHeight + 47, // scene position y
      screenWidth, // scene width
      100, // scene height
      {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
        },
      }
    )

    const wallRight = Matter.Bodies.rectangle(
      screenWidth, // position x
      screenHeight / 2, // position y
      1, // width
      screenHeight, // height
      {
        isStatic: true,
        render: {
          fillStyle: 'white',
        },
      }
    )

    const wallLeft = Matter.Bodies.rectangle(
      0,
      screenHeight / 2,
      1,
      screenHeight,
      {
        isStatic: true,
        render: {
          fillStyle: 'white',
        },
      }
    )

    const renderBlocks = pillsData.map((e, i) => {
      return BlockSpawn(e.imgLink, e.xSize, i, screenWidth)
    })

    Matter.World.add(engine.world, [
      floor,
      wallLeft,
      wallRight,
      circleOne,
      circleTwo,
      circleThree,
      circleFour,
      ...renderBlocks,
    ])

    Matter.Runner.run(engine)
    Matter.Render.run(render)
  }

  ScrollTrigger.create({
    trigger: '.hero-blocks',
    start: 'top top+=50%',
    onEnter: () => RenderScene(),
    once: true,
  })

  // tablet and smaller swipers

  const categoriesSwiper = new Swiper('.our-categories-swiper', {
    slidesPerView: 'auto',
    spaceBetween: (32 / 1728) * window.innerWidth,
    speed: 750,
  })

  const categoriesSwiperBtnLeft = document.querySelector(
    '.categories-swiper-btn-left'
  )

  const categoriesSwiperBtnRight = document.querySelector(
    '.categories-swiper-btn-right'
  )

  if (categoriesSwiperBtnLeft && categoriesSwiperBtnRight) {
    categoriesSwiperBtnLeft.addEventListener('click', () =>
      categoriesSwiper.slidePrev()
    )

    categoriesSwiperBtnRight.addEventListener('click', () =>
      categoriesSwiper.slideNext()
    )
  }

  if (window.innerWidth <= 992) {
    const suggestionsSwiper = new Swiper('.suggestion-products', {
      slidesPerView: 'auto',
      spaceBetween: (16 / 1728) * window.innerWidth,
      freeMode: true,
    })

    const featuredProductsSwiper = new Swiper('.featured-products-row', {
      slidesPerView: 'auto',
      spaceBetween: (16 / 1728) * window.innerWidth,
      freeMode: true,
    })
  }
}
