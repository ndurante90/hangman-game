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

/**
 * Returns the start application template
 * @returns {string} - template
 */
export function startTemplate() {
  return `
       <div class="hangman-menu-wrapper">
          <div class="hangman-game">
             <h1>The Hangman Game</h1>
             <div>
                <input id="player-name" type="text" placeholder="Insert player name">
             </div>
             <br>
          </div>
      </div>
      `;
}

/**
 * Return the game template
 * @param {HangmanConfiguration} configuration
 * @returns {string} - template
 */
export function hangmanTemplate(configuration) {
  const { wordComponent, puppetComponent, keyboardComponent } = configuration;
  const name = configuration.playerName;
  return `
         <div class="hangman-game-container">
            <div class="player-name">
               <strong>Player name: ${name}</strong>
            </div>
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

/**
 * Updates the application UI by updating the single components
 * @param {HangmanConfiguration} configuration
 * @param {string} buttonText
 */
export function updateComponents(configuration, buttonText) {
  const { wordComponent, puppetComponent, keyboardComponent } = configuration;

  wordComponent.updatesWord(buttonText);
  keyboardComponent.updateButton(buttonText);
  puppetComponent.updateImage(
    buttonText.toLowerCase(),
    wordComponent.getText().toLowerCase()
  );
}

/**
 * Count guessed characters and determine victory
 */
export function handlePossibleVictory() {
  const letters = document.querySelectorAll(".letter");
  let counter = 0;
  for (let letter of letters) {
    if (letter.innerText) {
      counter++;
    }
  }

  if (counter === letters.length) {
    displayDialog("You won!");
  }
}

/**
 * Display game over dialog
 */
export function handleGameOver() {
  displayDialog("Game Over!");
}

/**
 * Display a custom dialog box
 * @param {string} text
 */
function displayDialog(text) {
  const buttons = document.querySelectorAll(".keyboard-row .button");

  for (let button of buttons) {
    button.setAttribute("disabled", "true");
  }
  document.body.outerHTML += `
               <div class="modal-wrapper">
                  <div class="modal">
                     <h1>${text}</h1>
                     <button onclick="location.reload()">Restart game</button>
                  </div>
               </div>`;
}
