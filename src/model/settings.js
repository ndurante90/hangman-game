export class Settings {
  playerName;
  attemptsNumber;

  constructor(playerName, attemptsNumber = null) {
    this.playerName = playerName;
    this.attemptsNumber = attemptsNumber;
  }
}
