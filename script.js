const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
    { question: "What is the boiling point of water?", options: ["90°C", "80°C", "100°C", "120°C"], answer: "100°C" },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Hemingway", "Dickens", "Orwell"], answer: "Shakespeare" },
    { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: "Tokyo" },
    { question: "What is 5 * 5?", options: ["20", "15", "25", "30"], answer: "25" },
    { question: "What is the smallest prime number?", options: ["1", "2", "3", "5"], answer: "2" },
    { question: "What language is HTML?", options: ["Programming", "Markup", "Scripting", "Style"], answer: "Markup" },
    { question: "What planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("question-number");
    const optionsElement = document.getElementById("options");
    const currentQuestion = quizData[currentQuestionIndex];

    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => checkAnswer(button, option);
        optionsElement.appendChild(button);
    });

    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(button, selectedOption) {
    const isCorrect = selectedOption === quizData[currentQuestionIndex].answer;
    button.classList.add(isCorrect ? "correct" : "incorrect");

    if (isCorrect) score++;

    Array.from(document.getElementsByClassName("option")).forEach(optionButton => {
        optionButton.disabled = true;
    });

    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML = `
            <h1>Quiz Completed!</h1>
            <p>Your score: ${score} out of ${quizData.length}</p>
        `;
    }
}

window.onload = loadQuestion;
