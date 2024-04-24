
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    if (choice === 1) {
        return "ROCK";
    } else if (choice === 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let input = prompt("Write your choice: rock, paper or scissors");
    input = input.toUpperCase();
    if (input === "ROCK") {
        return "ROCK";
    } else if (input === "PAPER") {
        return "PAPER";
    } else if (input === "SCISSORS" || input === "SCISSOR") {
        return "SCISSORS";
    } else {
        return null;
    }
}



function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("Computer: " + computerSelection);
    console.log("You: " + humanSelection);

    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "ROCK":
                if (computerChoice === "ROCK") {
                    console.log("It's a tie!");
                } else if (computerChoice === "PAPER") {
                    console.log("You lose! Paper beats Rock");
                    return computerScore++;
                } else {
                    console.log("You win! Rock beats Scissors");
                    return humanScore++;
                }
                break;
            case "PAPER":
                if (computerChoice === "ROCK") {
                    console.log("You win! Paper beats Rock");
                    return humanScore++;
                } else if (computerChoice === "PAPER") {
                    console.log("It's a tie!");
                } else {
                    console.log("You lose! Scissors beat Paper");
                    return computerScore++;
                }
                break;
            case "SCISSORS":
                if (computerChoice === "ROCK") {
                    console.log("You lose! Rock beats Scissors");
                    return computerScore++;
                } else if (computerChoice === "PAPER") {
                    console.log("You win! Scissors beats Paper");
                    return humanScore++;
                } else {
                    console.log("It's a tie!");
                }
                break;
            default:
                console.log("An incorrect value was entered!");
        }
    }
    
    playRound(humanSelection, computerSelection);
    console.log("Score: Computer - " + computerScore + " You - " + humanScore);
}

for (let i = 0; i < 5; i++) {
    playGame();
}

if (humanScore > computerScore) {
    console.log("You win the game! Final score: Computer - " + computerScore + " You - " + humanScore);
} else if (humanScore === computerScore) {
    console.log("The game ended in a tie! Final score: Computer - " + computerScore + " You - " + humanScore);
} else {
    console.log("You lost the game, better luck next time! Final score: Computer - " + computerScore + " You - " + humanScore);
}



