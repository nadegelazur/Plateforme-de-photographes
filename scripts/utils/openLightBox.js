class LightBox {

    static init() {

        const generatedMedia = Array.from(document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]'));
        console.log(generatedMedia);

        let test = generatedMedia[0].firstChild.getAttribute('alt');
        console.log(test)

        const tabLinks = generatedMedia.map((media) => media.getAttribute("href"));
        console.log(tabLinks)

        const generateTitles = Array.from(document.querySelectorAll('.media-title'));
        console.log(generateTitles)
        const titles = generateTitles.map((title) => title.textContent);
        console.log(titles)

        document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')
        .forEach(link => link.addEventListener('click', e => {
            console.log('ok')
            e.preventDefault()
            const title = e.currentTarget.firstChild.getAttribute('alt');
            new LightBox(e.currentTarget.getAttribute('href'), title);
        }))    
    }
/**
 * @param {string} url URL de l'image/video
 */
    constructor (url, title) {
        const element = this.buildDom(url, title)
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
    buildDom (url, title) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.setAttribute("aria-label", "vue rapprochée de l'image");
        dom.setAttribute("role", "dialog");
        dom.setAttribute("tabindex", "-1");
 
        if(url.includes("jpg")) { 
            dom.innerHTML = `
                <div class="lightbox-left">
                    <button class="lightbox__prev" aria-label="Image précédente">Précédent</button>
                </div>   
                <div class="lightbox-content">
                    <div>
                        <img src="`+url+`" alt="" id="currentMedia">
                        <h3 id="currentTitle">`+title+`<h3>
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
                        <video control="" aria-label="`+title+`">
                            <source src="`+url+`"
                                    type="video/mp4" id="currentMedia">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <h3 id="currentTitle">`+title+`<h3>
                    </div>
                </div>
                <div class="lightbox-right">
                    <button class="lightbox__close" aria-label="Fermer la lightbox">Fermer</button>
                    <button class="lightbox__next" aria-label="Image suivante">Suivant</button>
                </div>`                
        }         
        return dom
    }
    nextBtn() {
        let btnNext = document.getElementsByClassName("lightbox__next")[0]     
        let nextMedia = ""
        let nextTitle = ""

        btnNext.addEventListener('click', function() {
            let media = document.getElementById('currentMedia');
            //let title = document.getElementById('currentTitle');

            let currentUrl = media.getAttribute('src')
            //let currentTitle = media.getAttribute('alt')

            let list =  document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')
            //let length = list.length - delete
            list.forEach((link, index) => {
                
                if(link.getAttribute('href') == currentUrl && index < list.length - 1) {
                    const linkMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index+1];
                    nextMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index+1].getAttribute('href') 
                    if(nextMedia.includes('jpg')) {
                        let container = document.getElementsByClassName('lightbox-content');
                        let child = container[0].lastElementChild; 
                        while (child) {
                            container[0].removeChild(child);
                            child = container[0].lastElementChild;
                            }
                        let div = document.createElement('div');    
                        let img = document.createElement('img'); 
                        let h3 = document.createElement('h3');
                        h3.textContent = linkMedia.firstChild.getAttribute('alt');

                        img.setAttribute("src", nextMedia);
                        img.setAttribute("id", "currentMedia")
                        container[0].appendChild(div)
                        div.appendChild(img)
                        div.appendChild(h3)
                    } else {                                   
                        let container = document.getElementsByClassName('lightbox-content');
                        let child = container[0].lastElementChild; 
                        while (child) {
                            container[0].removeChild(child);
                            child = container[0].lastElementChild;
                            }
                        let div = document.createElement('div');    
                        let video = document.createElement('video');
                        let source = document.createElement('source');
                        let h3 = document.createElement('h3');
                        h3.textContent = linkMedia.firstChild.getAttribute('alt');

                        source.setAttribute('src', nextMedia);
                        source.setAttribute('type', 'video/mp4');
                        source.setAttribute("id", "currentMedia")

                        video.appendChild(source);
                        container[0].appendChild(div);
                        div.appendChild(video);
                        div.appendChild(video);
                        div.appendChild(h3);
                        video.play();
                    }   
                }
            });
        }); 
    }
    preventBtn() {
        let btnPrev = document.getElementsByClassName("lightbox__prev")[0] 
        let prevMedia = ""

        btnPrev.addEventListener('click', function(e) {
            let media = document.getElementById('currentMedia');
            let currentUrl = media.getAttribute('src');
            let list =  document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')

                    list.forEach((link, index) => {
                        if(link.getAttribute('href') == currentUrl && index > 0) {
                            const linkMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index-1];
                            prevMedia = document.querySelectorAll('a[href$=".jpg"], [href$=".mp4"]')[index-1].getAttribute('href')
                            //console.log(linkMedia)

                            if(prevMedia.includes('jpg')) {
                                let container = document.getElementsByClassName('lightbox-content');
                                let child = container[0].lastElementChild; 
                                while (child) {
                                    container[0].removeChild(child);
                                    child = container[0].lastElementChild;
                                    }
                                let div = document.createElement('div');
                                let img = document.createElement('img'); 
                                let h3 = document.createElement('h3');
                                h3.textContent = linkMedia.firstChild.getAttribute('alt');
                                img.setAttribute("src", prevMedia);
                                img.setAttribute("id", "currentMedia")
                                container[0].appendChild(div)
                                div.appendChild(img)
                                div.appendChild(h3)
                            } else {                        
                                let container = document.getElementsByClassName('lightbox-content');
                                let child = container[0].lastElementChild; 
                                while (child) {
                                    container[0].removeChild(child);
                                    child = container[0].lastElementChild;
                                    }
                                let div = document.createElement('div');
                                let video = document.createElement('video');
                                let source = document.createElement('source');

                                let h3 = document.createElement("h3");
                                h3.textContent = linkMedia.firstChild.getAttribute('alt');

                                source.setAttribute('src', prevMedia);
                                source.setAttribute('type', 'video/mp4');
                                source.setAttribute("id", "currentMedia")

                                video.appendChild(source);
                                container[0].appendChild(div)
                                div.appendChild(video)
                                div.appendChild(h3)
                                video.play();
                            }  
                        }
                    });
            currentUrl = prevMedia;
        }) 
    }
    closeBtn() {
        let btnClose = document.getElementsByClassName("lightbox__close")[0]    
        btnClose.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.getElementsByClassName("lightbox")[0].remove()
        }) 
    }   
}


