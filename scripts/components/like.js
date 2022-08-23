function clickBtnLike(evt) {

    let btnHeart = evt.currentTarget
    console.log(btnHeart)

    let parentNode = btnHeart.parentNode
    console.log(parentNode)
    
    nbLike = parentNode.firstChild.textContent;
    nbLikeInt = parseInt(nbLike)
    
    parentNode.firstChild.innerHTML = nbLikeInt + 1;

    //On supprime le coeur vide
    btnHeart.remove()

    //On ajoute le coeur rempli
    const iconDiv = document.createElement('div');
    iconDiv.setAttribute("class","icon-div");
    iconDiv.setAttribute("aria-label","liké");
    iconDiv.setAttribute("tabIndex","0");
    iconDiv.setAttribute("role","button");
    iconDiv.addEventListener('click', (event) => clickBtnDislike(event))
    
    const likeIcon = document.createElement('i');
    likeIcon.setAttribute("class", "fa-solid fa-heart");
    iconDiv.appendChild(likeIcon);

    parentNode.appendChild(iconDiv);

    calculTotalLike();

}

function clickBtnDislike(evt) {

    let btnHeart = evt.currentTarget
    let parentNode = btnHeart.parentNode
    console.log(parentNode)
    
    nbLike = parentNode.firstChild.textContent;
    nbLikeInt = parseInt(nbLike)
    
    parentNode.firstChild.innerHTML = nbLikeInt - 1;

    //On supprime le coeur rempli
    btnHeart.remove()

    //On ajoute le coeur vide
    const iconDiv = document.createElement('div');
    iconDiv.setAttribute("class","icon-div");
    iconDiv.setAttribute("aria-label","disliké");
    iconDiv.setAttribute("tabIndex","0");
    iconDiv.setAttribute("role","button");
    iconDiv.addEventListener('click', (event) => clickBtnLike(event))
    
    const likeIcon = document.createElement('i');
    likeIcon.setAttribute("class", "fa-regular fa-heart");
    iconDiv.appendChild(likeIcon);

    parentNode.appendChild(iconDiv);

    calculTotalLike();

}


function calculTotalLike() {
    
    let listSpan = document.getElementsByClassName("nb-likes")

    let listNbLike = [];

    Array.from(listSpan).forEach(
        span => {

            let intNbLike = parseInt(span.textContent);
            listNbLike.push(intNbLike)
        }
    )

    // console.log(listNbLike)
    
        
    let totatLike = listNbLike.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );

    
    document.getElementById("totalLike").innerHTML = ""

    // document.getElementById("totalLike").innerHTML = totatLike + " Nb Like Total"
    document.getElementById("totalLike").innerHTML = totatLike;


    return totatLike;

}

