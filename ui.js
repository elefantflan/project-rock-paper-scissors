//UI RPS

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
const score = document.createElement("div");
content.appendChild(score);
const hS = document.createElement("p");
const cS = document.createElement("p");
score.appendChild(hS);
score.appendChild(cS);
hS.textContent = "Human: ";
cS.textContent = "Computer: ";

//FUNCTION ComputerChoice computer = result
const computer = document.createElement("p");
content.appendChild(computer);

function computerChoice () {
    let rangen = Math.floor(Math.random()*3);
    let r = "Rock";
    let p = "Paper";
    let s = "Scissors";
    if (rangen === 0){
        cS.textContent += r;
    }
    if (rangen === 1){
        cS.textContent += p;
    }
    if (rangen === 2){
        cS.textContent += s;
    }
}


//PLAYER
const player = document.createElement("p");
content.appendChild(player);

//when pressed create paragraph that says "Player chose [ANSWER]"

//FUNCTION humanChoice
function humanChoice(){
}

rock.addEventListener ("click",() => {
    hS.textContent += "Rock"
    return computerChoice();
})

paper.addEventListener ("click", () => {
    hS.textContent += "Paper"
    return computerChoice();
})

scissors.addEventListener ("click", () => {
    hS.textContent += "Scissors"
    return computerChoice();
})

//FUNCTION playRound
function playRound() {}