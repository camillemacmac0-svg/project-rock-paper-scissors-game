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
