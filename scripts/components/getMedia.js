export function getMedias (id, profil, medias) {
  const photographContent = document.querySelector('.photograph-content')

  const photographerMedias = medias.filter(media => media.photographerId == id)
  for (const media of photographerMedias) {
    // console.log(media)

    const myArticle = document.createElement('article')
    photographContent.appendChild(myArticle)

    const myLien = document.createElement('a')
    myArticle.appendChild(myLien)

    // media Image
    if (media.hasOwnProperty('image')) {
      const mediaImg = document.createElement('img')
      mediaImg.src = `assets/medias/${profil.name}/${media.image}`
      mediaImg.setAttribute('role', 'link')
      mediaImg.setAttribute('tabIndex', '0')
      mediaImg.setAttribute('alt', `${media.title}`)

      // myImg.setAttribute("src", "/assets/medias/" + profil.name + "/" + media.image);

      myLien.setAttribute('class', 'article-image')
      myLien.setAttribute('href', `assets/medias/${profil.name}/${media.image}`)

      // alert(media.id);
      myLien.appendChild(mediaImg)
    } else {
      // media Video
      const mediaVideo = document.createElement('video')
      mediaVideo.src = `assets/medias/${profil.name}/${media.video}`
      mediaVideo.type = 'video/mp4'
      mediaVideo.setAttribute('role', 'link')
      mediaVideo.setAttribute('tabindex', 'O')
      mediaVideo.setAttribute('aria-label', `${media.title}`)
      mediaVideo.setAttribute('alt', `${media.title}`)
      myLien.setAttribute('class', 'article-video')
      myLien.setAttribute('href', `assets/medias/${profil.name}/${media.video}`)

      const spanVideo = document.createElement('span')
      spanVideo.setAttribute('class', 'play-circle')

      const iconPlay = document.createElement('i')
      iconPlay.setAttribute('class', 'fa-solid fa-circle-play')
      spanVideo.appendChild(iconPlay)

      // play button
      const playButton = document.createElement('button')
      playButton.setAttribute('role', 'play')
      playButton.textContent = 'play'

      mediaVideo.appendChild(playButton)
      myLien.appendChild(mediaVideo)
      myLien.appendChild(spanVideo)

      mediaVideo.addEventListener('click', handlePlayButton)
      async function playVideo () {
        try {
          await mediaVideo.play()
          playButton.classList.add('playing')
        } catch (err) {
          playButton.classList.remove('playing')
        }
      }
      function handlePlayButton () {
        if (mediaVideo.paused) {
          playVideo()
        } else {
          mediaVideo.pause()
          playButton.classList.remove('playing')
        }
      }
    }

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

    mediaLikes.appendChild(iconDiv)
    iconDiv.appendChild(likeIcon)
    myArticle.appendChild(mediaDetails)
  }
}