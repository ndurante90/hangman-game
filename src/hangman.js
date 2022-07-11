import { WordsService } from "./services/words.service.js";
import {
  addButton,
  startTemplate,
  hangmanTemplate,
  updateComponents,
  handleGameOver,
  handlePossibleVictory,
} from "./utils.js";
import { Word } from "./model/word.js";
import { HangmanConfiguration } from "./model/hangman-configuration.js";
import { MAX_ERRORS_NUMBER } from "./constants.js";

let hangman;
document.addEventListener("DOMContentLoaded", () => {
  hangman = new Hangman();
  hangman.loadGame();
});

export class Hangman {
  /**
   * Function that loads a new game
   */
  loadGame() {
    document.body.innerHTML = startTemplate();
    addButton(".hangman-game", "Start Game", this.startNewGame);
  }

  /**
   * Function that init a new GameContainer
   */
  async startNewGame() {
    const configuration = new HangmanConfiguration();
    const playerName = document.getElementById("player-name");

    if (playerName.value != "") {
      let word, errors;
      this.wordsService = new WordsService();

      configuration.playerName = playerName.value;

      //insert loading icon that rotate to simulate the loading process
      await this.wordsService.getRandomResource().then((data) => {
        if (data.detail) {
          alert("There was an error! Try again");
          errors = true;
          return;
        }
        const hint = this.wordsService.getResourceTypeFromUrl(data.url);

        //retrieving data.title field instead of data.name for films category
        let value = hint == "films" ? data.title : data.name;
        value = value.replace(/\s+/g, "");
        word = new Word(value, hint);
      });

      if (!errors && word) {
        //set new word
        configuration.setWord(word);

        //updates html template
        document.body.innerHTML = hangmanTemplate(configuration);

        document.onclick = (ev) => {
          //at each button click I refresh application UI
          if (ev.target.classList == "button") {
            updateComponents(configuration, ev.target.innerText);
          }

          /* remove extra modals before inserting another one */
          const element = document.querySelector(".modal-wrapper");
          if (element) {
            element.remove();
          }

          if (
            configuration.puppetComponent.errorsNumber === MAX_ERRORS_NUMBER
          ) {
            handleGameOver();
            return;
          }

          handlePossibleVictory();
        };
      }
    }
  }
}
