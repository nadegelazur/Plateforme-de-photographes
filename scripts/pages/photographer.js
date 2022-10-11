import { getData } from '../utils/fetchApi.js'
import { getHeader } from '../components/getHeader.js'
import { MediasFactory } from '../factories/media.js'
import { listenForLikes } from '../components/like.js'
import { initFilter } from '../components/filter.js'
import { LightBox } from '../utils/openLightBox.js'


// btn filter by popularity
// const btnPopularity = document.getElementById('popularity')

// btnPopularity.addEventListener('click', () => {
//   sortByPopularity()
// })
// btnPopularity.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     sortByPopularity()
//   }
// })

// btn filter by title
// const btnTitle = document.getElementById('titre')

// btnTitle.addEventListener('click', () => {
//   sortByTitle()
// })
// btnTitle.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     sortByTitle()
//   }
// })
// // btn filter by date
// const btnDate = document.getElementById('date')

// btnDate.addEventListener('click', () => {
//   sortByDate()
// })
// btnDate.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     sortByDate()
//   }
//   if (e.key === 'Tab') {
//     filterMenu.classList.remove('open-menu')
//     arrow.classList.remove('active')
//   }
// })
// filterBy.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     filterMenu.classList.toggle('open-menu')
//     arrow.classList.toggle('active')
//   }
//   if (e.code === 'Escape') {
//     filterMenu.classList.remove('open-menu')
//     arrow.classList.remove('active')
//   }
// }

// })
// document.addEventListener('keyup', function (event) {
//   // console.log(event.code)
//   if (event.code === 'Escape') {
//     filterMenu.classList.remove('open-menu')
//     arrow.classList.remove('active')
//   }
// })
//* Likes KeyboardNavigation * /

// const iconDiv = document.querySelector('.icon-div')

// iconDiv.addEventListener('keyup', (e) => {
//   if (e.key === 'Enter') {
//     console.log('Enter like')
//   }
// })

const getPhotographerId = () => {
  const params = new URLSearchParams(document.location.search)
  const idParams = params.get('id')
  return idParams
}
export const updateMedia = (media) => {
  const photographContent = document.querySelector('.photograph-content')
  photographContent.innerHTML = ''
  media.forEach(media => {
    const mediaModel = new MediasFactory(media)
    photographContent.innerHTML += mediaModel.createHtml()
  })
}

const displayMediaPhotographer = (idPhotographer, media) => {
  // console.log(idPhotographer)
  // console.log(media)
  const listMediaOfPhotographer = media.filter(media => media.photographerId == idPhotographer)
  // console.log(listMediaOfPhotographer)
  updateMedia(listMediaOfPhotographer)

  initFilter(listMediaOfPhotographer)
}

// *** init GLOBAL *** //
const init = async () => {
  const idPhotographer = getPhotographerId()

  const { photographers, media } = await getData('../../data/photographers.json')

  getHeader(photographers, idPhotographer)

  displayMediaPhotographer(idPhotographer, media)

  listenForLikes();

  // initLightbox();
  LightBox.init()
  
}

init()
