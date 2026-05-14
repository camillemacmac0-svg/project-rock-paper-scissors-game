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

    
        result = "You Win!";
        userScore++;
    } else {
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("result").textContent = result;

    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;

}
function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("player-choice").textContent = "You:";
    document.getElementById("computer-choice").textContent = "Computer:";
    document.getElementById("result").textContent = "Result";
}

