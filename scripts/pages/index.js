import { getData } from '../utils/fetchApi.js'
import { PhotographersFactory } from '../factories/photographer.js'

const displayPhotographer = (photographers) => {
  const photographerSection = document.querySelector('.photographer-section')
  photographers.forEach(photographer => {
    const photographerModel = new PhotographersFactory(photographer)
    photographerSection.innerHTML += photographerModel.createHtml()
  })
}

const init = async () => {
  const { photographers, media } = await getData('../../data/photographers.json')
  console.log(photographers)
  console.log(media)
  displayPhotographer(photographers)
}

init()
