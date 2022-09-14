export class LightBox {
  static init () {
    // const generatedMedia = Array.from(document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]'))
    // console.log(generatedMedia);

    // let test = generatedMedia[0].firstChild.getAttribute('alt');
    // console.log(test)

    // const tabLinks = generatedMedia.map((media) => media.getAttribute('href'))
    // console.log(tabLinks)

    // const generateTitles = Array.from(document.querySelectorAll('.media-title'))
    // console.log(generateTitles)
    // const titles = generateTitles.map((title) => title.textContent)
    // console.log(titles)

    document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')
      .forEach(link => link.addEventListener('click', e => {
        // console.log('ok')
        e.preventDefault()
        // const beforeElementFocus = document.activeElement;
        const title = e.currentTarget.firstChild.getAttribute('alt')
        // eslint-disable-next-line no-new
        new LightBox(e.currentTarget.getAttribute('href'), title)
      }))

    // for(let i = 0; i < generatedMedia.length; i++) {
    //     const media = generatedMedia[i];
    //     media.addEventListener('keydown', (e) => {
    //         if(e.key === " " || e.key === "Enter") {
    //             tabLinks.click();
    //             e.preventDefault();
    //         }
    //     });
    // }
  }

  /**
 * @param {string} url URL de l'image/video
 */
  constructor (url, title, beforeElementFocus) {
    this.element = this.buildDom(url, title)
    document.body.appendChild(this.element)
    // creation des listeners
    this.closeBtn()
    this.nextBtn()
    this.preventBtn()

    this.beforeElementFocus = beforeElementFocus
    // this.element.focus();

    this.leftArrow = document.querySelector('.lightbox__prev')
    this.rightArrow = document.querySelector('.lightbox__next')
    this.closeIcon = document.querySelector('.lightbox__close')

    this.keyboardNav()
  }

  keyboardNav () {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        // document.getElementsByClassName('lightbox')[0].remove()
        document.querySelector('.lightbox').remove()
      } else if (e.key === 'ArrowLeft') {
        this.prevent()
      } else if (e.key === 'ArrowRight') {
        this.next()
      } else if (e.key === 'Tab' &&
            this.closeIcon.contains(document.activeElement)) {
        e.preventDefault()
        document.querySelector('.lightbox__prev').focus()
      }
    })
  }

  /**
 * @param {string} url URL de l'image/video
 * @return {HTMLElement}
 */
  buildDom (url, title) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.setAttribute('aria-label', "vue rapprochée de l'image`")
    dom.setAttribute('role', 'dialog')
    dom.setAttribute('tabindex', '-1')

    if (url.includes('jpg')) {
      dom.innerHTML = `
                <div class="lightbox-left">
                    <button class="lightbox__prev" aria-label="Image précédente">Précédent</button>
                </div>   
                <div class="lightbox-content">
                    <div>
                        <img src="` + url + `" alt="" id="currentMedia">
                        <h3 id="currentTitle">` + title + `<h3>
                    </div>
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
                    <div>
                        <video aria-label="` + title + `" controls="">
                            <source src="` + url + `"
                                    type="video/mp4" id="currentMedia">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <h3 id="currentTitle">` + title + `<h3>
                    </div>
                </div>
                <div class="lightbox-right">
                    <button class="lightbox__close" aria-label="Fermer la lightbox">Fermer</button>
                    <button class="lightbox__next" aria-label="Image suivante">Suivant</button>
                </div>`
    }
    return dom
  }

  nextBtn () {
    const btnNext = document.getElementsByClassName('lightbox__next')[0]
    btnNext.addEventListener('click', function () {
      this.next()
    })
  }

  preventBtn () {
    const btnPrev = document.getElementsByClassName('lightbox__prev')[0]
    btnPrev.addEventListener('click', function (e) {
      this.prevent()
    })
  }

  closeBtn () {
    const btnClose = document.getElementsByClassName('lightbox__close')[0]
    btnClose.addEventListener('click', function (e) {
      e.preventDefault()
      // document.getElementsByClassName('lightbox')[0].remove()
      document.querySelector('.lightbox').remove()
    })
  }

  prevent () {
    let prevMedia = ''
    const media = document.getElementById('currentMedia')
    let currentUrl = media.getAttribute('src')
    const list = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')

    list.forEach((link, index) => {
      if (link.getAttribute('href') == currentUrl && index > 0) {
        const linkMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index - 1]
        prevMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index - 1].getAttribute('href')
        // console.log(linkMedia)

        if (prevMedia.includes('jpg')) {
          const container = document.getElementsByClassName('lightbox-content')
          let child = container[0].lastElementChild
          while (child) {
            container[0].removeChild(child)
            child = container[0].lastElementChild
          }
          const div = document.createElement('div')
          const img = document.createElement('img')
          const h3 = document.createElement('h3')
          h3.textContent = linkMedia.firstChild.getAttribute('alt')
          img.setAttribute('src', prevMedia)
          img.setAttribute('id', 'currentMedia')
          container[0].appendChild(div)
          div.appendChild(img)
          div.appendChild(h3)
        } else {
          const container = document.getElementsByClassName('lightbox-content')
          let child = container[0].lastElementChild
          while (child) {
            container[0].removeChild(child)
            child = container[0].lastElementChild
          }
          const div = document.createElement('div')
          const video = document.createElement('video')
          const source = document.createElement('source')

          const h3 = document.createElement('h3')
          h3.textContent = linkMedia.firstChild.getAttribute('alt')

          video.setAttribute('controls', '')
          video.setAttribute('aria-label', "vue rapprochée de l'image")
          source.setAttribute('src', prevMedia)
          source.setAttribute('type', 'video/mp4')
          source.setAttribute('id', 'currentMedia')

          container[0].appendChild(div)
          div.appendChild(video)
          div.appendChild(h3)
          video.appendChild(source)
          // video.play();
        }
      }
    })
    currentUrl = prevMedia
  }

  next () {
    let nextMedia = ''
    const media = document.getElementById('currentMedia')
    const currentUrl = media.getAttribute('src')
    const list = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')

    // let length = list.length - delete
    list.forEach((link, index) => {
      if (link.getAttribute('href') == currentUrl && index < list.length - 1) {
        const linkMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index + 1]
        nextMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index + 1].getAttribute('href')
        if (nextMedia.includes('jpg')) {
          const container = document.getElementsByClassName('lightbox-content')
          let child = container[0].lastElementChild
          while (child) {
            container[0].removeChild(child)
            child = container[0].lastElementChild
          }
          const div = document.createElement('div')
          const img = document.createElement('img')
          const h3 = document.createElement('h3')
          h3.textContent = linkMedia.firstChild.getAttribute('alt')

          img.setAttribute('src', nextMedia)
          img.setAttribute('id', 'currentMedia')
          container[0].appendChild(div)
          div.appendChild(img)
          div.appendChild(h3)
        } else {
          const container = document.getElementsByClassName('lightbox-content')
          let child = container[0].lastElementChild
          while (child) {
            container[0].removeChild(child)
            child = container[0].lastElementChild
          }
          const div = document.createElement('div')
          const video = document.createElement('video')

          div.appendChild(video)

          video.setAttribute('controls', '0')
          video.setAttribute('aria-label', "vue rapprochée de l'image")

          const source = document.createElement('source')
          source.setAttribute('src', nextMedia)
          source.setAttribute('type', 'video/mp4')
          source.setAttribute('id', 'currentMedia')
          video.appendChild(source)

          const h3 = document.createElement('h3')
          h3.textContent = linkMedia.firstChild.getAttribute('alt')

          container[0].appendChild(div)

          div.appendChild(h3)
          video.play()
        }
      }
    })
  }
}
