
// function filterByPopularity() {

//     let articles = document.getElementsByTagName("article");

//     let articlesNbLikes = [];
//     let listSorted = [];

//     //On récupère les nb likes pour les comparer
//     Array.from(articles).forEach(
//         (article, index) => {

//             //on transforme le nb like du span en integer pour pouvoir comparer
//             let nbLikeArticle = parseInt(article.childNodes[1].childNodes[1].childNodes[0].textContent);

//             //on creé un objet avec nombre de like et index pour reorganiser 
//             // notre liste d'article selon le nb like
//             let obj = {
//                 nbLike: nbLikeArticle,
//                 index: index
//             }

//             articlesNbLikes.push(obj);

//             listSorted = articlesNbLikes.sort( function( a , b){
//                 if(a.nbLike > b.nbLike) return -1;
//                 if(a.nbLike < b.nbLike) return 1;
//                 return 0;
//             });

        
//         }
//     )

//     // on trie notre liste d'article grâce à l'ordre de l'objet 
//     let newListArticlesSorted = []

//     listSorted.forEach(
//         obj => {
//             let id = obj.index
//             //on ajoute l'article selon son index par ordre de like
//             newListArticlesSorted.push(articles[id])
//         }
//     )

//     // console.log(newListArticlesSorted)


//     let container = document.getElementsByClassName("photograph-content")

//     //on supprime les articles
//     let child = container[0].lastElementChild; 
//     while (child) {
//         container[0].removeChild(child);
//         child = container[0].lastElementChild;
//     }


//     //on ajoute la liste des articles triés
//     newListArticlesSorted.forEach(
//         el => container[0].append(el)

//     )

// }


function sortByPopularity() {

     //Etape 1: Le client appuie sur le btn de trie

        
     listSorted = [];

     //Etape 2: recupérer les données du serveur
     getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
     .then(
         response => 
         {                
     
             //Etape 3: Je filtre les médias du photographe

             let id = params.get("id");

             const listeMedia = response.media.filter(media => media.photographerId == id);

             

                 //Etape 4: Je récupère les titres
                 listeMedia.forEach((media, ind) => {

                    // console.log(media)

                     //Etape 5: Je les tries
                     let nbLike = media.likes;
                     let obj = {
                         nbLike: nbLike,
                         index: ind
                     }
                     listSorted.push(obj);

                     listSorted = listSorted.sort( function( a , b){
                         if(a.nbLike < b.nbLike) return 1;
                         if(a.nbLike > b.nbLike) return -1;
                         return 0;
                     });

                     
                 }
             )

     // on trie notre liste d'article grâce à l'ordre de l'objet 
     let newListArticlesSorted = []

     listSorted.forEach(
     obj => {
         let id = obj.index
         //on ajoute l'article selon son index par ordre de like
         newListArticlesSorted.push(listeMedia[id])
     }
     )

    //  console.log(newListArticlesSorted)
     let profilFilter = response.photographers.filter(p => p.id == id);
     let profil = profilFilter[0]

    //  console.log(profil)

     //Etape 6: On supprime les articles du DOM
     let container = document.getElementsByClassName("photograph-content")
     let child = container[0].lastElementChild; 
     while (child) {
     container[0].removeChild(child);
     child = container[0].lastElementChild;
     }


     //Etape 7: On ajoute les articles triés grâce à la function getMedias

     getMedias(id, profil, newListArticlesSorted)

     }

 )
  

}

function sortByTitle() {

        //Etape 1: Le client appuie sur le btn de trie

        
        listSorted = [];

        //Etape 2: recupérer les données du serveur
        getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
        .then(
            response => 
            {                
        
                //Etape 3: Je filtre les médias du photographe

                let id = params.get("id");

                const listeMedia = response.media.filter(media => media.photographerId == id);

                

                    //Etape 4: Je récupère les titres
                    listeMedia.forEach((media, ind) => {

                        //Etape 5: Je les tries
                        let firstLetter = media.title[0];
                        let obj = {
                            firstLetter: firstLetter,
                            index: ind
                        }
                        listSorted.push(obj);

                        listSorted = listSorted.sort( function( a , b){
                            if(a.firstLetter < b.firstLetter) return -1;
                            if(a.firstLetter > b.firstLetter) return 1;
                            return 0;
                        });

                        
                    }
                )

        // on trie notre liste d'article grâce à l'ordre de l'objet 
        let newListArticlesSorted = []

        listSorted.forEach(
        obj => {
            let id = obj.index
            //on ajoute l'article selon son index par ordre de like
            newListArticlesSorted.push(listeMedia[id])
        }
        )

        console.log(newListArticlesSorted)
        let profilFilter = response.photographers.filter(p => p.id == id);
        let profil = profilFilter[0]

        console.log(profil)

        //Etape 6: On supprime les articles du DOM
        let container = document.getElementsByClassName("photograph-content")
        let child = container[0].lastElementChild; 
        while (child) {
        container[0].removeChild(child);
        child = container[0].lastElementChild;
        }


        //Etape 7: On ajoute les articles triés grâce à la function getMedias

        getMedias(id, profil, newListArticlesSorted)

        }

    )
     
}

function sortByDate() {

    console.log("trie par date")

}
