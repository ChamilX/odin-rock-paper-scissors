# Project: Rock, Paper & Scissors (The Odin Project)

## Update (20 May 2024)

Added some DOM manipulation and some basic UI, now instead of using the console, you use buttons to select your answer and the score displays on the page. I also removed the `playGame()` function, changed the `playRound()` function, the code was too long before :sweat_smile:, and added the `gameOver()` function to handle the score conditions.

### playRound() Before

```javascript

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

```

### playRound() After

```javascript

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

```
***Sheesh!*** *definitely more compact!*

## Description

For this project, i'm tasked with creating the game Rock Paper Scissors using JavaScript. This game will be played entirely in the console and will receive inputs trough prompts.

## License

This project is licensed under the [MIT License](./LICENSE).

