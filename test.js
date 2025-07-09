const container = document.createElement("div");
document.body.appendChild(container)

//header
const title = document.createElement("h1")
title.textContent = "Rock Paper Scissors GO"
container.appendChild(title);

//answers
const choices = ["Rock", "Paper", "Scissors"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissors");
const buttons = [rock, paper, scissors];

//score
let humanScore=0;
let computerScore=0
const score = document.createElement("p")
container.appendChild(score);
score.textContent = "You: " + humanScore + " Me: " + computerScore;

//round
const round = document.createElement("p");
container.appendChild(round);

//final
const final = document.createElement("p");
container.appendChild(final);

//user
function getHumanChoice()
    {
        rock.addEventListener("click", () => 
            {
                return "Rock";
            })
        paper.addEventListener("click", () => 
            {
                return "Paper";
            })
        scissors.addEventListener("click", () => 
            {
                return "Scissors";
            })
    }

//computer
function getComputerChoice()
    {
        buttons.forEach((button) =>
            {
                button.addEventListener("click", ()=>
                    {
                        let computerChoice = choices[Math.floor(Math.random()*3)];
                        return computerChoice;
                    }
                )
            }
        )
    }

function testing() 
    {
        return "Hello World"
    }

//game
function playRound (human, computer)
    {
        if(human===computer)
            {
                return "Draw"
            }
        else if(human===0 && computer===0) 
        {

        }
        else if (human==="Rock" && computer==="Scissors"||
                 human==="Paper" && computer==="Rock"||
                 human==="Scissors" && computer==="Paper")
            {
                humanScore++;
            }
        else 
            {
                computerScore++;
            }
    }


buttons.forEach((button)=>
    {
        button.addEventListener("click", ()=>
            {
                let humanChoice = getHumanChoice();
                let computerChoice = getComputerChoice();
                playRound(humanChoice, computerChoice);
            }
        )

    }
)

//test
const test = document.createElement("div")
container.appendChild(test);
test.textContent = testing() + " " + getHumanChoice() + " " + getComputerChoice();