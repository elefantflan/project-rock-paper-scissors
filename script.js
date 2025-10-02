const buttons = document.querySelectorAll('button');

const divComputer = document.querySelector('.computer');
const divUser = document.querySelector('.user');
const divResult = document.querySelector('.result');

divUser.textContent="";

function computerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1;
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    if(randomNumber===rock){
        divComputer.textContent="Rock"
    }
    else if(randomNumber===paper){
        divComputer.textContent="Paper"
    }
    else if (randomNumber===scissors){
        divComputer.textContent="Scissors"
    }
}

function userChoice(){
    buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        computerChoice();
        divUser.textContent=button.textContent
        divResult.textContent=getResult();
    })
 })
} 


function getResult(){
    let userChoice=divUser.textContent;
    let computerChoice=divComputer.textContent;
        // tie
    if(userChoice===computerChoice){
        return "Tie!"
    }
    // win
    else if (userChoice==="Rock" && computerChoice ==="Scissors"||
            userChoice==="Paper" && computerChoice ==="Rock"||
            userChoice==="Scissors" && computerChoice === "Paper"){
        return "User Wins"
    }
    // lose
    else if (userChoice==="Rock" && computerChoice ==="Paper"||
            userChoice==="Paper" && computerChoice ==="Scissors"||
            userChoice==="Scissors" && computerChoice === "Rock"){
        return "Computer Wins"
    }
}

console.log(userChoice())