function sortByPopularity() {

    //Etape 1: Le client appuie sur le btn de trie  
    listSorted = [];

        //Etape 2: recupérer les données du serveur
        getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
        .then(
            response =>  { 
                           
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
                })
                
                // on trie notre liste d'article grâce à l'ordre de l'objet 
                let newListArticlesSorted = []

                listSorted.forEach(
                obj => {
                    let id = obj.index
                    //on ajoute l'article selon son index par ordre de like
                    newListArticlesSorted.push(listeMedia[id])
                })
        
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

            })
}

function sortByTitle() {

        //Etape 1: Le client appuie sur le btn de trie
        listSorted = [];

        //Etape 2: recupérer les données du serveur
        getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
        .then(
            response => { 
                           
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
                })

            // on trie notre liste d'article grâce à l'ordre de l'objet 
            let newListArticlesSorted = []

            listSorted.forEach(
            obj => {
                let id = obj.index
                //on ajoute l'article selon son index par ordre de titre
                newListArticlesSorted.push(listeMedia[id])
            }) 

            console.log(newListArticlesSorted)
            let profilFilter = response.photographers.filter(p => p.id == id);
            let profil = profilFilter[0]

            //console.log(profil)

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
    //Etape 1: Le client appuie sur le btn de trie
    // dans le profil.js

    // on creer un array vide ou on va stocker nos arcticle trier
    listSorted = []
    //Etape 2: recupérer les données du serveur
    getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
    .then(
        response => {
            //Etape 3: Je filtre les médias du photographe
            let id = params.get("id");
            const listeMedia = response.media.filter(media => media.photographerId == id);
            console.log(listeMedia)
            //Etape 4: Je récupère les dates
            listeMedia.forEach((media, ind) => {
                //Etape 5: Je les tries
                let firstDate = media.date;
                let obj = {
                    firstDate: firstDate,
                    index: ind
                }
                listSorted.push(obj);
                
                listSorted = listSorted.sort( function( a, b ) {
                    if(a.firstDate < b.firstDate) return -1;
                    if(a.firstDate > b.firstDate) return 1;
                    return 0;
                })
            })

            // on trie notre liste d'article grâce à l'ordre de l'objet 
            let newListArticlesSorted = []

            listSorted.forEach(
            obj => {
                let id = obj.index
                //on ajoute l'article selon son index par ordre de date
                newListArticlesSorted.push(listeMedia[id])
            }
            )

            console.log(newListArticlesSorted)
            let profilFilter = response.photographers.filter(p => p.id == id);
            let profil = profilFilter[0]

            //console.log(profil)

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
    console.log("trie par date")

}
