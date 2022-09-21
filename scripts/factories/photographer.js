// construction d'un article qui contiens photo de photograph avec info supplementaire
export function photographerFactory (data, index) {
  // console.log(data)

  const { id, name, portrait, city, country, tagline, price } = data

  // const picture = `assets/photographers/${portrait}`
  const picture = `/photographers/${portrait}`

  function getUserCardDOM () {
    const article = document.createElement('article')
    article.setAttribute('class', 'photo-profil')
    const lien = document.createElement('a')

    // Modifier par profil car page profil = profil.html
    lien.setAttribute('href', 'profil.html?id=' + id)
    lien.setAttribute('tabindex', index + 1)

    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('role', 'link')
    const h2 = document.createElement('h2')
    h2.textContent = name
    const h3 = document.createElement('h3')
    h3.textContent = city + ',' + country
    const p = document.createElement('p')
    p.textContent = tagline
    const p1 = document.createElement('p')
    p1.textContent = price + '/jours'

    article.appendChild(lien)
    lien.appendChild(img)
    lien.appendChild(h2)
    article.appendChild(h3)
    article.appendChild(p)
    article.appendChild(p1)

    // console.log(article)
    return (article)
  }

  // console.log(price)

  return { id, name, picture, getUserCardDOM, city, country, tagline, price }
}
