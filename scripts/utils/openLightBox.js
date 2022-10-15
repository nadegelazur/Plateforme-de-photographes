/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
export class LightBox {
  static init () {
    const generateLightBox = Array.from(document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]'))
    generateLightBox.forEach(item => item.addEventListener('click', e => {
      e.preventDefault()
      const beforeElementFocus = document.activeElement
      const title = e.currentTarget.getAttribute('alt')
      new LightBox(e.currentTarget.getAttribute('src'), title)
    }))
    generateLightBox.forEach(item => item.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault()
        const beforeElementFocus = document.activeElement
        const title = e.currentTarget.getAttribute('alt')
        new LightBox(e.currentTarget.getAttribute('src'), title)
      }
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
    this.element.focus()
    this.keyboardNav()
  }

  keyboardNav () {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        // console.log('enter')
      } else if (e.key === 'Escape') {
        console.log('close')
        document.querySelector('.lightbox').remove()
      } else if (e.key === 'ArrowRight') {
        const btnNext = document.querySelector('.lightbox__next')
        let nextMedia = ' '
        const media = document.getElementById('currentMedia')
        const currentUrl = media.getAttribute('src')
        const list = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')

        list.forEach((link, index) => {
          if (link.getAttribute('src') === currentUrl && index < list.length - 1) {
            const nextMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index + 1].getAttribute('src')
            const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index + 1].getAttribute('alt')
            if (nextMedia.includes('jpg')) {
              const container = document.getElementsByClassName('lightbox-content')[0]
              const currentImage = container.firstElementChild
              const currentTitle = container.lastElementChild
              container.removeChild(currentImage)
              container.removeChild(currentTitle)
              const img = document.createElement('img')
              img.setAttribute('src', nextMedia)
              img.setAttribute('id', 'currentMedia')
              const h3 = document.createElement('h3')
              h3.innerText = newTitle
              container.appendChild(img)
              container.appendChild(h3)
            } else if (nextMedia.includes('mp4')) {
              const container = document.getElementsByClassName('lightbox-content')[0]
              const currentImage = container.firstElementChild
              const currentTitle = container.lastElementChild
              container.removeChild(currentImage)
              container.removeChild(currentTitle)

              const video = document.createElement('video')
              video.setAttribute('controls', '')
              video.setAttribute('aria-label', "vue rapprochée de l'image")
              const source = document.createElement('source')
              source.setAttribute('src', nextMedia)
              source.setAttribute('type', 'video/mp4')
              source.setAttribute('id', 'currentMedia')
              video.appendChild(source)

              const h3 = document.createElement('h3')
              h3.innerText = newTitle

              container.appendChild(video)
              container.appendChild(h3)
            }
          } else if (link.getAttribute('src') === currentUrl && index === list.length - 1) {
            const nextMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index = 0].getAttribute('src')
            console.log(nextMedia)
            const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index = 0].getAttribute('alt')
            if (nextMedia.includes('jpg')) {
              const container = document.getElementsByClassName('lightbox-content')[0]
              const currentImage = container.firstElementChild
              const currentTitle = container.lastElementChild
              container.removeChild(currentImage)
              container.removeChild(currentTitle)

              const img = document.createElement('img')
              img.setAttribute('src', nextMedia)
              img.setAttribute('id', 'currentMedia')

              const h3 = document.createElement('h3')
              h3.innerText = newTitle
              container.appendChild(img)
              container.appendChild(h3)
            } else if (nextMedia.includes('mp4')) {
              const container = document.getElementsByClassName('lightbox-content')[0]
              const currentImage = container.firstElementChild
              const currentTitle = container.lastElementChild
              container.removeChild(currentImage)
              container.removeChild(currentTitle)

              const video = document.createElement('video')
              video.setAttribute('controls', '')
              video.setAttribute('aria-label', "vue rapprochée de l'image")
              const source = document.createElement('source')
              source.setAttribute('src', nextMedia)
              source.setAttribute('type', 'video/mp4')
              source.setAttribute('id', 'currentMedia')
              video.appendChild(source)

              const h3 = document.createElement('h3')
              h3.innerText = newTitle

              container.appendChild(video)
              container.appendChild(h3)
            }
          }
        })
      } else if (e.key === 'ArrowLeft') {
        let prevMedia = ' '
        const media = document.getElementById('currentMedia')
        const currentUrl = media.getAttribute('src')
        const list = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')
        list.forEach((link, index) => {
          if (link.getAttribute('src') === currentUrl && index > 0) {
            const prevMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index - 1].getAttribute('src')
            const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index - 1].getAttribute('alt')
            if (prevMedia.includes('jpg')) {
              const container = document.getElementsByClassName('lightbox-content')[0]
              const currentImage = container.firstElementChild
              const currentTitle = container.lastElementChild
              container.removeChild(currentImage)
              container.removeChild(currentTitle)
              const img = document.createElement('img')
              img.setAttribute('src', prevMedia)
              img.setAttribute('id', 'currentMedia')

              const h3 = document.createElement('h3')
              h3.innerText = newTitle
              container.appendChild(img)
              container.appendChild(h3)
            } else if (prevMedia.includes('mp4')) {
              const container = document.getElementsByClassName('lightbox-content')[0]
              const currentImage = container.firstElementChild
              const currentTitle = container.lastElementChild
              container.removeChild(currentImage)
              container.removeChild(currentTitle)

              const video = document.createElement('video')
              video.setAttribute('controls', '')
              video.setAttribute('aria-label', "vue rapprochée de l'image")
              const source = document.createElement('source')
              source.setAttribute('src', prevMedia)
              source.setAttribute('type', 'video/mp4')
              source.setAttribute('id', 'currentMedia')
              video.appendChild(source)

              const h3 = document.createElement('h3')
              h3.innerText = newTitle

              container.appendChild(video)
              container.appendChild(h3)
            }
          } else if (link.getAttribute('src') === currentUrl && index === 0) {
            const prevMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index = list.length - 1].getAttribute('src')
            const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index = list.length - 1].getAttribute('alt')
            if (prevMedia.includes('jpg')) {
              const container = document.getElementsByClassName('lightbox-content')[0]
              const currentImage = container.firstElementChild
              const currentTitle = container.lastElementChild
              container.removeChild(currentImage)
              container.removeChild(currentTitle)

              const img = document.createElement('img')
              img.setAttribute('src', prevMedia)
              img.setAttribute('id', 'currentMedia')

              const h3 = document.createElement('h3')
              h3.innerText = newTitle
              container.appendChild(img)
              container.appendChild(h3)
            } else if (prevMedia.includes('mp4')) {
              console.log('video ok')
              const container = document.getElementsByClassName('lightbox-content')[0]
              const currentImage = container.firstElementChild
              const currentTitle = container.lastElementChild
              container.removeChild(currentImage)
              container.removeChild(currentTitle)

              const video = document.createElement('video')
              video.setAttribute('controls', '')
              video.setAttribute('aria-label', "vue rapprochée de l'image")
              const source = document.createElement('source')
              source.setAttribute('src', prevMedia)
              source.setAttribute('type', 'video/mp4')
              source.setAttribute('id', 'currentMedia')
              video.appendChild(source)

              const h3 = document.createElement('h3')
              h3.innerText = newTitle

              container.appendChild(video)
              container.appendChild(h3)
            }
          }
        })
      }
    })
  }

  closeBtn () {
    const btnClose = document.querySelector('.lightbox__close')
    btnClose.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector('.lightbox').remove()
      document.removeEventListener('keyup', this.onKeyUp)
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
                          
                              <img src="` + url + `" alt="` + title + `" id="currentMedia">
                              <h3 id="currentTitle">` + title + `</h3>
                                          
                      </div> 
                      <div class="lightbox-right">
                          <button class="lightbox__close" aria-label="Fermer la lightbox">Fermer</button>
                          <button class="lightbox__next" aria-label="Image suivante">Suivant</button>
                      </div> `
    } else {
      dom.innerHTML = `
                <div class="lightbox-left">
                    <button class="lightbox__prev" aria-label="Image précédente">Précédent</button>
                </div>
                <div class="lightbox-content">
                    
                        <video aria-label="` + title + `" controls="">
                            <source src="` + url + `" alt="` + title + `"
                                    type="video/mp4" id="currentMedia">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <h3 id="currentTitle">` + title + `</h3>
                   
                </div>
                <div class="lightbox-right">
                    <button class="lightbox__close" aria-label="Fermer la lightbox">Fermer</button>
                    <button class="lightbox__next" aria-label="Image suivante">Suivant</button>
                </div>`
    }
    return dom
  }

  nextBtn () {
    const btnNext = document.querySelector('.lightbox__next')
    btnNext.addEventListener('click', function (e) {
      let nextMedia = " "
      const media = document.getElementById('currentMedia')
      const currentUrl = media.getAttribute('src')
      const list = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')

      list.forEach((link, index) => {
        if (link.getAttribute('src') === currentUrl && index < list.length - 1) {
          // console.log(link, index)
          const nextMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index + 1].getAttribute('src')
          // console.log(nextMedia)
          const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index + 1].getAttribute('alt')
          // console.log(newTitle)
          if (nextMedia.includes('jpg')) {
            const container = document.getElementsByClassName('lightbox-content')[0]
            const currentImage = container.firstElementChild
            const currentTitle = container.lastElementChild
            container.removeChild(currentImage)
            container.removeChild(currentTitle)

            const img = document.createElement('img')
            img.setAttribute('src', nextMedia)
            img.setAttribute('id', 'currentMedia')

            const h3 = document.createElement('h3')
            h3.innerText = newTitle
            container.appendChild(img)
            container.appendChild(h3)
          } else if (nextMedia.includes('mp4')) {
            const container = document.getElementsByClassName('lightbox-content')[0]
            const currentImage = container.firstElementChild
            const currentTitle = container.lastElementChild
            container.removeChild(currentImage)
            container.removeChild(currentTitle)

            const video = document.createElement('video')
            video.setAttribute('controls', '')
            video.setAttribute('aria-label', "vue rapprochée de l'image")
            const source = document.createElement('source')
            source.setAttribute('src', nextMedia)
            source.setAttribute('type', 'video/mp4')
            source.setAttribute('id', 'currentMedia')
            video.appendChild(source)

            const h3 = document.createElement('h3')
            h3.innerText = newTitle

            container.appendChild(video)
            container.appendChild(h3)
          }
        } else if (link.getAttribute('src') === currentUrl && index === list.length - 1) {
          console.log('last image')
          const nextMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index = 0].getAttribute('src')
          console.log(nextMedia)
          const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index = 0].getAttribute('alt')
          console.log(newTitle)
          if (nextMedia.includes('jpg')) {
            const container = document.getElementsByClassName('lightbox-content')[0]
            const currentImage = container.firstElementChild
            const currentTitle = container.lastElementChild
            container.removeChild(currentImage)
            container.removeChild(currentTitle)

            const img = document.createElement('img')
            img.setAttribute('src', nextMedia)
            img.setAttribute('id', 'currentMedia')

            const h3 = document.createElement('h3')
            h3.innerText = newTitle
            container.appendChild(img)
            container.appendChild(h3)
          } else if (nextMedia.includes('mp4')) {
            const container = document.getElementsByClassName('lightbox-content')[0]
            const currentImage = container.firstElementChild
            const currentTitle = container.lastElementChild
            container.removeChild(currentImage)
            container.removeChild(currentTitle)

            const video = document.createElement('video')
            video.setAttribute('controls', '')
            video.setAttribute('aria-label', "vue rapprochée de l'image")
            const source = document.createElement('source')
            source.setAttribute('src', nextMedia)
            source.setAttribute('type', 'video/mp4')
            source.setAttribute('id', 'currentMedia')
            video.appendChild(source)

            const h3 = document.createElement('h3')
            h3.innerText = newTitle

            container.appendChild(video)
            container.appendChild(h3)
          }
        }
      })
    })
  }

  preventBtn () {
    const btnPrev = document.querySelector('.lightbox__prev')
    btnPrev.addEventListener('click', function (e) {
      let prevMedia = ' '
      const media = document.getElementById('currentMedia')
      const currentUrl = media.getAttribute('src')
      const list = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')
      console.log(list)
      console.log(list.length - 1)
      list.forEach((link, index) => {
        if (link.getAttribute('src') === currentUrl && index > 0) {
          console.log(link, index)
          const prevMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index - 1].getAttribute('src')
          const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index - 1].getAttribute('alt')
          if (prevMedia.includes('jpg')) {
            const container = document.getElementsByClassName('lightbox-content')[0]
            const currentImage = container.firstElementChild
            const currentTitle = container.lastElementChild
            container.removeChild(currentImage)
            container.removeChild(currentTitle)

            const img = document.createElement('img')
            img.setAttribute('src', prevMedia)
            img.setAttribute('id', 'currentMedia')

            const h3 = document.createElement('h3')
            h3.innerText = newTitle
            container.appendChild(img)
            container.appendChild(h3)
          } else if (prevMedia.includes('mp4')) {
            console.log('video ok')
            const container = document.getElementsByClassName('lightbox-content')[0]
            const currentImage = container.firstElementChild
            const currentTitle = container.lastElementChild
            container.removeChild(currentImage)
            container.removeChild(currentTitle)

            const video = document.createElement('video')
            video.setAttribute('controls', '')
            video.setAttribute('aria-label', "vue rapprochée de l'image")
            const source = document.createElement('source')
            source.setAttribute('src', prevMedia)
            source.setAttribute('type', 'video/mp4')
            source.setAttribute('id', 'currentMedia')
            video.appendChild(source)

            const h3 = document.createElement('h3')
            h3.innerText = newTitle

            container.appendChild(video)
            container.appendChild(h3)
          }
        } else if (link.getAttribute('src') === currentUrl && index === 0) {
          console.log('first image')
          const prevMedia = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index = list.length - 1].getAttribute('src')
          const newTitle = document.querySelectorAll('.mediaBox img[src$=".jpg"], video[src$=".mp4"]')[index = list.length - 1].getAttribute('alt')
          if (prevMedia.includes('jpg')) {
            const container = document.getElementsByClassName('lightbox-content')[0]
            const currentImage = container.firstElementChild
            const currentTitle = container.lastElementChild
            container.removeChild(currentImage)
            container.removeChild(currentTitle)

            const img = document.createElement('img')
            img.setAttribute('src', prevMedia)
            img.setAttribute('id', 'currentMedia')

            const h3 = document.createElement('h3')
            h3.innerText = newTitle
            container.appendChild(img)
            container.appendChild(h3)
          } else if (prevMedia.includes('mp4')) {
            console.log('video ok')
            const container = document.getElementsByClassName('lightbox-content')[0]
            const currentImage = container.firstElementChild
            const currentTitle = container.lastElementChild
            container.removeChild(currentImage)
            container.removeChild(currentTitle)

            const video = document.createElement('video')
            video.setAttribute('controls', '')
            video.setAttribute('aria-label', "vue rapprochée de l'image")
            const source = document.createElement('source')
            source.setAttribute('src', prevMedia)
            source.setAttribute('type', 'video/mp4')
            source.setAttribute('id', 'currentMedia')
            video.appendChild(source)

            const h3 = document.createElement('h3')
            h3.innerText = newTitle

            container.appendChild(video)
            container.appendChild(h3)
          }
        }
      })
    })
  }
}
