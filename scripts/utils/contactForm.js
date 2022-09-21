async function getName () {
  const params = new URLSearchParams(document.location.search)
  const id = params.get('id')

  const response = await fetch('/data/photographers.json')
  const objets = await response.json()

  const profils = objets.photographers
  // Current photographer
  const profil = profils.find(item => item.id == id)
  // alert(profil.name);

  const modalHeader = document.querySelector('.modal-header')
  const h2 = document.createElement('h2')
  modalHeader.appendChild(h2)
  h2.setAttribute('class', 'header-name')
  h2.setAttribute('id', 'coordonnees')
  h2.textContent = `${profil.name}`
}
getName()

// DOM Elements
const body = document.body
const modal = document.getElementById('contact-form')
const modalForm = document.querySelector('.modalForm')
const logo = document.querySelector('.logo')
const contactBtn = document.getElementById('contact_button')
const closeBtn = document.getElementById('close_button')
const sendBtn = document.getElementById('send_button')
let previousActiveElement

// open modal form
contactBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

function openModal () {
  clearModal()
  modal.style.display = 'block'
  logo.style.display = 'none'
  document.body.classList.toggle('_lock')
  previousActiveElement = document.activeElement
  console.log(previousActiveElement)
  // теперь мы проходимся по всем элементам вообще на странице и у них сделать inert = true а у modal сделать inert = false чтобы вся страница была не активной а именно modal когда мы в нём был активен
  // Array.from(body.children).forEach((child) => {
  //   if (child !== modalForm) {
  //     child.setAttribute('aria-hidden', 'true')
  //     child.inert = true
  //   }
  // })
  modal.inert = false
  modalForm.inert = false
  modal.setAttribute('aria-hidden', 'false')
  modalForm.setAttribute('aria-hidden', 'false')
  // closeBtn.focus()
  document.querySelector('.i-1').focus()
}
function closeModal () {
  clearModal()
  modal.style.display = 'none'
  logo.style.display = 'block'
  document.querySelectorAll('.data__form.error').forEach(e => e.classList.remove('error'))
  document.querySelectorAll('.data__form.success').forEach(e => e.classList.remove('success'))
  contactBtn.focus()
}

function clearModal () {
  prenom.value = ''
  nom.value = ''
  email.value = ''
  textMessage.value = ''
}
function toggleModal () {
  modal.style.display = 'none'
  clearModal()
}
// La recuperation des elements
const form = document.getElementById('form')

// Evenments
form.addEventListener('submit', e => {
  e.preventDefault()
  form_verify()

  document.querySelectorAll('.data__form.error').forEach(e => e.classList.remove('error'))
  document.querySelectorAll('.data__form.success').forEach(e => e.classList.remove('success'))
})

function form_verify () {
  const prenomCheck = prenom_verify(prenom)
  const nomCheck = nom_verify(nom)
  const emailCheck = email_verify(email)
  const messageCheck = textMessage_verify(textMessage)

  if (prenomCheck && nomCheck && emailCheck && messageCheck) {
    console.log('prénom:' + prenom.value)
    console.log('nom:' + nom.value)
    console.log('email :' + email.value)
    console.log('message:' + textMessage.value)
    toggleModal()
  }
}

// verification Prenom
const prenom = document.getElementById('name')
const prenomInputPlaceholder = prenom.placeholder
prenom.focus()
// setTimeout(() => {
//     prenom.blur();
// }, 5000);
prenom.addEventListener('keyup', e => {
  prenom_verify(prenom)
})
prenom.addEventListener('blur', function (e) {
  prenom.placeholder = prenomInputPlaceholder
})
function prenom_verify (prenom) {
  if (prenom.value.trim() === '') {
    // on passe dans la fonction le nom du champ et ne pas la valeur
    const message = 'Le champ Prénom ne doit pas être vide'
    setError(prenom, message)
    return false
  } else if (!prenom.value.match(/^[a-zA-Z]/)) {
    const message = 'Le champ Prénom doit commencer par une lettre'
    setError(prenom, message)
    return false
  } else {
    const letterNum = prenom.value.length
    if (letterNum < 2) {
      const message = 'Le champ Prénom doit avoir au moins 2 caractères'
      setError(prenom, message)
      return false
    } else {
      setSuccess(prenom)
      return true
    }
  }
}
// verification Nom
const nom = document.getElementById('nom')
const nomInputPlaceholder = nom.placeholder
nom.addEventListener('keyup', e => {
  nom_verify(nom)
})
nom.addEventListener('blur', function (e) {
  nom.placeholder = nomInputPlaceholder
})
function nom_verify (nom) {
  if (nom.value.trim() === '') {
    // on passe dans la fonction le nom du champ et ne pas la valeur
    const message = 'Le champ Nom ne doit pas être vide'
    setError(nom, message)
    return false
  } else if (!nom.value.match(/^[a-zA-Z]/)) {
    const message = 'Le champ Nom doit commencer par une lettre'
    setError(nom, message)
    return false
  } else {
    const letterNum = nom.value.length
    if (letterNum < 2) {
      const message = 'Le champ Nom doit avoir au moins 2 caractères'
      setError(nom, message)
      return false
    } else {
      setSuccess(nom)
      return true
    }
  }
}
// Verification email
const email = document.getElementById('email')
const emailInputPlaceholder = email.placeholder
const span = document.getElementsByTagName('span')

email.addEventListener('keyup', e => {
  email_verify(email)
})
email.addEventListener('change', e => {
  email_verify(email)
})
email.addEventListener('focus', function (e) {
  email.placeholder = ''
})
email.addEventListener('blur', function (e) {
  email.placeholder = emailInputPlaceholder
})

function email_verify (email) {
  if (email.value.trim() === '') {
    const message = 'Email ne peut pas être vide'
    setError(email, message)
    return false
  } else if (!emailVerify(email.value.trim())) {
    const message = 'Email non valide'
    setError(email, message)
    return false
  } else {
    setSuccess(email)
    return true
  }
}
// Test Regex Email
function emailVerify (email) {
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email)
}

// Verification message
const textMessage = document.getElementById('message')
const textMessageInputPlaceholder = textMessage.placeholder
textMessage.addEventListener('keyup', e => {
  textMessage_verify(textMessage)
})
textMessage.addEventListener('blur', function (e) {
  textMessage.placeholder = textMessageInputPlaceholder
})
function textMessage_verify (textMessage) {
  if (textMessage.value.trim() === '') {
    const message = 'Votre message ne peut pas être vide'
    setError(textMessage, message)
    return false
  } else if (!textMessage.value.match(/^[a-zA-Z]/)) {
    const message = 'Votre message doit commencer par une lettre'
    setError(textMessage, message)
    return false
  } else {
    const messageText = textMessage.value.length
    if (messageText < 10) {
      const message = 'Votre message doit avoir au moins 10 caractères'
      setError(textMessage, message)
      return false
    } else {
      setSuccess(textMessage)
      return true
    }
  }
}

// dataForm input
function setError (input, message) {
  // je recupere le div dans laquelle se trouve input
  const dataForm = input.parentElement
  const span = dataForm.querySelector('span')
  // Ajout du message d'erreur
  span.innerText = message
  // Ajout de la classe erreur
  dataForm.className = 'data__form error'
}
function setSuccess (input) {
  const dataForm = input.parentElement
  dataForm.className = 'data__form success'
}

const formInputs = document.querySelectorAll('.input-control')

// keyboard events
document.querySelector('.i-1').onkeydown = function (event) {
  console.log('keydown')
  console.log('code:' + event.code)
  console.log('key:' + event.keyCode)
}

document.addEventListener('keyup', (e) => {
  // console.log(e)
  if (e.key === 'Escape') {
    modal.style.display = 'none'
  }
  if (e.key === 'ArrowDown') {
    // console.log('down')
    document.querySelector('.i-2').focus()
  }
  if (e.key === 'ArrowUp') {
    // console.log('up')
    document.querySelector('.i-1').focus()
  }
})
