export function getPathMedia(photographerId) {

    //console.log(photographerId);
    let pathPhotographer = "";
    
    switch (photographerId) {
        case 243 :
            pathPhotographer = "Mimi Keel";
            break;
        case 930 :
            pathPhotographer = "Ellie-Rose Wilkens";
            break;
        case 82 :
            pathPhotographer = "Tracy Galindo";
            break;   
        case 527 :
            pathPhotographer = "Nabeel Bradford";
            break;   
        case 925 :
            pathPhotographer = "Rhode Dubois";
            break;           
        case 195 :
            pathPhotographer = "Marcel Nikolic";
            break;   
    }

    const photos = `assets/medias/${pathPhotographer}`;
    //console.log(photos);
    return (photos);
    

}
