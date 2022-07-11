export class KeyBoardButtonComponent {
  constructor(car) {
    this.car = car;
  }

  get template() {
    const uppercaseCar = this.car.toUpperCase();
    return `<button id="btn-${this.car}" class="button" onclick="">${uppercaseCar}</button>`;
  }
}
