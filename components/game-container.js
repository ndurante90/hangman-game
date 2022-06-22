import { Settings } from "../model/settings.js";
import { Word } from "../model/word.js";
import { WordsService } from "../services/words.service.js";
import { WordComponent } from "./word-component.js";

export class GameContainer {
  constructor(playerName) {
    this.settings = new Settings(playerName);
    this.wordComponent = new WordComponent();
    this.wordsService = new WordsService();
    this.word = "";
    this.hiddenWord = null;
  }

  //add hint
  async init() {
    //insert loading icon that rotate to simulate the loading process
    await this.wordsService.getRandomResource().then((data) => {
      console.log(data);
      const hint = this.wordsService.getResourceTypeFromUrl(data.url);
      this.wordComponent.word = new Word(data.name, hint);
    });

    document.body.innerHTML = this.template();
  }

  template() {
    return `<div class="hangman-game-container">
               <div class="word-puppet-wrapper">
               <div class="hangman-flex-wrapper">
                  ${this.wordComponent.template}
               </div>
               <div>
                  asda
               </div>
               </div>
            </div>`;
  }
}
