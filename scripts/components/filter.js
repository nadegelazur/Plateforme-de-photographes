/* eslint-disable indent */
import { getData } from '../pages/data.js'
import { getMedias } from '../components/getMedia.js'

const params = new URLSearchParams(document.location.search)

export function sortByPopularity () {
  // Etape 1: Le client appuie sur le btn de trie
  let listSorted = []

  // Etape 2: recupérer les données du serveur
  getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
    .then(
      response => {
        // console.log(response)
        // Etape 3: Je filtre les médias du photographe
        const id = params.get('id')
        console.log(id)

        const listeMedia = response.media.filter(media => media.photographerId == id)
        console.log(listeMedia)

        // Etape 4: Je récupère les titres
        listeMedia.forEach((media, index) => {
          // Etape 5: Je les tries
          const nbLike = media.likes
          // console.log(nbLike);
          const obj = {
            nbLike,
            index
          }
          // console.log(obj);
          listSorted.push(obj)

          listSorted = listSorted.sort(function (a, b) {
            if (a.nbLike < b.nbLike) return 1
            if (a.nbLike > b.nbLike) return -1
            return 0
          })
          // console.log(listSorted);
        })

        // on trie notre liste d'article grâce à l'ordre de l'objet
        const newListArticlesSorted = []

        listSorted.forEach(
          obj => {
            const id = obj.index
            // on ajoute l'article selon son index par ordre de like
            newListArticlesSorted.push(listeMedia[id])
          })

        console.log(newListArticlesSorted)

        const profilFilter = response.photographers.filter(p => p.id == id)
        const profil = profilFilter[0]

        //  console.log(profil)

        // Etape 6: On supprime les articles du DOM
        const container = document.getElementsByClassName('photograph-content')
        let child = container[0].lastElementChild
        while (child) {
          container[0].removeChild(child)
          child = container[0].lastElementChild
        }
        // Etape 7: On ajoute les articles triés grâce à la function getMedias
        getMedias(id, profil, newListArticlesSorted)
      })
}

export function sortByTitle () {
  // Etape 1: Le client appuie sur le btn de trie
  let listSorted = []

  // Etape 2: recupérer les données du serveur
  getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
    .then(
      response => {
        // Etape 3: Je filtre les médias du photographe
        const id = params.get('id')
        const listeMedia = response.media.filter(media => media.photographerId == id)

        // Etape 4: Je récupère les titres
        listeMedia.forEach((media, ind) => {
          // Etape 5: Je les tries
          const firstLetter = media.title[0]
          const obj = {
            firstLetter,
            index: ind
          }
          listSorted.push(obj)

          listSorted = listSorted.sort(function (a, b) {
            if (a.firstLetter < b.firstLetter) return -1
            if (a.firstLetter > b.firstLetter) return 1
            return 0
          })
        })

        // on trie notre liste d'article grâce à l'ordre de l'objet
        const newListArticlesSorted = []

        listSorted.forEach(
          obj => {
            const id = obj.index
            // on ajoute l'article selon son index par ordre de titre
            newListArticlesSorted.push(listeMedia[id])
          })

        console.log(newListArticlesSorted)
        const profilFilter = response.photographers.filter(p => p.id == id)
        const profil = profilFilter[0]

        // console.log(profil)

        // Etape 6: On supprime les articles du DOM
        const container = document.getElementsByClassName('photograph-content')
        let child = container[0].lastElementChild
        while (child) {
          container[0].removeChild(child)
          child = container[0].lastElementChild
        }
        // Etape 7: On ajoute les articles triés grâce à la function getMedias

        getMedias(id, profil, newListArticlesSorted)
      }
    )
}

export function sortByDate () {
  // Etape 1: Le client appuie sur le btn de trie
  // dans le profil.js

  // on creer un array vide ou on va stocker nos arcticle trier
  let listSorted = []
  // Etape 2: recupérer les données du serveur
  getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
    .then(
      response => {
        // Etape 3: Je filtre les médias du photographe
        const id = params.get('id')
        const listeMedia = response.media.filter(media => media.photographerId == id)
        console.log(listeMedia)
        // Etape 4: Je récupère les dates
        listeMedia.forEach((media, ind) => {
          // Etape 5: Je les tries
          const firstDate = media.date
          const obj = {
            firstDate,
            index: ind
          }
          listSorted.push(obj)

          listSorted = listSorted.sort(function (a, b) {
            if (a.firstDate < b.firstDate) return -1
            if (a.firstDate > b.firstDate) return 1
            return 0
          })
        })

        // on trie notre liste d'article grâce à l'ordre de l'objet
        const newListArticlesSorted = []

        listSorted.forEach(
          obj => {
            const id = obj.index
            // on ajoute l'article selon son index par ordre de date
            newListArticlesSorted.push(listeMedia[id])
          }
        )

        console.log(newListArticlesSorted)
        const profilFilter = response.photographers.filter(p => p.id == id)
        const profil = profilFilter[0]

        // console.log(profil)

        // Etape 6: On supprime les articles du DOM
        const container = document.getElementsByClassName('photograph-content')
        let child = container[0].lastElementChild
        while (child) {
          container[0].removeChild(child)
          child = container[0].lastElementChild
        }

        // Etape 7: On ajoute les articles triés grâce à la function getMedias

        getMedias(id, profil, newListArticlesSorted)
      }
    )
  console.log('trie par date')
}
// function KeyboarNav () {
//   const SPACEBAR_KEY_CODE = [0, 32]
//   const ENTER_KEY_CODE = 13
//   const DOWN_ARROW_KEY_CODE = 40
//   const UP_ARROW_KEY_CODE = 38
//   const ESCAPE_KEY_CODE = 27

//   const dropdownArrow = document.querySelector('.dropdown__arrow')
//   const dropdownSelectedNode = document.querySelector('.dropdown').firstElementChild

//   const listContainer = document.querySelector('.dropdown__list-container')
//   const list = document.querySelector('.dropdown__list')
//   const listItems = document.querySelectorAll('.dropdown__list-item')
//   const listItemIds = []

//   dropdownSelectedNode.addEventListener('click', (e) => {
//     console.log('ok')
//     toggleListVisibility(e)
//   })
//   dropdownSelectedNode.addEventListener('keydown', e =>
//     toggleListVisibility(e)
//   )

//   // Add each list item's idto the listItems array
//   listItems.forEach(item => listItemIds.push(item.id))


//   listItems.forEach(item => {
//     item.addEventListener('click', e => {
//       setSelectedListItem(e)
//       closeList()
//     })
//     item.addEventListener("keydown", e => {
//         switch (e.keyCode) {
//           case ENTER_KEY_CODE:
//             setSelectedListItem(e);
//             closeList();
//             return;
  
//           case DOWN_ARROW_KEY_CODE:
//             focusNextListItem(DOWN_ARROW_KEY_CODE);
//             return;
  
//           case UP_ARROW_KEY_CODE:
//             focusNextListItem(UP_ARROW_KEY_CODE);
//             return;
  
//           case ESCAPE_KEY_CODE:
//             closeList();
//             return;
  
//            default:
//              return;
//         }
//       });
//     });

//   function setSelectedListItem (e) {
//     const selectedTextToAppend = document.createTextNode(e.target.innerText)
//     dropdownSelectedNode.innerHTML = null
//     dropdownSelectedNode.appendChild(selectedTextToAppend)
//   }

//   function closeList () {
//     list.classList.remove('open')
//     dropdownArrow.classList.remove('expanded')
//     listContainer.setAttribute('aria-expanded', false)
//   }

//   function toggleListVisibility (e) {
//     const openDropDown = SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE

//     if (e.keyCode === ESCAPE_KEY_CODE) {
//       closeList()
//     }
//     if (e.type === 'click' || openDropDown) {
//       list.classList.toggle('open')
//       dropdownArrow.classList.toggle('expanded')
//       listContainer.setAttribute('aria-expanded',
//         list.classList.contains('open'))
//     }
//     if (e.keyCode === DOWN_ARROW_KEY_CODE) {
//       focusNextListItem(DOWN_ARROW_KEY_CODE)
//     }
//     if (e.keyCode === UP_ARROW_KEY_CODE) {
//       focusNextListItem(UP_ARROW_KEY_CODE)
//     }
//   }

//   function focusNextListItem (direction) {
//       const activeElementId = document.activeElement.id;
//       if(activeElementId === "dropdown__selected") {
//           document.querySelector(`#${listItemIds[0]}`).focus();
//       } else {
//           const currentActiveElementIndex = listItemIds.indexOf(activeElementId);
//           if (direction === DOWN_ARROW_KEY_CODE) {
//               const currentActiveElementIsNotLastItem = currentActiveElementIndex < listItemIds.lenght -1;
//               if (currentActiveElementIsNotLastItem) {
//                   const nextListItemId = listItemIds[currentActiveElementIndex + 1];
//                   document.querySelector(`#${nextListItemId}`).focus();
//               }
//           } else if (direction === UP_ARROW_KEY_CODE) {
//             const currentActiveElementIsNotFirstItem =
//             currentActiveElementIndex > 0;
//             if (currentActiveElementIsNotFirstItem) {
//               const nextListItemId = listItemIds[currentActiveElementIndex - 1];
//               document.querySelector(`#${nextListItemId}`).focus();
//             }
//           }

//         }
//   }          
// }