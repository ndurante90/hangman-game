import { GameContainer } from "./components/game-container.js";
import { MenuComponent } from "./components/menu-component.js";

document.addEventListener("DOMContentLoaded", () => {
  const hangman = new Hangman();
  hangman.loadGame();
});

export class Hangman {
  /**
   * Function that loads a new game
   */
  loadGame() {
    /* 
       Istantiate a new MainMenu component 
       and add a new button
    */
    let mainMenu = new MenuComponent();
    document.body.innerHTML = mainMenu.template();
    this.addButton("Start Game", this.startNewGame);

    /**
     *  Handle button click of difficult component
     */
    const buttons = document.body.getElementsByClassName("difficult-btn");
    for (let button of buttons) {
      button.addEventListener("click", mainMenu.levelComponent.selectDifficult);
    }
    /*let service = new WordsService();
    service
      .getRandomResource()
      .then((response) => response.json())
      .then((data) => console.log(data));*/
  }

  /**
   * Function that appends a new button to the DOM body.
   * The new button should execute a custom action
   * @param {string} buttonText
   * @param {function} action
   */
  addButton(text, action) {
    const button = document.createElement("button");
    button.innerText = text;
    button.addEventListener("click", action);
    document.body.append(button);
  }

  /**
   * Function that init a new GameContainer
   */
  startNewGame() {
    const playerName = document.getElementById("player-name");
    if (playerName.value != "") {
      const gameContainer = new GameContainer(playerName);
      gameContainer.init();
    }
  }
}
