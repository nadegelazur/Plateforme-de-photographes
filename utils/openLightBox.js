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

class LightBox {

    static init() {
        const links = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')
        .forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new LightBox(e.currentTarget.getAttribute('href'))
        }))
    }
/**
 * @param {string} url URL de l'image/video
 */
    constructor (url) {
        const element = this.buildDom(url)
        document.body.appendChild(element)

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
                            <img src="assets/medias/Ellie-Rose Wilkens/Sport_Next_Hold.jpg" alt="">
                         </div>`
        return dom
    }
}
/**
 * 
 */
{/* <div id="lightbox">
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précédent</button>
    <div class="lightbox-content">
    <img src="assets/medias/Ellie-Rose Wilkens/Sport_Next_Hold.jpg" alt="">
    </div>
</div> */}
LightBox.init()
