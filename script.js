let images = [
  {
    url: './assets/RostovAdmiral.png',
    title: 'Rostov-on-Don, Admiral',
    city: 'Rostov-on-Don LCD admiral',
    area: '81',
    repairTime: '3.5 months',
    repairCost: 'Upon request',
  },
  {
    url: './assets/Sochi.png',
    title: 'Sochi Thieves',
    city: 'Sochi Thieves',
    area: '105',
    repairTime: '4 months',
    repairCost: 'Upon request',
  },
  {
    url: './assets/RostovPatriotic.png',
    title: 'Rostov-on-Don Patriotic',
    city: 'Rostov-on-Don Patriotic',
    area: '93',
    repairTime: '3 months',
    repairCost: 'Upon request',
  },
]

function initSlider() {
  const sliderImage = document.querySelector('.slider__image')
  const sliderTitles = document.querySelector('.slider__titles')
  const parameters = document.querySelector('.parameters')
  const dots = document.querySelector('.slider-controls__dots')
  let currentImage = 0
  let newImage = currentImage

  images.forEach(image => {
    const title = document.createElement('div')
    title.classList.add('slider__image-title')
    title.textContent = image.title
    sliderTitles.appendChild(title)
  })

  initArrows()
  initDots()
  showImage(newImage)
  showParameters(newImage)

  function initDots() {
    images.forEach(image => {
      const dot = document.createElement('div')
      dot.classList.add('slider-controls__dot')
      dots.appendChild(dot)
    })
  }

  function showParameters(index) {
    let content = `<li class="parameters__item">
    <h2 class="parameters__tittle">City:</h2>
    ${images[index].city}
  </li>
  <li class="parameters__item">
    <h2 class="parameters__tittle">apartment area:</h2>
    ${images[index].area} m<sup>2</sup>
  </li>
  <li class="parameters__item">
    <h2 class="parameters__tittle">Repair time:</h2>
    ${images[index].repairTime}
  </li>
  <li class="parameters__item">
    <h2 class="parameters__tittle">Repair Cost:</h2>
    ${images[index].repairCost}
  </li>`

    parameters.innerHTML = content
  }

  function showImage(index) {
    sliderImage.style.backgroundImage = `url(${images[index].url})`
    sliderTitles.childNodes[currentImage].classList.remove('active')
    sliderTitles.childNodes[index].classList.add('active')

    dots.childNodes[currentImage].classList.remove('active')
    dots.childNodes[index].classList.add('active')
  }

  function initArrows() {
    let arrows = document.querySelectorAll('.slider-controls__arrow')
    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        if (arrow.classList.contains('arrow-left')) {
          newImage = currentImage === 0 ? images.length - 1 : currentImage - 1
        } else {
          newImage = currentImage === images.length - 1 ? 0 : currentImage + 1
        }
        showImage(newImage)
        showParameters(newImage)
        currentImage = newImage
      })
    })
  }
}

document.addEventListener('DOMContentLoaded', initSlider)
