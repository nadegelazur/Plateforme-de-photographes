import { updateMedia } from '../pages/photographer.js'
import { listenForLikes } from './like.js'

export const initFilter = (listMediaOfPhotographer) => {
  const filterBy = document.querySelector('.dd-button')
  filterBy.addEventListener('click', showDropdown)

  const btnPopularity = document.getElementById('popularity')
  const btnTitle = document.getElementById('titre')
  const btnDate = document.getElementById('date')
  // Filter by POPULARITY
  btnPopularity.addEventListener('click', () => {
    const listSortedByPopularity = listMediaOfPhotographer.sort(function (a, b) {
      return (b.likes - a.likes)
    })
    updateMedia(listSortedByPopularity)
    listenForLikes()
  })
  btnPopularity.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const listSortedByPopularity = listMediaOfPhotographer.sort(function (a, b) {
        return (b.likes - a.likes)
      })
      updateMedia(listSortedByPopularity)
      listenForLikes()
    }
  })
  // Filter by TITLE
  btnTitle.addEventListener('click', () => {
    // console.log('title')
    const listSortedByTitle = listMediaOfPhotographer.sort(function (a, b) {
      if (a.title < b.title) return -1
    })
    updateMedia(listSortedByTitle)
    listenForLikes()
  })
  btnTitle.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const listSortedByTitle = listMediaOfPhotographer.sort(function (a, b) {
        if (a.title < b.title) return -1
      })
      updateMedia(listSortedByTitle)
      listenForLikes()
    }
  })
  // Filter by DATE
  btnDate.addEventListener('click', () => {
    // console.log('date')
    const listSortedByDate = listMediaOfPhotographer.sort(function (a, b) {
      if (a.date > b.date) return -1
    })
    // console.log(listSortedByDate)
    updateMedia(listSortedByDate)
    listenForLikes()
  })
  btnDate.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const listSortedByDate = listMediaOfPhotographer.sort(function (a, b) {
        if (a.date > b.date) return -1
      })
      updateMedia(listSortedByDate)
      listenForLikes()
    }
  })
  btnDate.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const filterMenu = document.querySelector('.dd-menu')
      filterMenu.classList.remove('open-menu')
      const arrow = document.querySelector('.dd-button__arrow')
      arrow.classList.remove('active')
    }
  })
  filterBy.addEventListener('click', showDropdown)
}

const showDropdown = (event) => {
  const filterMenu = document.querySelector('.dd-menu')
  const arrow = document.querySelector('.arrow')
  if (event.target.closest('.dd-button')) {
    filterMenu.classList.toggle('open-menu')
    arrow.classList.toggle('active')
  }
  if (!event.target.closest('.dd-button')) {
    filterMenu.classList.remove('open-menu')
    arrow.classList.remove('active')
  }
}

// *** KEYBOARD NAVIGATION *** //

const filterBy = document.querySelector('.dd-button')
filterBy.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const filterMenu = document.querySelector('.dd-menu')
    const arrow = document.querySelector('.arrow')
    if (e.target.closest('.dd-button')) {
      filterMenu.classList.toggle('open-menu')
      arrow.classList.toggle('active')
    }
    if (!e.target.closest('.dd-button')) {
      filterMenu.classList.remove('open-menu')
      arrow.classList.remove('active')
    }
  }
})
