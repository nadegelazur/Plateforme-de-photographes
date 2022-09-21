import { getData } from '../pages/data.js'
import { getHeader } from '../components/getHeader.js'
import { mediaFactory } from '../factories/media.js'
import { calculTotalLike } from '../components/like.js'
import { sortByTitle, sortByDate, sortByPopularity } from '../components/filter.js'

import { LightBox } from '../utils/openLightBox.js'

const params = new URLSearchParams(document.location.search)
const idParams = params.get('id')

// getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
getData('../../data/photographers.json')
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
      calculTotalLike()
      LightBox.init()
    }
  )

// btn filter by popularity
const btnPopularity = document.getElementById('popularity')

btnPopularity.addEventListener('click', () => {
  sortByPopularity()
})
btnPopularity.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sortByPopularity()
  }
})

// btn filter by title
const btnTitle = document.getElementById('titre')

btnTitle.addEventListener('click', () => {
  sortByTitle()
})
btnTitle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sortByTitle()
  }
})
// btn filter by date
const btnDate = document.getElementById('date')

btnDate.addEventListener('click', () => {
  sortByDate()
})
btnDate.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sortByDate()
  }
  if (e.key === 'Tab') {
    filterMenu.classList.remove('open-menu')
    arrow.classList.remove('active')
  }
})

const filterBy = document.querySelector('.dd-button')
const filterMenu = document.querySelector('.dd-menu')
const arrow = document.querySelector('.arrow')

document.addEventListener('click', showDropdown)

function showDropdown (event) {
  // console.log(event.target)
  if (event.target.closest('.dd-button')) {
    filterMenu.classList.toggle('open-menu')
    arrow.classList.toggle('active')
  }
  if (!event.target.closest('.dd-button')) {
    filterMenu.classList.remove('open-menu')
    arrow.classList.remove('active')
  }
}

filterBy.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    filterMenu.classList.toggle('open-menu')
    arrow.classList.toggle('active')
  }
  if (e.code === 'Escape') {
    filterMenu.classList.remove('open-menu')
    arrow.classList.remove('active')
  }
  // if (e.key === 'ArrowDown') {
  //   console.log('down')
  //   document.querySelectorAll('#popularity').focus()

  // }
  // if (e.key === 'ArrowUp') {
  //   console.log('up')
  // }
})
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
