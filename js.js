
//GLOBAL VAR score starts at 0
let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (i=0;i<5;i++){ 
        function playRound (){
            //assign rock paper scissor to 0,1,2 respectively
            function getComputerChoice() {
                let rock = "Rock";
                let paper = "Paper";
                let scissors = "Scissors";
                let number = Math.floor(Math.random()*3);
                if (number===0){
                    return rock;
                } else if (number===1){
                    return paper;
                } else if (number===2){
                    return scissors;
                }
            }
        
            function getHumanChoice() {
                //user answer
                let uans = prompt("Rock, Paper, or Scissors?");
                
                //reformat answer to first letter capital rest lower case
                let a = uans.charAt(0).toUpperCase();
                let b = uans.slice(1).toLowerCase();
                let reform = a+b;
                
                return reform;
            }
            //GLOBAL VAR for functions getComputer,getHuman
            let computerChoice = getComputerChoice();
            let humanChoice = getHumanChoice();
            //CHOICE RESULT
            console.log("Computer: " + computerChoice);
            console.log("User: " + humanChoice);
            
            if (computerChoice === "Rock" && humanChoice === "Paper") {
                humanScore += 1;
                return("You Win!");
            }
            if (computerChoice === "Paper" && humanChoice ==="Scissors") {
                humanScore += 1;
                return("You Win!");
            }
            if(computerChoice === "Scissors" && humanChoice === "Rock") {
                humanScore += 1;
                return("You Win!")
            }
            else if (computerChoice === humanChoice) {
                return("Tie!")
            }
            else {
                computerScore += 1;
                return("You Lose!");
            }
            
        }
    //VAR for function playRound
    //LOG result
    round = playRound();
    console.log(round);
    console.log("User: " + humanScore +" Computer: " + computerScore);

    }
    if (humanScore > computerScore) {
        return "User is Champion!"
    }
    else {
        return "Computer is Champion!" 
    }
}
rps = playGame();
console.log(rps);



//UI
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener(playRound);
paper.addEventListener(playRound);
scissors.addEventListener(playRound);