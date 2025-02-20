let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

console.log("you: " + playerScore + " computer: " + computerScore);
        
function playRound(choice) {
    let player = choice.target.id;
    const computer = getComputerChoice();

    switch (player) {
        case "rock":
            if (computer == 'paper') {
                console.log("Lost. Paper beats Rock.");
                computerScore++; 
            } else if (computer == 'scissors') {
                console.log("Winner. Rock beats Scissors.");
                playerScore++;
            } else {
                console.log("Draw. No points awarded.");
            }
                break;
        case "paper":
            if (computer == "rock") {
                console.log("Winner. Paper beats Rock.");
                playerScore++;
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
                playerScore++;
            } else {
                console.log("Draw. No points awarded.");
            }
                break;
    }
    
    if (playerScore == 5) {
        console.log("Max points reached. Player Wins!");
    } else if (computerScore == 5) {
        console.log("Max points reached. Computer Wins!");
    }
    
}

function getComputerChoice() {
    let randomNumber;
    let comsPick;
    
    //to keep odds at 1/3 each removed zero
    //only 1 - 9 is a possible number
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

