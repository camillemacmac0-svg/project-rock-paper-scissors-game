let userScore = 0;
let computerScore = 0;
const WIN_SCORE = 10; // Change to 3 or 10 if you want
let gameEnded = false;

function playGame(userChoice) {
    if (gameEnded) return;

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("player-choice").innerHTML =
        "You: <span>" + userChoice + "</span>";

    document.getElementById("computer-choice").innerHTML =
        "Computer: <span>" + computerChoice + "</span>";

    let result = "";
    const resultEl = document.getElementById("result");
    resultEl.className = "";

    if (userChoice === computerChoice) {
        result = "IT'S A TIE! 🤝";
        resultEl.classList.add("tie");
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "YOU WIN! 🎉";
        userScore++;
        resultEl.classList.add("win");
    } 
    else {
        result = "YOU LOSE! 😢";
        computerScore++;
        resultEl.classList.add("lose");
    }

    resultEl.textContent = result;
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;

    checkGameEnd();
}

function checkGameEnd() {
    const resultEl = document.getElementById("result");
    const choiceArea = document.getElementById("choice-buttons");

    if (userScore >= WIN_SCORE) {
        gameEnded = true;
        resultEl.textContent = "🏆 GAME OVER! YOU WON! 🏆";
        resultEl.className = "final-win";
        choiceArea.classList.add("disabled");
    } 
    else if (computerScore >= WIN_SCORE) {
        gameEnded = true;
        resultEl.textContent = "💀 GAME OVER! COMPUTER WON! 💀";
        resultEl.className = "final-lose";
        choiceArea.classList.add("disabled");
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    gameEnded = false;

    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("player-choice").innerHTML = "You: <span>-</span>";
    document.getElementById("computer-choice").innerHTML = "Computer: <span>-</span>";
    
    const resultEl = document.getElementById("result");
    resultEl.textContent = "Choose Your Move!";
    resultEl.className = "";

    document.getElementById("choice-buttons").classList.remove("disabled");
}
