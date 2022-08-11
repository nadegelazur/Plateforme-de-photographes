export function getMedias(id, profil, medias) {
    const photographContent = document.querySelector('.photograph-content');
    
    const photographerMedias = medias.filter(media => media.photographerId == id);
    for (const media of photographerMedias) {
        console.log(media)

        const myA = document.createElement('a');
        photographContent.appendChild(myA);
        
        
        //media Image
        if(media.hasOwnProperty('image')){
            myA.scr = `/assets/medias/${profil.name}/${media.image}`;
            const mediaImg = document.createElement('img')
            mediaImg.src = `/assets/medias/${profil.name}/${media.image}`;
            // myImg.setAttribute("src", "/assets/medias/" + profil.name + "/" + media.image);

            //let m = `${media.image}`;
            mediaImg.setAttribute("onclick","openModalBox(); currentSlide(m)");
            mediaImg.setAttribute("class","hover-shadow");

            //openModalLightBox();
            //openModalBox();
            
            myA.appendChild(mediaImg)
        }else{
        //media Video
            myA.src = `/assets/medias/${profil.name}/${media.video}`;
            const mediaVideo = document.createElement('video')
            mediaVideo.src = `/assets/medias/${profil.name}/${media.video}`;
            mediaVideo.type = "video/mp4"

            //play button
            const playButton = document.createElement('button')
            playButton.textContent = "play";

            mediaVideo.appendChild(playButton)

            myA.appendChild(mediaVideo)
            mediaVideo.addEventListener('click',handlePlayButton)
            async function playVideo() {
                try {
                await mediaVideo.play();
                playButton.classList.add("playing");
                } catch(err) {
                playButton.classList.remove("playing");
                }
            }
            
            function handlePlayButton() {
                if (mediaVideo.paused) {
                playVideo();
                } else {
                    mediaVideo.pause();
                playButton.classList.remove("playing");
                }
            }
        }

        //div for title and likes
        const mediaDetails = document.createElement('div')
        mediaDetails.setAttribute("class", "media-title");
        
        //media Title
        const mediaTitle = document.createElement('h3')
        mediaTitle.textContent = `${media.title}`
        mediaDetails.appendChild(mediaTitle)

        //media likes
        const mediaLikes = document.createElement('div');
        mediaLikes.setAttribute("class", "media-likes");
        mediaDetails.appendChild(mediaLikes);

        const totalLikes = document.createElement('span');
        totalLikes.textContent = `${media.likes}`;
        mediaLikes.appendChild(totalLikes);
        

        const iconDiv = document.createElement('div');
        iconDiv.setAttribute("class","icon-div");
        
        const likeIcon = document.createElement('i');
        likeIcon.setAttribute("class", "fa-solid fa-heart");

        mediaLikes.appendChild(iconDiv);
        iconDiv.appendChild(likeIcon);
        myA.appendChild(mediaDetails)
    }
}