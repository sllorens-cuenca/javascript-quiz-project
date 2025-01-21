// class Quiz {
//     // YOUR CODE HERE:
//     //
//     // 1. constructor (questions, timeLimit, timeRemaining)
//     constructor(questions, timeLimit, timeRemaining) {
//         this.questions = questions;
//         this.timeLimit = timeLimit;
//         this.timeRemaining = timeRemaining;
//         this.correctAnswers = 0;
//         this.currentQuestionIndex = 0;
//     };
//     // 2. getQuestion()
//     getCuestion() {
//         //return this.questions[this.currentQuestionIndex];
//         return this.questions[this.currentQuestionIndex];
//     };
    

//     // 3. moveToNextQuestion()
//     moveToNextQuestion() {
//         this.currentQuestionIndex++;
//     };

//     // 4. shuffleQuestions()
//     shuffleQuestions() {
//         for(let i = this.questions.length - 1; i > 0; i--) {
//             // Seleccionar un indice anterior al actual de manera aleatoria
//             const j = Math.floor(Math.random() * (i + 1));
//             // Intercambiar las preguntas en las posiciones i y j
//             [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
//         }
//     };
//     // 5. checkAnswer(answer)
//     checkAnswer(answer) {
//         if (answer === this.questions[this.currentQuestionIndex].answer) {
//             this.correctAnswers++;
//         }
//     }
//     // 6. hasEnded()
//     hasEnded(){
//         if(this.currentQuestionIndex < this.questions.length){
//             return false;
//         }
//         return true;
//     }
// }

class Quiz {
    // Constructor
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;  // Renamed to 'correctAnswers'
        this.currentQuestionIndex = 0;
    }
    // Get current question
    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    // Move to next question
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }
    // Shuffle the questions
    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }
    // Check if the answer is correct
    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++;  // Updated to 'correctAnswers'
        }
    }
    // Check if the quiz has ended
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
    // Filter questions by difficulty
    filterQuestionsByDifficulty(difficulty) {
        // Check if difficulty is a valid number between 1 and 3
        if (difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter(question => question.difficulty === difficulty);
        }
    }
    // Calculate the average difficulty of all questions
    averageDifficulty() {
        const totalDifficulty = this.questions.reduce((sum, question) => sum + question.difficulty, 0);
        return totalDifficulty / this.questions.length;
    }
}

