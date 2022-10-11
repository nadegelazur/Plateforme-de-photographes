export class LightBox {
  static init () {
    const generateLightBox = Array.from(document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]'))
    // console.log(generateLightBox);
    
  
    generateLightBox.forEach(item => item.addEventListener('click', e => {
        // console.log('openLightbox')
        e.preventDefault()
        const beforeElementFocus = document.activeElement;
        const title = e.currentTarget.getAttribute('alt')
        console.log(title)
        new LightBox(e.currentTarget.getAttribute('src'), title)
    }))
    
  }
  constructor (url, title, beforeElementFocus) {
    this.element = this.buildDOM(url, title)
    document.body.appendChild(this.element)
    
    // creation des listeners
    this.closeBtn()
    this.nextBtn()
    this.preventBtn()
  
    this.beforeElementFocus = beforeElementFocus
    // this.element.focus();
    
    // this.keyboardNav()
  }

  // keyboardNav () {
  //   window.addEventListener('keyup', (e) => {
  //     if (e.key === 'Escape') {
  //       document.querySelector('.lightbox').remove()
  //     } else if (e.key === 'ArrowLeft') {
  //       this.prevent()
  //     } else if (e.key === 'ArrowRight') {
  //       this.next()
  //     } else if (e.key === 'Tab' &&
  //           this.closeIcon.contains(document.activeElement)) {
  //       e.preventDefault()
  //       document.querySelector('.lightbox__prev').focus()
  //     }
  //   })
  // }
  
  closeBtn () {
    const btnClose = document.querySelector('.lightbox__close')
    btnClose.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector('.lightbox').remove()
      window.removeEventListener('keyup', this.keyboardNav)
    })
  }

  buildDOM (url, title) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.setAttribute('aria-label', "vue rapprochée de l'image")
    dom.setAttribute('role', 'dialog')
    dom.setAttribute('tabindex', '-1')

    if (url.includes('jpg')) {
      dom.innerHTML = `
                <div class="lightbox-left">
                    <button class="lightbox__prev" aria-label="Image précédente">Précédent</button>
                </div>   
                <div class="lightbox-content">
                    
                        <img src="`+url+`" alt="`+title+`" id="currentMedia">
                        <h3 id="currentTitle">`+title+`</h3>
                                     
                </div> 
                <div class="lightbox-right">
                    <button class="lightbox__close" aria-label="Fermer la lightbox">Fermer</button>
                    <button class="lightbox__next" aria-label="Image suivante">Suivant</button>
                </div>`
    } else {
      dom.innerHTML = `
                <div class="lightbox-left">
                    <button class="lightbox__prev" aria-label="Image précédente">Précédent</button>
                </div>
                <div class="lightbox-content">
                    
                        <video aria-label="`+title+`" controls="">
                            <source src="`+url+`" alt="`+title+`"
                                    type="video/mp4" id="currentMedia">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <h3 id="currentTitle">`+title+`</h3>
                   
                </div>
                <div class="lightbox-right">
                    <button class="lightbox__close" aria-label="Fermer la lightbox">Fermer</button>
                    <button class="lightbox__next" aria-label="Image suivante">Suivant</button>
                </div>`
    }
    
    return dom
  }

  nextBtn () {
    console.log('nextBTN')
    const btnNext = document.querySelector('.lightbox__next')
    
    btnNext.addEventListener('click', function (e) {
      console.log('next')
      // e.preventDefault()
      let nextMedia = " "
      const media = document.getElementById('currentMedia')
      const currentUrl = media.getAttribute('src')
      // console.log(currentUrl)
      const list = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')
      // console.log(list);
      
      let length = list.length
      list.forEach((link, index) => {
        if (link.getAttribute('src') == currentUrl && index < length - 1) {
          console.log(link, index)
          const nextMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index + 1].getAttribute('src')
          const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index + 1].getAttribute('alt')
          if (nextMedia.includes('jpg')) {
            const container = document.getElementsByClassName('lightbox-content')
            let h3Title = container[0].lastElementChild
            // console.log(container);
            console.log(h3Title)
            h3Title.innerHTML = newTitle
            const image = container[0].firstElementChild
            image.setAttribute('src', nextMedia)
          } else {
            const container = document.getElementsByClassName('lightbox-content')
            console.log(container)
          }
          // if (nextMedia.includes('mp4')) {
          //   const container = document.querySelector('.lightbox-content video')
          //   const video = container.nextElementSibling

          //   console.log(video)
          //   // let h3Title = container[0].lastElementChild
          //   console.log(container);
          //   //console.log(h3Title)
          //   //h3Title.innerHTML = newTitle
          //   console.log('video')
          // }

        }
      })
     })
  }

  preventBtn () {
    console.log('preventBTN')
    const btnPrev = document.querySelector('.lightbox__prev')
    btnPrev.addEventListener('click', function (e) {
      console.log('previous')
      let prevMedia = " "
      const media = document.getElementById('currentMedia')
      console.log(media)
      const currentUrl = media.getAttribute('src')
      console.log(currentUrl)
      const list = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')
      console.log(list);
      
      list.forEach((link, index) => {
        if (link.getAttribute('src') == currentUrl && index > 0) {
          console.log(link, index)
          const prevMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index - 1].getAttribute('src')
          const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index - 1].getAttribute('alt')
          if (prevMedia.includes('jpg')) {
            const container = document.getElementsByClassName('lightbox-content')
            let h3Title = container[0].lastElementChild
            // console.log(container);
            console.log(h3Title)
            h3Title.innerHTML = newTitle
            const image = container[0].firstElementChild
            image.setAttribute('src', prevMedia)
          }
        }
      })
     
    })
  }

  

  // prevent () {
  //   console.log('preventBTN')
  //   console.log('previous')
  //   let prevMedia = ''
  //   const media = document.getElementById('currentMedia')
  //   let currentUrl = media.getAttribute('src')
  //   const list = document.querySelectorAll('img[scr$=".jpg"], video[src$=".mp4"]')

  //   list.forEach((link, index) => {
  //     if (link.getAttribute('src') == currentUrl && index > 0) {
  //       const linkMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index - 1]
  //       prevMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index - 1].getAttribute('src')
  //       // console.log(linkMedia)

  //       if (prevMedia.includes('jpg')) {
  //         const container = document.getElementsByClassName('lightbox-content')
  //         let child = container[0].lastElementChild
  //         while (child) {
  //           container[0].removeChild(child)
  //           child = container[0].lastElementChild
  //         }
  //         const div = document.createElement('div')
  //         const img = document.createElement('img')
  //         //const h3 = document.createElement('h3')
  //         //h3.textContent = linkMedia.firstChild.getAttribute('alt')
  //         img.setAttribute('src', prevMedia)
  //         img.setAttribute('id', 'currentMedia')
  //         container[0].appendChild(div)
  //         div.appendChild(img)
  //         div.appendChild(h3)
  //       } else {
  //         const container = document.getElementsByClassName('lightbox-content')
  //         let child = container[0].lastElementChild
  //         while (child) {
  //           container[0].removeChild(child)
  //           child = container[0].lastElementChild
  //         }
  //         const div = document.createElement('div')
  //         const video = document.createElement('video')
  //         const source = document.createElement('source')

  //         //const h3 = document.createElement('h3')
  //         //h3.textContent = linkMedia.firstChild.getAttribute('alt')

  //         video.setAttribute('controls', '')
  //         video.setAttribute('aria-label', "vue rapprochée de l'image")
  //         source.setAttribute('src', prevMedia)
  //         source.setAttribute('type', 'video/mp4')
  //         source.setAttribute('id', 'currentMedia')

  //         container[0].appendChild(div)
  //         div.appendChild(video)
  //         //div.appendChild(h3)
  //         video.appendChild(source)
  //         // video.play();
  //       }
  //     }
  //   })
  //   currentUrl = prevMedia
  // }

  // next () {
  //     let nextMedia = ''
  //     const media = document.getElementById('currentMedia')
  //     const currentUrl = media.getAttribute('src')
  //     console.log(currentUrl)
  //     const list = Array.from(document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]'))
  //     console.log(list);

  //     // let length = list.length - delete
  //     list.forEach((link, index) => {
  //       if (link.getAttribute('scr') == currentUrl && index < list.length - 1) {
  //         const linkMedia = document.querySelectorAll('img[scr$=".jpg"], video[src$=".mp4"]')[index + 1]
  //         nextMedia = document.querySelectorAll('img[scr$=".jpg"], video[src$=".mp4"]')[index + 1].getAttribute('src')
  //         if (nextMedia.includes('jpg')) {
  //           const container = document.getElementsByClassName('lightbox-content')
  //           let child = container[0].lastElementChild
  //           while (child) {
  //             container[0].removeChild(child)
  //             child = container[0].lastElementChild
  //           }
  //           const div = document.createElement('div')
  //           const img = document.createElement('img')
  //           const h3 = document.createElement('h3')
  //           h3.textContent = linkMedia.firstChild.getAttribute('alt')

  //           img.setAttribute('src', nextMedia)
  //           img.setAttribute('id', 'currentMedia')
  //           container[0].appendChild(div)
  //           div.appendChild(img)
  //           div.appendChild(h3)
  //         } else {
  //           const container = document.getElementsByClassName('lightbox-content')
  //           let child = container[0].lastElementChild
  //           while (child) {
  //             container[0].removeChild(child)
  //             child = container[0].lastElementChild
  //           }
  //           const div = document.createElement('div')
  //           const video = document.createElement('video')

  //           div.appendChild(video)

  //           video.setAttribute('controls', '0')
  //           video.setAttribute('aria-label', "vue rapprochée de l'image")

  //           const source = document.createElement('source')
  //           source.setAttribute('src', nextMedia)
  //           source.setAttribute('type', 'video/mp4')
  //           source.setAttribute('id', 'currentMedia')
  //           video.appendChild(source)

  //           const h3 = document.createElement('h3')
  //           h3.textContent = linkMedia.firstChild.getAttribute('alt')

  //           container[0].appendChild(div)

  //           div.appendChild(h3)
  //           video.play()
  //         }
  //       }
  //     })
  // }
}



// else {
//   const container = document.getElementsByClassName('lightbox-content')
//   let h3Title = container[0].lastElementChild
//   console.log(container);
//   console.log(h3Title)
//   h3Title.innerHTML = newTitle
//   const video = document.createElement('video')

  
//   video.setAttribute('src', nextMedia)
//   video.setAttribute('controls', '0')
//   video.setAttribute('aria-label', "vue rapprochée de l'image")

//   const source = document.createElement('source')
//   source.setAttribute('src', nextMedia)
//   source.setAttribute('type', 'video/mp4')
//   source.setAttribute('id', 'currentMedia')
//   video.appendChild(source)
//   video.play()
// }