

getData('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
.then(
 response => {
    console.log(response);
    let listPhotographers = [];
    listPhotographers = response.photographers;


    // listPhotographers.forEach(element => {
    //     console.log(element)
    //     let section = document.getElementsByClassName("photographer-section")[0];
    //     let art = photographerFactory(element).getUserCardDOM();

    //     section.appendChild(art);

    // });

    for(let i=0; i < listPhotographers.length; i++) {
            console.log(listPhotographers[i])
            let section = document.getElementsByClassName("photographer-section")[0];
            let art = photographerFactory(listPhotographers[i]).getUserCardDOM();
    
            section.appendChild(art);
    }
}
)