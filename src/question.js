class Question {
  // YOUR CODE HERE:
  //
  // 1. constructor (text, choices, answer, difficulty)
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
  // 2. shuffleChoices()
  shuffleChoices() {
    for (let i = this.choices.length - 1; i > 0; i--) {
      // select a random index
      const j = Math.floor(Math.random() * (i + 1));

      // change the choices in the positions i and j
      [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]];
    }
  }
}
