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

function generateRandomNumber(max = 3) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    choice = window.prompt("Choose your move:\nRock, Paper, or Scissors?");
    return standardizeHumanChoice(choice);
}

function standardizeHumanChoice(choice) {
    return choice.toLowerCase();
}

console.log(getComputerChoice());
console.log(getHumanChoice());