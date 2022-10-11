// *** LIKE - DISLIKE *** //
export const listenForLikes = () => {
  const likes = document.querySelectorAll('.like')
  likes.forEach(like => {
    like.addEventListener('click', (event) => {
      event.target.classList.toggle('like-no')
      event.target.classList.toggle('like-yes')
      if (event.target.classList.contains('like-yes')) {        
        addLike(event.target)
      } else {       
        removeLike(event.target)
      }
    })
    like.addEventListener('keyup', (event) => {
      event.target.classList.toggle('like-no')
      event.target.classList.toggle('like-yes')
      if (event.target.classList.contains('like-yes')) {        
        addLike(event.target)
      } else {       
        removeLike(event.target)
      }
    })
  })
}
const addLike = (elem) => {
  const nbLike = elem.previousElementSibling.textContent;
  // console.log(nbLike)
  const nbLikeInt = parseInt(nbLike)
  // console.log(nbLikeInt)
  elem.previousElementSibling.innerHTML = nbLikeInt + 1
  totalLikes()
}
const removeLike = (elem) => {
  const nbLike = elem.previousElementSibling.textContent;
  // console.log(nbLike)
  const nbLikeInt = parseInt(nbLike)
  // console.log(nbLikeInt)
  elem.previousElementSibling.innerHTML = nbLikeInt - 1
  totalLikes()
}

const totalLikes = () => {
  const listSpan = document.querySelectorAll('.nb-likes')
  const listNbLike = [0]

  Array.from(listSpan).forEach(span => {
    const intNbLike = parseInt(span.textContent)
    listNbLike.push(intNbLike)
  }
  )
  // console.log(listNbLike)
  const totalLike = listNbLike.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  )
  document.getElementById('totalLike').innerHTML = ''
  document.getElementById('totalLike').innerHTML = totalLike
  
  return totalLike
}

