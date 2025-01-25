console.log('hello');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
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