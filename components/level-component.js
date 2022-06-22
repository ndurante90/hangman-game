export class LevelComponent {
  selectedDifficult;
  constructor() {
    this.htmlTemplate = `
    <div class="difficult-wrapper">
       <button class="difficult-btn" value="easy">Easy</button>
       <button class="difficult-btn" value="medium">Medium</button>
       <button class="difficult-btn" value="hard">Hard</button>
    </div>`;
  }

  get template() {
    return this.htmlTemplate;
  }

  selectDifficult(evt) {
    this.selectDifficult = evt.target.value;
    alert(evt.target.value);
  }
}
