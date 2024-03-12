export const tickerInit = () => {
  const tickerFirst = document.querySelector('#ticker-first')
  const tickerSecond = document.querySelector('#ticker-second')

  if (tickerFirst && tickerSecond) {
    let translateWidth = 0
    const widthCollection = []
    const items = Array.from(tickerFirst.querySelectorAll('div'))

    items.map((item) => {
      widthCollection.push(item.offsetWidth)
    })

    widthCollection.forEach((item, idx) => {
      idx + 1 !== widthCollection.length
        ? (translateWidth += item)
        : (translateWidth +=
            item + widthCollection[0] + (window.innerWidth / 100) * 8 * 2)
    })

    translateWidth += (window.innerWidth / 100) * 2.91 * items.length

    gsap.set(tickerSecond, {
      x: -translateWidth / 2,
    })

    gsap.to(tickerFirst, {
      duration: 20,
      repeat: -1,
      ease: 'none',
      x: translateWidth / 2,
    })

    gsap.to(tickerSecond, {
      duration: 20,
      repeat: -1,
      ease: 'none',
      x: 0,
    })
  }
}
