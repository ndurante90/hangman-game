import { WordComponent } from "./components/word-component.js";
import { Settings } from "./model/settings.js";
import { WordsService } from "./services/words.service.js";
import {
  addButton,
  startTemplate,
  hangmanTemplate,
  updateComponents,
} from "./utils.js";
import { Word } from "./model/word.js";
import { KeyBoardComponent } from "./components/keyboard-component.js";
import { PuppetComponent } from "./components/puppet-component.js";

document.addEventListener("DOMContentLoaded", () => {
  const hangman = new Hangman();
  hangman.loadGame();
});

export class Hangman {
  /**
   * Function that loads a new game
   */
  loadGame() {
    document.body.innerHTML = startTemplate();
    addButton(".hangman-menu-wrapper", "Start Game", this.startNewGame);
  }

  /**
   * Function that init a new GameContainer
   */
  async startNewGame() {
    const playerName = document.getElementById("player-name");
    if (playerName.value != "") {
      this.settings = new Settings(playerName);
      this.wordsService = new WordsService();

      let errors = false;
      //insert loading icon that rotate to simulate the loading process
      await this.wordsService.getRandomResource().then((data) => {
        if (data.detail) {
          alert("There was an error! Try again");
          errors = true;
          return;
        }
        const hint = this.wordsService.getResourceTypeFromUrl(data.url);
        const value = hint == "films" ? data.title : data.name;
        this.wordComponent = new WordComponent(new Word(value, hint));
      });

      if (!errors && this.wordComponent) {
        this.keyBoard = new KeyBoardComponent();
        this.puppet = new PuppetComponent();
        document.body.innerHTML = hangmanTemplate(
          this.wordComponent,
          this.keyBoard,
          this.puppet
        );

        document.onclick = (ev) => {
          updateComponents(
            this.wordComponent,
            this.keyBoard,
            this.puppet,
            ev.target.innerText
          );
        };
      }
    }
  }
}
