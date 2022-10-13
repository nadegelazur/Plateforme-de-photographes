import { getData } from '../utils/fetchApi.js'
import { getHeader } from '../components/getHeader.js'
import { MediasFactory } from '../factories/media.js'
import { listenForLikes } from '../components/like.js'
import { initFilter } from '../components/filter.js'
import { LightBox } from '../utils/openLightBox.js'

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

  listenForLikes()

  LightBox.init()
}

init()
