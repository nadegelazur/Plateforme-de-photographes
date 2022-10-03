import { updateMedia } from '../pages/photographer.js' 


export const initFilter = (listMediaOfPhotographer) => {
  const filterBy = document.querySelector('.dd-button')
  filterBy.addEventListener('click', showDropdown)
  
  const btnPopularity = document.getElementById('popularity')
  const btnTitle = document.getElementById('titre')
  const btnDate = document.getElementById('date')

  btnPopularity.addEventListener('click', () => { 
    // console.log('popularity')
    // console.log(listMediaOfPhotographer)
    const listSortedByPopularity = listMediaOfPhotographer.sort(function (a, b) {
      return (b.likes - a.likes) 
    })
    updateMedia(listSortedByPopularity)
  })

  btnTitle.addEventListener('click', () => {
    // console.log('title')
    const listSortedByTitle = listMediaOfPhotographer.sort(function(a,b) {
      //if (a['title'] < b['title']) return -1
      if (a.title < b.title) return -1
    })
    updateMedia(listSortedByTitle)
  })
  btnDate.addEventListener('click', () => {
    // console.log('date')
    const listSortedByDate = listMediaOfPhotographer.sort(function(a,b) {
      if (a.date > b.date) return -1
    })
    // console.log(listSortedByDate)
    updateMedia(listSortedByDate)
  })
  filterBy.addEventListener('click', showDropdown)
}

const showDropdown = (event) => {
    // console.log(event.target)
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
