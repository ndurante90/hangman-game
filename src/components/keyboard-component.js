import { KeyBoardButtonComponent } from "./keyboard-button-component.js";

export class KeyBoardComponent {
  rows = {
    1: "qwertyuiop",
    2: "asdfghjkl",
    3: "zxcvbnm",
  };

  buttons = [];

  constructor() {}

  /**
   * Return visual keyboard layout
   * @returns {string} - keyboard layout
   */
  get template() {
    let template = `<div class="keyboard">`;
    Object.keys(this.rows).forEach((key) => {
      template += this.getRow(key);
    });
    template += "</div>";
    return template;
  }

  /**
   * Return single row template
   * @param {string} num
   * @returns {string} - a row template
   */
  getRow(num) {
    let rowTemplate = `<div class="keyboard-row" id="row-${num}">`;
    for (let car of this.rows[num]) {
      const component = new KeyBoardButtonComponent(car.toUpperCase());
      rowTemplate += component.template;
      this.buttons.push(component);
    }
    rowTemplate += "</div>";
    return rowTemplate;
  }

  disableButton(buttonText) {
    const btn = document.getElementById("btn-" + buttonText);
    btn.setAttribute("disabled", true);
    const wordElement = document.querySelector(
      `[data-letter="${buttonText.toLowerCase()}"]`
    );

    if (!wordElement) {
      btn.setAttribute("class", "cross-decoration");
    }
  }
}
