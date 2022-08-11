export function mediaFactory(data) {
    const { photographerId, title, image, likes, date, price } = data;

    let pathPhotographer = "";
    
    switch (photographerId) {
        case 243 :
            pathPhotographer = "Mimi";
            break;
        case 930 :
            pathPhotographer = "Ellie-Rose";
            break;
        case 82 :
            pathPhotographer = "Tracy Galiando";
            break;   
        case 527 :
            pathPhotographer = "Nabeel";
            break;   
        case 925 :
            pathPhotographer = "Rhode";
            break;           
        case 195 :
            pathPhotographer = "Marcel";
            break;   
    }

    const photos = `assets/medias${pathPhotographer}/${image}`;

}
