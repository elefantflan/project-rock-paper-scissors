const buttons = document.querySelectorAll('button');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

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
        return "rock";
    }
    else if(randomNumber===paper){
        return "paper";
    }
    else if (randomNumber===scissors){
        return "scissors";
    }
}


function userChoice(){
    const userRock = rock.addEventListener('click', ()=>{
        return "rock"
    });

    const userPaper = paper.addEventListener('click', ()=>{
        return "paper"
    });

    const userScissors = scissors.addEventListener('click', ()=>{
        return "scissors"
    });
}

function playGame(computer, user){
    computer = computerChoice();
    user = userChoice();
    if (computer === user){
        divResult.textContent="It's a tie";
    }
    else if(computer === "rock" && user === "paper" ||
            computer === "paper" && user === "scissors"||
            computer === "scissors" && user === "rock"){
        divResult.textContent="You win!";
    }
}

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        return playGame();
    })
})