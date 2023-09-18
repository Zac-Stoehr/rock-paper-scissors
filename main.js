let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3) + 1;
    switch(computer) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    } 
} //console.log(getComputerChoice());
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return(`You tied! You both picked ${playerSelection}`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return("You lost! Paper covers Rock!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return("You win! Rock crushes Scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return("You win! Paper covers Rock");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return("You tied!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return("You lose! Scissors cut Paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return("You lose! Rock crushes Scissors");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return("You win! Scissors cut paper");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return("You tied!");
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What will you throw?", "Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(1, playRound(playerSelection, computerSelection));
        (playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return("You beat the coputer!");
    } else if (computerScore > playerScore) {
        return("Computer is smarter than you!");
    } else {
        return("You Tied! What a boring result!");
    }
}
console.log(game());