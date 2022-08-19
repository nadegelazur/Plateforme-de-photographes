async function getName() {

    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");

    const response = await fetch('/data/photographers.json');        
    const objets = await response.json();

    const profils = objets.photographers;
    // Current photographer
    let profil = profils.find(item => item.id == id);
        //alert(profil.name);

    const modalHeader = document.querySelector('.modal-header');
    const h2 = document.createElement( 'h2' );
    modalHeader.appendChild(h2);
    h2.setAttribute("class", "header-name");
    h2.textContent = `${profil.name}`;
}
getName();

function openModal() {
   
    document.body.classList.toggle('_lock'); 
    const contactForm = document.getElementById("contact-form");
    const logo = document.querySelector('.logo');
	contactForm.style.display = "block";
    logo.style.display = "none";
}

function closeModal() {
    const modal = document.getElementById("contact-form");
    const logo = document.querySelector('.logo');
    modal.style.display = "none";
    logo.style.display = "block";
}

// FORMULAIRE DE CONTACT

// La recuperation le buttom "Contactez-moi"
const contactBtn = document.querySelectorAll('.contact_button');
// open modal event
contactBtn.forEach((button) => button.addEventListener("click", openModal));

const dataForm = document.querySelector('.data__form');
const inputs = document.querySelectorAll('.input-control');
const inpValidation = document.querySelector('.data__form span');
const sendBtn = document.querySelector('.send_button');

//очистить формуляр

//array1.forEach(element => console.log(element));
//forEach parcourir sans modifier
//map avec la modification
inputs.forEach(input => {
    input.addEventListener('input', function(e) {
        // for each - querySelectorAll
         console.log(e.target.value);
         if(e.target.value !== "") {
             e.target.parentNode.classList.add('active-input');
         }else if(e.target.value === "") {
             e.target.parentNode.classList.remove('active-input');
         }
     
         if(e.target.value.includes('$')) {
             //console.log("erreur!");
             input.classList.add('erreur');
             inpValidation.innerText = "Les $ sont interdits"
             inpValidation.classList.add('visible');
         } else {
             input.classList.remove('erreur');
             inpValidation.classList.remove('visible');
         }
     })
})





