import { getData } from '../pages/data.js'
import { getHeader } from '../components/getHeader.js'
import { mediaFactory } from '../factories/media.js'
import { calculTotalLike } from '../components/like.js'
import { sortByTitle, sortByDate, sortByPopularity } from '../components/filter.js'

import { LightBox } from '../utils/openLightBox.js'

const params = new URLSearchParams(document.location.search)
const idParams = params.get('id')

// getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
  .then(
    response => {
      // Etape 1: Recuperer Profil
      let listPhotographers = []
      listPhotographers = response.photographers
      // console.log(listPhotographers)

      let myPhotgrapher = {}

      listPhotographers.forEach(photograph => {
        if (photograph.id === idParams) {
          myPhotgrapher = photograph
        }
      })

      // console.log(myPhotgrapher)

      // 1. profil
      getHeader(listPhotographers, idParams)

      // Etape 2: Recuperer liste Media
      let listMedia = []
      listMedia = response.media
      // console.log(listMedia)

      // console.log(idParams)
      const listMediaOfPhotographer = []

      listMedia.forEach((media) => {
        if (media.photographerId == idParams) {
        // console.log(media)
          mediaFactory(media)
        }
      })

      // listPhotographers.forEach(element => {
      //     console.log(element)
      //     let section = document.getElementsByClassName("photographer-section")[0];
      //     let art = photographerFactory(element).getUserCardDOM();

      //     section.appendChild(art);

      // });

      // console.log(listMediaOfPhotographer)

      // J'affiche mes elements au DOM

      // 2. liste des medias
      // getMedias(idParams, myPhotgrapher, listMediaOfPhotographer)

      calculTotalLike()

      LightBox.init()
    }

  )

// btn filter by popularity
const btnPopularity = document.getElementById('popularity')

btnPopularity.addEventListener('click', () => {
  sortByPopularity()
})

// btn filter by title
const btnTitle = document.getElementById('titre')

btnTitle.addEventListener('click', () => {
  sortByTitle()
})

// btn filter by date
const btnDate = document.getElementById('date')

btnDate.addEventListener('click', () => {
  sortByDate()
})

const filterBy = document.querySelector('.dd-button')
const filterMenu = document.querySelector('.dd-menu')
const arrow = document.querySelector('.arrow')

// const listbox = document.querySelector('[role="listbox"]')

let previousActiveElement

filterBy.addEventListener('click', function () {
  showDropdown()
})
filterBy.addEventListener('keydown', showDropdown)

arrow.addEventListener('click', showDropdown)
arrow.addEventListener('keydown', showDropdown)

function showDropdown () {
  filterMenu.classList.toggle('open-menu')
  arrow.classList.toggle('active')
  previousActiveElement = document.activeElement
  console.log(previousActiveElement)
  document.querySelector('popularity').focus()
}
