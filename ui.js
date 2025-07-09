//UI RPS

//VAR rock, paper, scissors
let r = "Rock";
let p = "Paper";
let s = "Scissors";

//SELECT button IDs from HTML
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//CONST content
const content = document.createElement("div");
const title = document.createElement("h3");
title.textContent = "RPS League";
content.appendChild(title);
document.body.appendChild(content);

//VAR humanChoice computerChoice
let hS = document.createElement("p");
let cS = document.createElement("p");
content.appendChild(hS);
content.appendChild(cS);

//FUNCTION humanChoice
function humanChoice(){
    
    rock.addEventListener ("click",() => {
    hS.textContent = "Rock";
    })

    paper.addEventListener ("click", () => {
    hS.textContent = "Paper"
    })

    scissors.addEventListener ("click", () => {
    hS.textContent = "Scissors";
    })
}

//FUNCTION ComputerChoice computer = result
const computer = document.createElement("p");
content.appendChild(computer);

function computerChoice () {

    //GAME START trigger user press button
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let rangen = Math.floor(Math.random()*3);
    
            if (rangen === 0){
                cS.textContent = "Rock";
            }
            if (rangen === 1){
                cS.textContent = "Paper";
            }
            if (rangen === 2){
                cS.textContent = "Scissors";
            }
        })
        });
    }
   
    

//PLAYER
const player = document.createElement("p");
content.appendChild(player);

//when pressed create paragraph that says "Player chose [ANSWER]"


//RESULT div container
const results = document.createElement("div")
content.appendChild(results);
//SCORE paragraph
const score = document.createElement("p");
results.appendChild(score);

//LET score
let humanScore=0;
let computerScore=0;

//FINAL paragraph
const final = document.createElement("p");
results.appendChild(final);

//FUNCTION playRound()
function playRound(human, computer) {

    //compare result
    if (
        (human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")
    ) {
        humanScore += 1;
    } else if (human === computer) {
        return "Tie!";
    } else {
        computerScore += 1;
    }
}

//FUNCTION playGame: play five rounds
function playGame() {
    //five round loop
    for (let i = 0; i < 5; i++) {
        let human = humanChoice();
        let computer = computerChoice();
        let result = playRound(human, computer);
    }

    //score keep
    score.textContent = "You: " + humanScore + " Computer: " + computerScore;

    //scorekeeping
    if (humanScore > computerScore) {
        final.textContent="You Win!";
    } else if (computerScore > humanScore) {
        final.textContent="Computer Wins!";
    } else {
        final.textContent="It's a Draw!";
    }
    
}

playGame();