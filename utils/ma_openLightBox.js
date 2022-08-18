/**
 * @property {HTMLElement} lightbox
 * @property {string[]} gallery => (images)Tableau de chaînes de caractères
 * @property {string} url une chaîne de caractère / image actuellment affichée
 */
 class LightBox {

    static init() {
        // Array.from - transform list en tableau
        const links = Array.from(document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]'))
        const gallery = links.map(link => link.getAttribute('href'))

        const titles = Array.from(document.querySelectorAll(".media-title"));
        const title = titles.map(title => title.innerText)

        links.forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new LightBox(e.currentTarget.getAttribute('href'), gallery)
        }))   
    }
/**
 * @param {string} url URL de l'image/video
 * @param {string[]} gallery Chemins des images de la lighbox
 */
    constructor (url, gallery) {        
        this.lightbox = this.buildDom(url)
        this.gallery = gallery
        this.loadImage(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        // const main = document.querySelector('main')
        // main.appendChild(this.lightbox)
        document.body.appendChild(this.lightbox)
        document.addEventListener('keyup', this.onKeyUp)
    }
    loadImage(url) {
        this.url = null;
        const image = new Image();
        const content = this.lightbox.querySelector('.lightbox-content');    
        const loader = document.createElement('div');
        const title = document.createElement('p');
        //console.log(loader)
        loader.classList.add('lightbox__loader');
        content.innerHTML = "";
        content.appendChild(loader)
        image.onload = () => {
            //console.log('chargé')
            content.removeChild(loader)
            content.appendChild(image)
            this.url = url;
        }
        image.src = url
    }
    /**
     * keybord event esc
     * @param {KeyboardEvent} e 
     */
    onKeyUp(e) {
        if(e.key === 'Escape') {
            this.close(e)
        } else if (e.key === 'ArrowLeft') {
            this.prev(e)
        } else if (e.key === 'ArrowRight') {
            this.next(e)
        }
    }
    /**
     * Ferme la lightbox
     * @param { mouseEvent/KeyboarsEvent } e 
     */
    close(e) {
        e.preventDefault()
        this.lightbox.classList.add('fadeOut')
        window.setTimeout(() => {
            this.lightbox.parentElement.removeChild(this.lightbox)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
    }
    /**
     * Next de la lightbox
     * @param { mouseEvent/KeyboarsEvent } e 
     */
    next(e) {
        e.preventDefault();
        let i = this.gallery.findIndex(image => image === this.url)
        // this.gallery.length -1 - last image of Gallery
        if( i === this.gallery.length -1) {
            i = -1;
        }
        this.loadImage(this.gallery[i + 1])
    }
    /**
     * Previos de la lightbox
     * @param { mouseEvent/KeyboarsEvent } e 
     */
    prev(e) {
        e.preventDefault()
        let i = this.gallery.findIndex(image => image === this.url)
        if( i === 0) {
            i = this.gallery.length;
        }
        this.loadImage(this.gallery[i -1 ])


    }
/**
 * @param {string} url URL de l'image/video
 * @return {HTMLElement}
 */
    buildDom (url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')

         dom.innerHTML = `<button class="lightbox__close">Fermer</button>
                        <button class="lightbox__next">Suivant</button>
                        <button class="lightbox__prev">Précédent</button>
                        <div class="lightbox-content"></div>`
                        
        dom.querySelector('.lightbox__close').addEventListener('click',
        this.close.bind(this)) // pour que phis à l'interier du CLOSE fasse la reference à notre instance de lightbox et non pas à l'element sur laquel on viens de clicker // 
        dom.querySelector('.lightbox__next').addEventListener('click',
        this.next.bind(this))
        dom.querySelector('.lightbox__prev').addEventListener('click',
        this.prev.bind(this))
        return dom
    }
}
/**
 * 
 */
{/* <div class="lightbox">
          <button class="lightbox__close">Fermer</button>
            <button class="lightbox__next">Suivant</button>
            <button class="lightbox__prev">Précédent</button>
            <div class="lightbox-content">
              <img src="assets/medias/Ellie-Rose Wilkens/Sport_Next_Hold.jpg" alt="">
            </div>
    </div>
    <img src="${url}" alt=""> */
}
LightBox.init()