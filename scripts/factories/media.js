export class MediasFactory {
  constructor (data) {
    // Si le type correspond à l'ancienne API, alors retourne-moi l'ancien formatage
    if (data.hasOwnProperty('image')) {
      return new Image(data)
    // Sinon retourne-moi le nouveau formatage
    } else if (data.hasOwnProperty('video')) {
      return new Video(data)
    // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
    } else {
      throw 'Unknown type format'
    }
  }
}
class Image {
  constructor (data) {
    this.id = data.id
    this.photographerId = data.photographerId
    this.image = data.image
    this.title = data.title
    this.likes = data.likes
    this.date = data.date
  }

  createHtml () {
    return `
        <article class="mediaBox">         
            <img src="assets/medias/${this.photographerId}/${this.image}" tabindex="0" alt="${this.title}">        
            <div class="media-title">
                <h3>${this.title}</h3>             
                <div class="media-likes">
                    <span class="nb-likes">${this.likes}</span>
                    <div class="like like-no" aria-label="likes" tabindex="0" role="button"></div>  
                </div>               
            </div>
        </article>`
  }
}
class Video {
  constructor (data) {
    this.id = data.id
    this.photographerId = data.photographerId
    this.video = data.video
    this.title = data.title
    this.likes = data.likes
    this.date = data.date
    this.price = data.price
  }

  createHtml () {
    return `
    <article class="mediaBox">
        <video src="assets/medias/${this.photographerId}/${this.video}" tabindex="0" alt="${this.title}"></video>
        <span class="play-circle">
            <i class="fa-solid fa-circle-play"></i>
        </span>            
        <div class="media-title">
            <h3>${this.title}</h3>
            <div class="media-likes">
                <span class="nb-likes">${this.likes}</span>
                <div class="like like-no" aria-label="likes" tabindex="0" role="button"></div> 
            </div>               
        </div>
    </article>`
  }
}
