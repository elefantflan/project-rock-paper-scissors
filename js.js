//~COMPONENTS~
//step 1: create a simple return of computer's answer
//step 2: create a prompt for the user to put their answer
//step 3: create a result string for each round
//step 4: create an output of Computer vs User score for each round
//step 5: make sure game ends after five rounds, string printing final winner
//and their score


//FUNCTION getComputerChoice random choice of rock, paper, or scissors (x)
//ASSIGN VARIABLE rock=0 paper=1 scissor=2 (x)
//RETURN value Math.floor(Math.random()*3) (x)
//RETURN output that's either rock, paper, or scissors (x)


//~User Choice~
//PROMPT user choice 

//NEW FUNCTION getHumanChoice (x)
//PARAMETER = uans VARIABLE with string value (x)
//"Try Again" message for answers other than rock, paper, or scissors !== (x)
//make answers CASE SENSITIVE so it works with any capitalization (x)

//variable computerChoice, humanChoice



//Computer: User:


//FUNCTION playRound (one round)
//VARIABLE put value system on rock, paper, scissors

//SCORE
let humanScore = 0;
let computerScore = 0;

//VARIABLE humanScore computerScore
//add a point when human wins
//add a point when computer wins
//make it so that points add up each round
//make game go on for five rounds
//make sure answer prompt shows up five times
function playGame() {
    for (i=0;i<5;i++){ 
        function playRound (){

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
        
                let uans = prompt("Rock, Paper, or Scissors?");
                
                let a = uans.charAt(0).toUpperCase();
                let b = uans.slice(1).toLowerCase();
                let reform = a+b;
                
                return reform;
            }
        
            let computerChoice = getComputerChoice();
            let humanChoice = getHumanChoice();
            console.log("Computer: " + computerChoice);
            console.log("User: " + humanChoice);
            
            if (computerChoice === "Rock" && humanChoice === "Paper") {
                return("You Win!");
            }
            if (computerChoice === "Paper" && humanChoice ==="Scissors") {
                return("You Win!");
            }
            if(computerChoice === "Scissors" && humanChoice === "Rock") {
                return("You Win!")
            }
            else if (computerChoice === humanChoice) {
                return("Tie!")
            }
            else {
                return("You Lose!");
            }
        }
        round = playRound();
        console.log(round);
    }
}
playGame();