//UI RPS

//VAR rock, paper, scissors
let r = "Rock";
let p = "Paper";
let s = "Scissors";

//SELECT button IDs from HTML
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//VAR content variable
const content = document.createElement("div");
const title = document.createElement("h3");
title.textContent = "RPS League";
content.appendChild(title);
document.body.appendChild(content);

//score
let humanScore = 0;
let computerScore = 0;

//VAR humanChoice computerChoice
let hS = document.createElement("p");
let cS = document.createElement("p");
content.appendChild(hS);
content.appendChild(cS);

//FUNCTION ComputerChoice computer = result
const computer = document.createElement("p");
content.appendChild(computer);

function computerChoice () {
    let rangen = Math.floor(Math.random()*3);
    if (rangen === 0){
        cS.textContent = "Rock";
        const cRock = cS.textContent;
    }
    if (rangen === 1){
        cS.textContent = "Paper";
        const cPaper = cS.textContent;
    }
    if (rangen === 2){
        cS.textContent = "Scissors";
        const cScissors = cS.textContent;
    }
}


//PLAYER
const player = document.createElement("p");
content.appendChild(player);

//when pressed create paragraph that says "Player chose [ANSWER]"

//FUNCTION humanChoice
function humanChoice(){
    
    const hRock = rock.addEventListener ("click",() => {
    hS.textContent = "Rock";
    })

    const hPaper = paper.addEventListener ("click", () => {
    hS.textContent = "Paper"
    })

    const hScissors = scissors.addEventListener ("click", () => {
    hS.textContent = "Scissors";
    })

    
}

humanChoice();

//ROUND
//ANSWERS user vs computer
let user = document.createElement("p");
let comp = document.createElement("p");
content.appendChild(user, comp);
//EQUALIZE H and C answers
//IF H:rock/paper/scissors C:scissors/rock/paper, H win
//TIE if equal value

//CALCULATE point every round 

//ANNOUNCE WINNER after ten rounds