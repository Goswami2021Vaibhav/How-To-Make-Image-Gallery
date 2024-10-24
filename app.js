const images = document.querySelectorAll('.gallery-item img')
const imageCount = document.querySelector('.image-count')
const closeLightbox = document.querySelector('.close-lightbox')
const ImageLightbox = document.querySelector('.lightbox-image')
const lightboxcontainer = document.querySelector('.lightbox-container')
const imageDesc = document.querySelector('.footer p')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let activeIndex = 0;
images.forEach(image => image.onclick = (e) => {
    lightboxcontainer.classList.add('show')
    activeIndex = parseInt(e.target.dataset.index)
    renderImage(activeIndex)
})

function renderImage(index) {
    const img = document.querySelector(`.gallery-item img[data-index='${index}']`)
    const src = img.src
    const title = img.title

    ImageLightbox.src = src
    imageDesc.innerHTML = title
    imageCount.innerHTML = `${activeIndex + 1} / ${images.length}`
}

closeLightbox.addEventListener('click', function () {
    lightboxcontainer.classList.remove('show')
})



next.addEventListener('click', function () {
    if (activeIndex === images.length - 1) {
        activeIndex = 0
    } else {
        activeIndex++
    }
    renderImage(activeIndex)
})
prev.addEventListener('click', function () {
    if (activeIndex === 0) {
        activeIndex = images.length - 1
    } else {
        activeIndex--
    }
    renderImage(activeIndex)
})