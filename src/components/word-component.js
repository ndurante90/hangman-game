export class WordComponent {
  constructor(word) {
    this.word = word;
  }
  /*get template() {
    return `
    <div class="hangman-word">
       ${this.getHiddenWordTemplate(this.word)}
    </div>
    <div class="hint">
       <strong>Hint:</strong> Think to Star Wars ${this.word.hint}
    </div>
    `;
  }*/

  getText() {
    return this.word?.text;
  }

  getHint() {
    return this.word?.hint;
  }

  /**
   * Get template for hidden word
   * @param {Word} word
   * @returns {string} - template for hidden word
   */
  getHiddenWordTemplate() {
    let template = "";
    for (let carIndex in this.word.text) {
      template += `<div class="letter" id="letter-${carIndex}"></div>`;
    }
    return template;
  }

  updatesWord(buttonText) {
    buttonText = buttonText.toLowerCase();
    if (this.word) {
      let textArray = this.word.text.split("").reduce(function (a, e, i) {
        if (e.toLowerCase() === buttonText) a.push(i);
        return a;
      }, []);

      textArray.forEach((element) => {
        const letter = document.getElementById("letter-" + element);
        letter.innerText = buttonText;
        letter.setAttribute("data-letter", `${buttonText}`);
      });
    }
  }
}
