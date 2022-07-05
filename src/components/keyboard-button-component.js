export class KeyBoardButtonComponent {
  errorDetected = false;
  constructor(car) {
    this.car = car;
  }

  get template() {
    return `<button id="btn-${this.car}" class="button" onclick="">${this.car}</button>`;
    /*const el = document.createElement("div");
    el.setAttribute("id", "btn-" + this.car);
    el.setAttribute("class", "button");
    el.textContent = this.car.toUpperCase();
    el.onclick = () => {
      alert("ciao");
    };
    console.log(el);
    return el;*/
  }

  press() {
    console.log(this.car);
  }
}
