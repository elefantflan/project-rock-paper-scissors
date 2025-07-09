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
        return getHumanChoice(); // Ask again if blank or canceled
    }

    let a = uans.charAt(0).toUpperCase();
    let b = uans.slice(1).toLowerCase();
    let reform = a + b;

    return reform;
}

function playRound(human, computer) {
    console.log("User: " + humanChoice);
    console.log("Computer: " + computerChoice);

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore += 1;
        return "You Win!";
    } else if (humanChoice === computerChoice) {
        return "Tie!";
    } else {
        computerScore += 1;
        return "You Lose!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        let result = playRound(human, computer);
    }

    if (humanScore > computerScore) {
        return "User is Champion!";
    } else if (computerScore > humanScore) {
        return "Computer is Champion!";
    } else {
        return "It's a Draw!";
    }
}


