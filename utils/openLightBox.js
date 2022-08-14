// async function openLightBox() {

//     //let showLightBox = document.getElementsByTagName('a');
//     //console.log(typeof(showLightBox))

//     //console.log(showLightBox)

//       /*** on récuper la section LightBox ***/
//         const lightbox = document.getElementById("lightbox");
//         //const lightBox = document.createElement('div');
//         //lightBox.setAttribute("id", "lightbox");
        
//         /*** Button Close ***/
//         const btnClose = document.createElement("button");
//         btnClose.setAttribute("class","lightbox__close");
//         btnClose.textContent = "Fermer";
//         lightbox.appendChild(btnClose);

//         /*** Button Next ***/
//         const btnNext = document.createElement("button");
//         btnNext.setAttribute("class", "lightbox__next");
//         btnNext.textContent = "Next";
//         lightbox.appendChild(btnNext);

//         /*** Button Prev ***/
//         const btnPrev = document.createElement("button");
//         btnPrev.setAttribute("class", "lightbox__prev");
//         btnPrev.textContent = "Précédent";
//         lightbox.appendChild(btnPrev);
        
//         /*** on creer la section pour lightBox images ***/  
//         const lightboxContent = document.createElement('div');
//         lightboxContent.setAttribute("class", "lightbox-content");
//         lightbox.appendChild(lightboxContent);

//         const linksImg = document.querySelectorAll(".article-image img[src$='.jpg']");

//         // Get the index of Array item which matchs the id "2"
//         // var index = myArray.findIndex(item => item.id === 2);

//         // console.log(index);  // Prints: 1
//         // console.log(myArray[index].name);  // Prints: Peter


//         console.log(linksImg);

//         // on ajoute l'écouteur click sur le liens
//         for(let linkImg of linksImg) {
//             linkImg.addEventListener('click', function(e) {
//                 // on désactive le comportement des liens
//                 e.preventDefault();
                
//                 // on ajoute l'image du lien cliqué dans le lightbox
//                 const image = document.createElement('img');
                
//                 image.setAttribute("src", e.target.src);
//                 //const index = photographerMedias.findIndex(item => item.image === e.target.src)
//                 //console.log("index : ", e.target.parentNode.parentNode.childNodes[1].firstChild.innerHTML);
                
//                 //image.setAttribute("src", "assets/medias/Mimi Keel/Animals_Rainbow.jpg");
//                 lightboxContent.appendChild(image);
                
//                 const title = document.createElement('h2');
//                 lightboxContent.appendChild(title);
//                 //title.textContent = medias.title;
            
//                 // lorsque je click il faut que cela m'afiche mon lightbox
//                 lightbox.classList.add("show");
//             })
            
//         }
//         const linksVideo = document.querySelectorAll(".article-video video[src$='.mp4']");
//         //console.log(linksVideo);

//         // Button CLOSE    
//         btnClose.addEventListener('click', function(e) {
//             e.preventDefault();
//             console.log(btnClose);
//             //lightBox.classList.remove("show");
//         })  
//         // Keyboard Event
//         btnPrev.addEventListener('click', function(e){
//             console.log(btnPrev);
//         })

//         btnNext.addEventListener('click', function(e){
//         console.log(btnNext);
//         })  
        
        
        
      
// }

// openLightBox()
/**
 * @property {HTMLElement} element
 */
class LightBox {

    static init() {
        // Array.from - transform list en tableau
        const links = Array.from(document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]'))
        //const gallery = links.map(link => link.getAttribute('href'))

        links.forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new LightBox(e.currentTarget.getAttribute('href'))
        }))
    }
/**
 * @param {string} url URL de l'image/video
 */
    constructor (url) {
        this.element = this.buildDom(url)
        this.loadImage(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }

    loadImage(url) {
       
        const image = new Image();
        const content = this.element.querySelector('.lightbox-content');
        
        const loader = document.createElement('div');
        //console.log(loader)
        loader.classList.add('lightbox__loader');
        content.appendChild(loader)
        image.onload = function () {
            //console.log('chargé')
            content.removeChild(loader)
            content.appendChild(image)
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
        }
    }
    /**
     * Ferme la lightbox
     * @param {mouseEvent} e 
     */
    close(e) {
        e.preventDefault()
        this.element.classList.add('fadeOut')
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)

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
                        <div class="lightbox-content">
                        
                        </div>`
        
        dom.querySelector('.lightbox__close').addEventListener('click',
        this.close.bind(this)) // pour que phis à l'interier du CLOSE fasse la reference à notre instance de lightbox et non pas à l'element sur laquel on viens de clicker // 
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
