export function clickBtnLike (evt) {
  const btnHeart = evt.currentTarget
  // console.log(btnHeart)

  const parentNode = btnHeart.parentNode
  // console.log(parentNode)

  const nbLike = parentNode.firstChild.textContent
  const nbLikeInt = parseInt(nbLike)

  parentNode.firstChild.innerHTML = nbLikeInt + 1

  // On supprime le coeur vide
  btnHeart.remove()

  // On ajoute le coeur rempli
  const iconDiv = document.createElement('div')
  iconDiv.setAttribute('class', 'icon-div')
  iconDiv.setAttribute('aria-label', 'liké')
  iconDiv.setAttribute('tabIndex', '0')
  iconDiv.setAttribute('role', 'button')
  iconDiv.addEventListener('click', (event) => clickBtnDislike(event))

  const likeIcon = document.createElement('i')
  likeIcon.setAttribute('class', 'fa-solid fa-heart')
  iconDiv.appendChild(likeIcon)

  parentNode.appendChild(iconDiv)

  calculTotalLike()
}

export function clickBtnDislike (evt) {
  const btnHeart = evt.currentTarget
  const parentNode = btnHeart.parentNode
  // console.log(parentNode)

  const nbLike = parentNode.firstChild.textContent
  const nbLikeInt = parseInt(nbLike)

  parentNode.firstChild.innerHTML = nbLikeInt - 1

  // On supprime le coeur rempli
  btnHeart.remove()

  // On ajoute le coeur vide
  const iconDiv = document.createElement('div')
  iconDiv.setAttribute('class', 'icon-div')
  iconDiv.setAttribute('aria-label', 'disliké')
  iconDiv.setAttribute('tabIndex', '0')
  iconDiv.setAttribute('role', 'button')
  iconDiv.addEventListener('click', (event) => clickBtnLike(event))

  const likeIcon = document.createElement('i')
  likeIcon.setAttribute('class', 'fa-regular fa-heart')
  iconDiv.appendChild(likeIcon)

  parentNode.appendChild(iconDiv)

  calculTotalLike()
}

export function calculTotalLike () {
  const listSpan = document.getElementsByClassName('nb-likes')

  const listNbLike = [0]

  Array.from(listSpan).forEach(
    span => {
      const intNbLike = parseInt(span.textContent)
      listNbLike.push(intNbLike)
    }
  )

  // console.log(listNbLike)

  const totatLike = listNbLike.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  )

  document.getElementById('totalLike').innerHTML = ''

  // document.getElementById("totalLike").innerHTML = totatLike + " Nb Like Total"
  document.getElementById('totalLike').innerHTML = totatLike

  return totatLike
}
