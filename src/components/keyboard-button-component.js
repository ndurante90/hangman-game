export class KeyBoardButtonComponent {
  constructor(car) {
    this.car = car;
  }

  get template() {
    return `<button id="btn-${this.car}" class="button" onclick="">${this.car}</button>`;
  }
}
