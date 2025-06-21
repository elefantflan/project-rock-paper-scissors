let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let uans = prompt("Rock, Paper, or Scissors?");
    if (!uans) {
        return getHumanChoice();
    }
    let a = uans.charAt(0).toUpperCase();
    let b = uans.slice(1).toLowerCase();
    let reform = a + b;
    return reform;
}



function playRound(humanChoice, computerChoice) {
    console.log("Computer: " + computerChoice);
    console.log("User: " + humanChoice);

    if (
        (computerChoice === "Rock" && humanChoice === "Paper") ||
        (computerChoice === "Paper" && humanChoice === "Scissors") ||
        (computerChoice === "Scissors" && humanChoice === "Rock")
    ) {
        humanScore = humanScore + 1;
        return "You Win!";
    } else if (computerChoice === humanChoice) {
        return "Tie!";
    } else {
        computerScore = computerScore + 1;
        return "You Lose!";
    }
}

//global variable parameters for playRound
function playGame() {
    for (let i = 0; i < 5; i++) {
        let result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log("Score - User: " + humanScore + " | Computer: " + computerScore);
    }

    if (humanScore > computerScore) {
        return "User is Champion!";
    } else if (computerScore > humanScore) {
        return "Computer is Champion!";
    } else {
        return "It's a Draw!";
    }
}

let rps = playGame();
console.log(rps);