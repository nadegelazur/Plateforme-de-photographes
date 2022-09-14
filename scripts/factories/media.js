import { getPathMedia } from '../components/getPathMedia.js'
import { clickBtnLike } from '../components/like.js'

export function mediaFactory (media) {
  // console.log(media)

  if (media.image !== undefined) {
    // console.log(media.image)
    return createImage(media)
  }
  return createVideo(media)
  function createImage (media) {
    const photographContent = document.querySelector('.photograph-content')
    const myArticle = document.createElement('article')
    photographContent.appendChild(myArticle)

    const myLien = document.createElement('a')
    myLien.setAttribute('class', 'article-image')

    const pathMedia = getPathMedia(media.photographerId)
    myLien.setAttribute('href', `${pathMedia}/${media.image}`)
    myArticle.appendChild(myLien)

    const mediaImg = document.createElement('img')
    mediaImg.src = `${pathMedia}/${media.image}`
    mediaImg.setAttribute('role', 'link')
    mediaImg.setAttribute('tabIndex', '0')
    mediaImg.setAttribute('alt', `${media.title}`)

    // myImg.setAttribute("src", "/assets/medias/" + profil.name + "/" + media.image);
    myLien.appendChild(mediaImg)

    // div for title and likes
    const mediaDetails = document.createElement('div')
    mediaDetails.setAttribute('class', 'media-title')

    // media Title
    const mediaTitle = document.createElement('h3')
    mediaTitle.textContent = `${media.title}`
    mediaDetails.appendChild(mediaTitle)

    // media likes
    const mediaLikes = document.createElement('div')
    mediaLikes.setAttribute('class', 'media-likes')
    mediaDetails.appendChild(mediaLikes)

    const totalLikes = document.createElement('span')
    totalLikes.setAttribute('class', 'nb-likes')

    totalLikes.textContent = `${media.likes}`
    mediaLikes.appendChild(totalLikes)

    const iconDiv = document.createElement('div')
    iconDiv.setAttribute('class', 'icon-div')
    iconDiv.setAttribute('aria-label', 'likes')

    iconDiv.setAttribute('tabIndex', '0')
    iconDiv.setAttribute('role', 'button')

    iconDiv.addEventListener('click', (event) => clickBtnLike(event))

    const likeIcon = document.createElement('i')
    likeIcon.setAttribute('class', 'fa-regular fa-heart')
    likeIcon.setAttribute('aria-hidden', 'false')

    mediaLikes.appendChild(iconDiv)
    iconDiv.appendChild(likeIcon)
    myArticle.appendChild(mediaDetails)

    return (myArticle)
  }

  function createVideo (media) {
    const photographContent = document.querySelector('.photograph-content')
    const myArticle = document.createElement('article')
    const myLien = document.createElement('a')

    myArticle.setAttribute('class', 'art-video')
    myArticle.style.zIndex = '-1'

    const pathMedia = getPathMedia(media.photographerId)
    const mediaVideo = document.createElement('video')
    mediaVideo.src = `${pathMedia}/${media.video}`
    mediaVideo.type = 'video/mp4'
    mediaVideo.setAttribute('role', 'link')
    mediaVideo.setAttribute('tabindex', 'O')
    mediaVideo.setAttribute('aria-label', `${media.title}`)
    mediaVideo.setAttribute('alt', `${media.title}`)

    myLien.setAttribute('class', 'article-video')
    myLien.setAttribute('href', `${pathMedia}/${media.video}`)
    myArticle.style.zIndex = '1'

    myLien.appendChild(mediaVideo)
    myArticle.appendChild(myLien)
    photographContent.appendChild(myArticle)

    const spanVideo = document.createElement('span')
    spanVideo.setAttribute('class', 'play-circle')

    const iconPlay = document.createElement('i')
    iconPlay.setAttribute('class', 'fa-solid fa-circle-play')
    iconPlay.setAttribute('aria-hidden', 'false')
    spanVideo.appendChild(iconPlay)

    // myArticle.style.zIndex = "-1"

    // play button
    const playButton = document.createElement('button')
    playButton.setAttribute('role', 'play')
    playButton.textContent = 'play'

    mediaVideo.appendChild(playButton)
    myLien.appendChild(mediaVideo)
    myLien.appendChild(spanVideo)

    // mediaVideo.addEventListener('click',handlePlayButton)
    // async function playVideo() {
    //   try {
    //   await mediaVideo.play();
    //   playButton.classList.add("playing");
    //   } catch(err) {
    //   playButton.classList.remove("playing");
    //   }
    // }
    // function handlePlayButton() {
    //     if (mediaVideo.paused) {
    //     playVideo();
    //     } else {
    //         mediaVideo.pause();
    //     playButton.classList.remove("playing");
    //     }
    // }

    // div for title and likes
    const mediaDetails = document.createElement('div')
    mediaDetails.setAttribute('class', 'media-title')

    // media Title
    const mediaTitle = document.createElement('h3')
    mediaTitle.textContent = `${media.title}`
    mediaDetails.appendChild(mediaTitle)

    // media likes
    const mediaLikes = document.createElement('div')
    mediaLikes.setAttribute('class', 'media-likes')
    mediaDetails.appendChild(mediaLikes)

    const totalLikes = document.createElement('span')
    totalLikes.setAttribute('class', 'nb-likes')

    totalLikes.textContent = `${media.likes}`
    mediaLikes.appendChild(totalLikes)

    const iconDiv = document.createElement('div')
    iconDiv.setAttribute('class', 'icon-div')
    iconDiv.setAttribute('aria-label', 'likes')
    iconDiv.setAttribute('tabIndex', '0')
    iconDiv.setAttribute('role', 'button')
    iconDiv.addEventListener('click', (event) => clickBtnLike(event))

    const likeIcon = document.createElement('i')
    likeIcon.setAttribute('class', 'fa-regular fa-heart')
    likeIcon.setAttribute('aria-hidden', 'false')

    mediaLikes.appendChild(iconDiv)
    iconDiv.appendChild(likeIcon)
    myArticle.appendChild(mediaDetails)

    return (myArticle)
  }
}
