export class LightboxImg {
    /**
     * @param {string}imageLink
     * @param {string}title
     */
    constructor(imageLink, title) {
      this.imageLink = imageLink;
      this.title = title;
    }
    buildDOM() {
      const lightbox = `
              <img src="${this.imageLink}" alt="${this.title}"/>
              <p>${this.title}</p>`;
      return lightbox;
    }
  }