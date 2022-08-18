class LightBox {

    static init() {

        document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')
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

        //creation des listeners
        this.closeBtn();
        this.nextBtn();
        this.preventBtn();

    }
/**
 * @param {string} url URL de l'image/video
 * @return {HTMLElement}
 */
    buildDom (url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')


        if(url.includes("jpg")) { 
            dom.innerHTML = `<button class="lightbox__close">Fermer</button>
                         <button class="lightbox__next">Suivant</button>
                         <button class="lightbox__prev">Précédent</button>
                         <div class="lightbox-content">
                            <img src="`+url+`" alt="" id="currentMedia">
                         </div>`
        }
        else {
            dom.innerHTML = `<button class="lightbox__close">Fermer</button>
                         <button class="lightbox__next">Suivant</button>
                         <button class="lightbox__prev">Précédent</button>
                         <div class="lightbox-content">
                         <video controls width="250">
                            <source src="`+url+`"
                                    type="video/mp4" id="currentMedia">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                         </div>`
        }      
        return dom
    }

    nextBtn() {

        let btnNext = document.getElementsByClassName("lightbox__next")[0] 
        
        let nextMedia = ""

        btnNext.addEventListener('click', function() {
            

                    let media = document.getElementById('currentMedia');
                    let currentUrl = media.getAttribute('src')

                    let list =  document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')
                    let length = list.length

                    list.forEach(
                        (link, index) => {

                            if(link.getAttribute('href') == currentUrl && index < length-1) 
                            {

                            nextMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index+1].getAttribute('href')

                            if(nextMedia.includes('jpg')) {

                                let container = document.getElementsByClassName('lightbox-content');
                                let child = container[0].lastElementChild; 
                                while (child) {
                                    container[0].removeChild(child);
                                    child = container[0].lastElementChild;
                                    }
                                let img = document.createElement('img'); 
                                img.setAttribute("src", nextMedia);
                                img.setAttribute("id", "currentMedia")
                                container[0].appendChild(img)

                            }   
                            else                         
                            {
                                let container = document.getElementsByClassName('lightbox-content');
                                let child = container[0].lastElementChild; 
                                while (child) {
                                    container[0].removeChild(child);
                                    child = container[0].lastElementChild;
                                    }

                                let video = document.createElement('video');
                                let source = document.createElement('source');

                                source.setAttribute('src', nextMedia);
                                source.setAttribute('type', 'video/mp4');
                                source.setAttribute("id", "currentMedia")

                                video.appendChild(source);
                                container[0].appendChild(video)
                                video.play();
                            }   


                            }

                        }
                    );
                                
                }) 

    }

    preventBtn() {

        let btnPrev = document.getElementsByClassName("lightbox__prev")[0] 
        let prevMedia = ""

        btnPrev.addEventListener('click', function(e) {

            let media = document.getElementById('currentMedia');
            let currentUrl = media.getAttribute('src')

                    let list =  document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')

                    list.forEach(
                        (link, index) => {


                            if(link.getAttribute('href') == currentUrl && index > 0) 
                            {

                        

                            prevMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index-1].getAttribute('href')

                            if(prevMedia.includes('jpg')) {

                                let container = document.getElementsByClassName('lightbox-content');
                                let child = container[0].lastElementChild; 
                                while (child) {
                                    container[0].removeChild(child);
                                    child = container[0].lastElementChild;
                                    }
                                let img = document.createElement('img'); 
                                img.setAttribute("src", prevMedia);
                                img.setAttribute("id", "currentMedia")
                                container[0].appendChild(img)

                            }   
                            else                         
                            {
                                let container = document.getElementsByClassName('lightbox-content');
                                let child = container[0].lastElementChild; 
                                while (child) {
                                    container[0].removeChild(child);
                                    child = container[0].lastElementChild;
                                    }

                                let video = document.createElement('video');
                                let source = document.createElement('source');

                                source.setAttribute('src', prevMedia);
                                source.setAttribute('type', 'video/mp4');
                                source.setAttribute("id", "currentMedia")

                                video.appendChild(source);
                                container[0].appendChild(video)
                                video.play();
                            }   


                            }

                        }
                    );
                                
                    currentUrl = prevMedia;
                }) 

    }

    closeBtn() {

        let btnClose = document.getElementsByClassName("lightbox__close")[0]    
        btnClose.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log(btnClose);
                    // lightBox.classList.remove("show");
                    document.getElementsByClassName("lightbox")[0].remove()
                }) 

    }
   
}


