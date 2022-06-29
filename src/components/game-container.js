import { Settings } from "../model/settings.js";
import { Word } from "../model/word.js";
import { ErrorsObservable } from "../services/errors-observable.js";
import { KeyboardButtonObservable } from "../services/keyboard-button-observable.js";
import { WordsService } from "../services/words.service.js";
import { KeyBoardComponent } from "./keyboard-component.js";
import { PuppetComponent } from "./puppet-component.js";
import { WordComponent } from "./word-component.js";

export class GameContainer {
  constructor(playerName) {
    this.keyboardButtonObservable = new KeyboardButtonObservable();
    this.errorsObservable = new ErrorsObservable();
    this.settings = new Settings(playerName);
    this.wordComponent = new WordComponent();
    this.keyboardComponent = new KeyBoardComponent();
    this.puppetComponent = new PuppetComponent(this.errorsObservable);
    this.wordsService = new WordsService();
    this.word = "";
    this.hiddenWord = null;
  }

  //add hint
  async init() {
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
      this.wordComponent.word = new Word(value, hint);
    });

    if (!errors) {
      document.body.innerHTML = this.template();
    }

    this.keyboardButtonObservable.subscribe((buttonText) => {
      const element = document.getElementById(`btn-${buttonText}`);
      if (element != null) {
        this.wordComponent.updatesWord(buttonText, this.errorsObservable);
        this.keyboardComponent.disableButton(buttonText);

        this.puppetComponent.updateImage(element);
        //document.body.innerHTML = this.template();
      }
    });
  }

  template() {
    return `<div class="hangman-game-container">
               <div class="word-puppet-wrapper">
               <div class="hangman-flex-wrapper">
                  ${this.wordComponent.template}
               </div>
               <div>
                  ${this.puppetComponent.template}
               </div>
               </div>
               <div>
               ${this.keyboardComponent.template}
               </div>
            </div>`;
  }
}
