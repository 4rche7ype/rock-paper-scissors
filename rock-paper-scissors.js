console.log('hello');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber;
    let comsPick = " ";

    do {
        randomNumber = Math.floor(Math.random() * 10);
    } while (randomNumber == 0);

    if (randomNumber >= 1 && randomNumber <= 3) {
        comsPick = "rock";
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        comsPick = "paper";
    } else {
        comsPick = "scissors";
    }

    return (comsPick);
}

function getHumanChoice() {
    let userInput;
    do {
        userInput = prompt('Rock, Paper, or Scissors?');
        userInput = userInput.toLowerCase();
    } while (userInput != "rock" && userInput != "paper" && userInput != "scissors");
    
    return (userInput);
}