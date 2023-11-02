console.log("Hello World")
// Function to get the computer's choice (Rock, Paper, or Scissors)
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();  
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors)`);

        if (!playerSelection) {
            console.log("Invalid input. Round skipped.");
            continue;
        }

        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

game();
