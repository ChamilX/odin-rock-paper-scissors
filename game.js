let humanScore = 0;
let computerScore = 0;
let gameEnd = false;
const endScore = 5;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resetButton = document.querySelector(".reset");
const scoreMessage = document.querySelector(".score-msg");
const message = document.querySelector(".message");

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

rockButton.addEventListener("click", function() {
    if (!gameEnd) {
        playRound("ROCK", getComputerChoice());
    }
    else gameOver();
})

paperButton.addEventListener("click", function() {
    if (!gameEnd) { 
        playRound("PAPER", getComputerChoice());
    }
    else gameOver();
})

scissorsButton.addEventListener("click", function() {
    if (!gameEnd) {
        playRound("SCISSORS", getComputerChoice());
    }
    else gameOver();
})

resetButton.addEventListener("click", function() {
    humanScore = 0;
    computerScore = 0;
    gameEnd = false;
    message.textContent = "";
    scoreMessage.textContent = "You: " + humanScore + "      Com: " + computerScore;
})

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "PAPER" && computerChoice === "ROCK" 
    || humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore++;
        message.textContent = "You win! " + humanChoice + " beats " + computerChoice;
    } 
    else if (humanChoice === computerChoice) {
        message.textContent = "Tied!"
    } else {
        computerScore++;
        message.textContent = "You lose! " + humanChoice + " loses to " + computerChoice;
    }
    scoreMessage.textContent = "You: " + humanScore + "      Com: " + computerScore;
    gameOver();
}

function gameOver() {
    if (humanScore === endScore) {
        message.textContent = "You win the game!";
        gameEnd = true;
    } else if (computerScore === endScore) {
        message.textContent = "You lost the game, better luck next time!";
        gameEnd = true;
    } else if (humanScore && computerScore === endScore) {
        message.textContent = "The game ended in a tie!";
        gameEnd = true;
    } else gameEnd = false;
}