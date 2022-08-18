export class LightboxContainer {
    buildDOM() {
        
      const lightbox = document.createElement("div");
      lightbox.classList = "lightbox";
      lightbox.setAttribute("aria-label", "vue rapprochée de l'image");
      lightbox.setAttribute("role", "dialog");
      lightbox.setAttribute("tabindex", "-1");
      lightbox.innerHTML = `
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox-content">
          <div>
          </div>
        </div>`;
      return lightbox;
    }
  }