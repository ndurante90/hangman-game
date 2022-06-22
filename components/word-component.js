export class WordComponent {
  constructor() {}
  get template() {
    return `
    <div class="hangman-word">
       ${this.getHiddenWordTemplate(this.word)}
    </div>
    <div class="hint">
       <strong>Hint:</strong> Think to Star Wars ${this.word.hint}
    </div>
    `;
  }

  get word() {
    return this._word;
  }

  /**
   * @param {Word} value
   */
  set word(value) {
    this._word = value;
  }

  /**
   * Get template for hidden word
   * @param {Word} word
   * @returns {string} - template for hidden word
   */
  getHiddenWordTemplate(word) {
    let template = "";
    for (let car in word.text) {
      template += `<div class="letter"></div>`;
    }
    return template;
  }
}
