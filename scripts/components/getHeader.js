export function getHeader (profils, id) {
  const logoLien = document.querySelector('.logo-lien')
  const photographHeader = document.querySelector('.photograph-header')

  logoLien.focus()
  // Current photographer
  let profil = profils.find(item => item.id == id)

  const myDiv1 = document.createElement('div')
  const myH2 = document.createElement('h2')
  const myH3 = document.createElement('h3')
  const myPara1 = document.createElement('p')

  myDiv1.setAttribute('class', 'profil-title')
  myH2.textContent = profil.name
  myH3.textContent = `${profil.city} , ${profil.country}`
  myPara1.textContent = profil.tagline

  photographHeader.appendChild(myDiv1)
  myDiv1.appendChild(myH2)
  myDiv1.appendChild(myH3)
  myDiv1.appendChild(myPara1)
  /**
   * Photo Profil
   */
  const myDiv2 = document.createElement('div')
  const myImg = document.createElement('img')

  myDiv2.setAttribute('class', 'profil-photo')
  myImg.setAttribute('src', '/photographers/' + profil.portrait)
  myImg.setAttribute('class', 'photo')
  myImg.setAttribute('alt', 'photo de profile')

  photographHeader.appendChild(myDiv2)
  myDiv2.appendChild(myImg)

  /**
   *section Aside INFO
    */
  const main = document.getElementById('main')
  const asideInfo = document.createElement('aside')
  const divAside = document.createElement('div')

  const divInfoLikes = document.createElement('div')
  divInfoLikes.setAttribute('class', 'info-ttlikes')
  const divPrixJour = document.createElement('div')
  divPrixJour.setAttribute('class', 'info-prix')

  divAside.appendChild(divInfoLikes)
  divAside.appendChild(divPrixJour)

  const span = document.createElement('span')
  span.setAttribute('id', 'totalLike')
  span.textContent = ' '

  const spanPrixJour = document.createElement('span')
  divPrixJour.appendChild(spanPrixJour)
  spanPrixJour.textContent = `${profil.price} /jours`

  const iconLike = document.createElement('i')
  iconLike.setAttribute('class', 'fa-solid fa-heart')

  divInfoLikes.appendChild(span)
  divInfoLikes.appendChild(iconLike)
  asideInfo.appendChild(divAside)
  main.appendChild(asideInfo)
}
