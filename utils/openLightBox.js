export async function openLightBox(id, profil, photographerMedias, medias, title, image, video) {
    console.log(photographerMedias)
 
    /*** on récuper la section LightBox ***/
    const lightBox = document.getElementById('lightbox');
    //const lightBox = document.createElement('div');
    //lightBox.setAttribute("id", "lightbox");
    
    /*** Button Close ***/
    const btnClose = document.createElement('button');
    btnClose.setAttribute("class","lightbox__close");
    btnClose.textContent = "Fermer";
    lightBox.appendChild(btnClose);

    /*** Button Next ***/
    const btnNext = document.createElement('button');
    btnNext.setAttribute("class", "lightbox__next");
    btnNext.textContent = "Next";
    lightBox.appendChild(btnNext);

    /*** Button Prev ***/
    const btnPrev = document.createElement('button');
    btnPrev.setAttribute("class", "lightbox__prev");
    btnPrev.textContent = "Précédent";
    lightBox.appendChild(btnPrev);
    
    /*** on creer la section pour lightBox images ***/  
    const lightBoxContent = document.createElement('div');
    lightBoxContent.setAttribute("class", "lightbox-content");
    lightBox.appendChild(lightBoxContent);

    const linksImg = document.querySelectorAll(".article-image img[src$='.jpg']");

    // Get the index of Array item which matchs the id "2"
    // var index = myArray.findIndex(item => item.id === 2);

    // console.log(index);  // Prints: 1
    // console.log(myArray[index].name);  // Prints: Peter


    console.log(linksImg);

    // on ajoute l'écouteur click sur le liens
    for(let linkImg of linksImg) {
        linkImg.addEventListener('click', function(e) {
            // on désactive le comportement des liens
            e.preventDefault();
            
            // on ajoute l'image du lien cliqué dans le lightbox
            const image = document.createElement('img');
            
            image.setAttribute("src", e.target.src);
            const index = photographerMedias.findIndex(item => item.image === e.target.src)
            console.log("index : ", e.target.parentNode.parentNode.childNodes[1].firstChild.innerHTML);
            
            //image.setAttribute("src", "assets/medias/Mimi Keel/Animals_Rainbow.jpg");
            lightBoxContent.appendChild(image);
            
            const title = document.createElement('h2');
            lightBoxContent.appendChild(title);
            title.textContent = medias.title;
        
            // lorsque je click il faut que cela m'afiche mon lightbox
            lightBox.classList.add("show");
        })
        
        

    }
    const linksVideo = document.querySelectorAll(".article-video video[src$='.mp4']");
    console.log(linksVideo);

    // Button CLOSE    
    btnClose.addEventListener('click', function(e) {
        e.preventDefault();
        lightBox.classList.remove("show");
    })  
    // Keyboard Event
    

    btnPrev.addEventListener('click', function(e){
        console.log(btnPrev);
    })

    btnNext.addEventListener('click', function(e){
    console.log(btnNext);
    })
    


       
}


