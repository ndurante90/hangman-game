export class WordComponent {
  constructor(word = null) {
    this.word = word;
  }

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

  /**
   * Updates the hidden word substituting buttonText character in right places (if present)
   * @param {string} buttonText
   */
  updatesWord(buttonText) {
    buttonText = buttonText.toLowerCase();

    if (this.word) {
      // returns buttonText character positions in the hidden word
      let textArray = this.word.text.split("").reduce(function (a, e, i) {
        if (e.toLowerCase() === buttonText) a.push(i);
        return a;
      }, []);

      // insert text in correct word places
      textArray.forEach((element) => {
        const letter = document.getElementById("letter-" + element);
        letter.innerText = buttonText;
        letter.setAttribute("data-letter", `${buttonText}`);
      });
    }
  }
}
