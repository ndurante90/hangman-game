import { KeyBoardComponent } from "../components/keyboard-component.js";
import { PuppetComponent } from "../components/puppet-component.js";
import { WordComponent } from "../components/word-component.js";

export class HangmanConfiguration {
  wordComponent;
  keyboardComponent;
  puppetComponent;
  playerName;

  constructor() {
    this.wordComponent = new WordComponent();
    this.keyboardComponent = new KeyBoardComponent();
    this.puppetComponent = new PuppetComponent();
  }

  setWord(word) {
    this.wordComponent ? (this.wordComponent.word = word) : null;
  }
}
