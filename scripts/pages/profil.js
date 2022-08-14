let params = new URLSearchParams(document.location.search);
let idParams = params.get("id");

getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
.then(
 response => {

    //Etape 1: Recuperer Profil
    let listPhotographers = []
    listPhotographers = response.photographers;
    // console.log(listPhotographers)

    myPhotgrapher = {};

    listPhotographers.forEach(photograph => {
      if(photograph.id == idParams) {
        // console.log("true")
       myPhotgrapher = photograph
      }
    });

    // console.log(myPhotgrapher)

    //Etape 2: Recuperer liste Media
    let listMedia = [];
    listMedia = response.media;
    // console.log(listMedia)
    
    // console.log(idParams)
    listMediaOfPhotographer = [];

    listMedia.forEach(media => {
      if(media.photographerId == idParams) {
        // console.log("true")
        listMediaOfPhotographer.push(media)
      }
    });

    // console.log(listMediaOfPhotographer)

    //J'affiche mes elements au DOM

    //1. profil
    getHeader(listPhotographers, idParams)

    //2. liste des medias
    getMedias(idParams, myPhotgrapher, listMediaOfPhotographer)

    calculTotalLike()

    //LightBox.init()

    
  }
)

//VOIR BUG: btn title & date ne marche pas sur profil Ellie-Rose Wilkens

  //btn filter by popularity
  let btnPopularity = document.getElementById("popularite");

  btnPopularity.addEventListener("click", () => {
    sortByPopularity()
  })

  //btn filter by title
  let btnTitle = document.getElementById("titre");

  btnTitle.addEventListener("click", () => {
    sortByTitle()
  })

  //btn filter by date
  let btnDate = document.getElementById("date");

  btnDate.addEventListener("click", () => {
    sortByDate()
  })

//openLightBox()  






