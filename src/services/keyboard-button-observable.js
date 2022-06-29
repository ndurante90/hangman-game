export class KeyboardButtonObservable {
  constructor() {
    this.subscriptions = [];
    window.addEventListener("click", this.handleClick);
  }

  handleClick = (e) => {
    this.subscriptions.forEach((sub) => sub(e.target.textContent));
  };

  subscribe(callback) {
    this.subscriptions.push(callback);

    return () => {
      this.subscriptions = this.subscriptions.filter((cb) => cb !== callback);
    };
  }
}
