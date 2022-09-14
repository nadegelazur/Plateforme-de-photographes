import { getData } from '../pages/data.js'
import { photographerFactory } from '../factories/photographer.js'

getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
  .then(
    response => {
      console.log(response)
      let listPhotographers = []
      listPhotographers = response.photographers

      for (let i = 0; i < listPhotographers.length; i++) {
        console.log(listPhotographers[i])
        const section = document.getElementsByClassName('photographer-section')[0]
        const art = photographerFactory(listPhotographers[i], i).getUserCardDOM()
        section.appendChild(art)
      }
    }
  )
