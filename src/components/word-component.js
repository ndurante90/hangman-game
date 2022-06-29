import { Word } from "../model/word";

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
    for (let carIndex in word.text) {
      template += `<div class="letter" id="letter-${carIndex}"></div>`;
    }
    return template;
  }

  updatesWord(buttonText, obs) {
    buttonText = buttonText.toLowerCase();
    if (this.word) {
      let textArray = this.word.text.split("").reduce(function (a, e, i) {
        if (e.toLowerCase() === buttonText) a.push(i);
        return a;
      }, []);

      if (textArray.length == 0) {
        obs.countError();
      }

      textArray.forEach((element) => {
        const letter = document.getElementById("letter-" + element);
        letter.innerText = buttonText;
        letter.setAttribute("data-letter", `${buttonText}`);
      });
    }
  }
}
