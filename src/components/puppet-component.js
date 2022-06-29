import { Observable } from "rxjs";

export class PuppetComponent {
  constructor(errorsObservable) {
    this.errorsNumber = 0;
    this.template = `<div class="puppet">
                         <img src="../assets/hangman-0.png">
                    </div>`;
    this.errorsObservable = errorsObservable;
  }

  getImage() {
    return `hangman-${this.errorsNumber}.png`;
  }

  updateImage(buttonElement) {
    this.errorsObservable.subscribe((res) => {
      this.errorsNumber = res;
      this.template = `<div class="puppet">
      <img src="../assets/${this.getImage()}">
 </div>`;
    });
  }
}
