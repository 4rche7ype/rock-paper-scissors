let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("you: " + humanScore + " computer: " + computerScore);

function playRound(humanChoice, computerChoice) {
    const human = humanChoice;
    const computer = computerChoice;

    switch (human) {
        case "rock":
            if (computer === 'paper') {
              console.log("Lost. Paper beats Rock.");
              computerScore++; 
            } else if (computer == 'scissors') {
                console.log("Winner. Rock beats Scissors.");
                humanScore++;
            } else {
                console.log("Draw. No points awarded.");
            }
            break;
        case "paper":
            if (computer == "rock") {
                console.log("Winner. Paper beats Rock.");
                humanScore++;
            } else if (computer == "scissors") {
                console.log("Lost. Scissors beats Paper.");
                computerScore++;
            } else {
                console.log("Draw. No points awarded.");
            }
            break;
        case "scissors":
            if (computer == "rock") {
                console.log("Lost. Rock beats Scissors.");
                computerScore++;
            } else if (computer == "paper") {
                console.log("Winner. Scissors beat Paper.");
                humanScore++;
            } else {
                console.log("Draw. No points awarded.");
            }
            break;
    }
    
}

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
