import { LevelComponent } from "./level-component.js";

export class MenuComponent {
  playerName;
  LevelComponent;
  constructor() {
    this.levelComponent = new LevelComponent();
  }

  template = () => `<div class="hangman-menu-wrapper">
                       <h1>The Hangman Game</h1>
                       <div>
                           <input id="player-name" type="text" placeholder="Insert player name">
                           ${this.levelComponent.template}
                       </div>
                    </div>`;
}
