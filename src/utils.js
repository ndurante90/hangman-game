/**
 * Function that appends a new button to selector element.
 * The new button should execute a custom action
 * @param {string} selector
 * @param {string} buttonText
 * @param {function} action
 */
export function addButton(selector, text, action) {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", action);
  const container = document.querySelector(selector);
  if (container != null) {
    container.append(button);
  }
}

export function startTemplate() {
  return `
       <div class="hangman-menu-wrapper">
          <h1>The Hangman Game</h1>
          <div>
             <input id="player-name" type="text" placeholder="Insert player name">
          </div>
      </div>`;
}

//${this.getHiddenWordTemplate(this.word)}
//Think to Star Wars ${this.word.hint}
export function hangmanTemplate(
  wordComponent,
  keyboardComponent,
  puppetComponent
) {
  return `
         <div class="hangman-game-container">
            <div class="word-puppet-wrapper">
               <div class="hangman-flex-wrapper">
                  <div class="hangman-word">
                     ${wordComponent.getHiddenWordTemplate()}
                  </div>
                  <div class="hint">
                     <strong>Hint:</strong> Think to Star Wars ${wordComponent.getHint()}
                  </div>
               </div>
               <div>
                  ${puppetComponent.template}
               </div>
            </div>
            <div>
            ${keyboardComponent.template}
            </div>
          </div>`;
}

export function updateComponents(
  wordComponent,
  keyboardComponent,
  puppetComponent,
  buttonText
) {
  wordComponent.updatesWord(buttonText);
  keyboardComponent.disableButton(buttonText);
  puppetComponent.updateImage(buttonText, wordComponent.getText());
}
