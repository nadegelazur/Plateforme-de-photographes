export class PhotographersFactory {
  constructor (data) {
    this.name = data.name
    this.id = data.id
    this.city = data.city
    this.country = data.country
    this.tagline = data.tagline
    this.price = data.price
    this.portrait = data.portrait
    console.log(this.name)
    console.log(this.portrait)
  }

  createHtml () {
    return `
      <article class="photo-profil">
        <a href="photographer.html?id=${this.id}" tabindex="1">
          <img src="${this.portrait}" alt="photo de profil" role="link">
          <h2>${this.name}</h2>
        </a>
        <h3>${this.city} , ${this.country}</h3>
        <p>${this.tagline}</p>
        <p>${this.price}/jours</p>
      </article>
      `
  }
}
