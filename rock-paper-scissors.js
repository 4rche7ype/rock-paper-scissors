let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
        
function playRound(choice) {
    let player = choice.target.id;
    const computer = getComputerChoice();
    let scores = document.createElement("p");
    let roundResult = document.createElement("p");
    
    results.textContent = "";

    switch (player) {
        case "rock":
            if (computer == 'paper') {
                roundResult.textContent = "Lost. Paper beats Rock.";
                computerScore++; 
            } else if (computer == 'scissors') {
                roundResult.textContent = "Winner. Rock beats Scissors.";
                playerScore++;
            } else {
                roundResult.textContent = "Draw. No points awarded.";
            }
                break;
        case "paper":
            if (computer == "rock") {
                roundResult.textContent = "Winner. Paper beats Rock.";
                playerScore++;
            } else if (computer == "scissors") {
                roundResult.textContent = "Lost. Scissors beats Paper.";
                computerScore++;
            } else {
                roundResult.textContent = "Draw. No points awarded.";
            }
                break;
        case "scissors":
            if (computer == "rock") {
                roundResult.textContent = "Lost. Rock beats Scissors.";
                computerScore++;
            } else if (computer == "paper") {
                roundResult.textContent = "Winner. Scissors beat Paper.";
                playerScore++;
            } else {
                roundResult.textContent = "Draw. No points awarded.";
            }
                break;
    }
    
    if (playerScore == 5) {
        roundResult.textContent = "Max points reached. Player Wins! Final Scores - Player: " + playerScore + " Computer: " + computerScore;        
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        roundResult.textContent = "Max points reached. Computer Wins! Final Scores - Player: " + playerScore + " Computer: " + computerScore;     
        playerScore = 0;
        computerScore = 0;
    }
    
    scores.textContent = "Player: " + playerScore + " Computer: " + computerScore;

    results.appendChild(roundResult);
    results.appendChild(scores);
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

