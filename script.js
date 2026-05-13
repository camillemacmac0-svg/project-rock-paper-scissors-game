let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("player-choice").textContent =
        "You: " + userChoice;

document.getElementById("computer-choice").textContent =
        "Computer: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "Scissors") ||
        (userChoice === "paper" && computerChoice === "Rock") ||
        (userChoice === "scissors" && computerChoice === "Paper")
    ) {
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

