let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("player-choice").textContent =
        "You chose: " + userChoice;

document.getElementById("computer-choice").textContent =
        "Computer chose: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
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

