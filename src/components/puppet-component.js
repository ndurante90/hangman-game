export class PuppetComponent {
  basePath = "assets/hangman-";

  constructor() {
    this.errorsNumber = 0;
  }

  get template() {
    let template = `
       <div class="puppet">
          <img id="puppet-img" src="${this.basePath}${this.errorsNumber}.png" alt="">
        </div>
       `;
    return template;
  }

  getImage() {
    return `hangman-${this.errorsNumber}.png`;
  }

  /**
   * Render the correct hangman image
   * @param {string} buttonText
   * @param {string} wordText
   */
  updateImage(buttonText, wordText) {
    if (!wordText.includes(buttonText)) {
      this.errorsNumber++;
      const puppetImg = document.getElementById("puppet-img");
      puppetImg.setAttribute("src", `${this.basePath}${this.errorsNumber}.png`);
    }
  }
}
