function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Score: ${humanScore} to ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You Won!");
    } else if (computerScore > humanScore) {
        console.log("You Lost!");
    } else {
        console.log("You Tied!");
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            switch (computerChoice) {
                case "rock":
                    console.log("You tie! Rock ties Rock");
                    break;
                case "scissors":
                    humanScore++;
                    console.log("You win! Rock beats Scissors");
                    break;
                case "paper":
                    computerScore++
                    console.log("You lose! Paper beats Rock");
                    break;
            }
        } else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    console.log("You win! Paper beats Rock");
                    break;
                case "scissors":
                    computerScore++;
                    console.log("You lose! Scissors beats Paper");
                    break;
                case "paper":
                    console.log("You tie! Paper ties Paper");
                    break;
            }
        } else if (humanChoice === "scissors") {
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    console.log("You lose! Rock beats scissors");
                    break;
                case "scissors":
                    console.log("You tie! Scissors ties Scissors");
                    break;
                case "paper":
                    humanScore++
                    console.log("You win! Scissors beats Paper");
                    break;
            }
        } else {
            console.log("invalid round");
        }
    }
}

function getComputerChoice() {
    choice = generateRandomNumber(3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    } else {
        return "choice out of bounds";
    }
}

function getHumanChoice() {
    choice = window.prompt("Choose your move:\nRock, Paper, or Scissors?");
    return standardizeHumanChoice(choice);
}

function generateRandomNumber(max = 3) {
    return Math.floor(Math.random() * max);
}

function standardizeHumanChoice(choice) {
    return choice.toLowerCase();
}

playGame();