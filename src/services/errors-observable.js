export class ErrorsObservable {
  errorsNumber = 0;
  constructor() {
    this.subscriptions = [];
  }

  countError = () => {
    this.errorsNumber++;
    this.subscriptions.forEach((sub) => sub(this.errorsNumber));
  };

  subscribe(callback) {
    this.subscriptions.push(callback);

    return () => {
      this.subscriptions = this.subscriptions.filter((cb) => cb !== callback);
    };
  }
}
