export function showPhotographers(obj) {

    const section = document.querySelector('section');
    const photographers = obj.photographers;
    console.log(photographers);

    const photo = `/assets/photographers/${portrait}`;
    //console.log(photo);

    for (const photographer of photographers) {
        const myArticle = document.createElement( 'article' );
        const myLien = document.createElement('a');    
        const myImg = document.createElement( 'img' );
        const myH2 = document.createElement( 'h2' );  
        const myH3 = document.createElement( 'h3' );    
        const myPara1 = document.createElement( 'p' );    
        const myPara2 = document.createElement( 'p' );

        myLien.setAttribute("href", "profil.html?id=" + photographer.id);
        myImg.setAttribute("src", "/assets/photographers/" + photographer.portrait);
        myImg.setAttribute("class", "photo");
    
        myH2.textContent = photographer.name;
        myH3.textContent = `${photographer.city} , ${photographer.country}`;
        myPara1.textContent = photographer.tagline;
        myPara2.textContent = `${photographer.price} /jours`;

        myArticle.appendChild(myLien);
        myLien.appendChild(myImg);
        myLien.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);

        section.appendChild(myArticle);  
    }
}