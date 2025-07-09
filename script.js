//layout
const container = document.querySelector(".container");

//result
let playResult = document.createElement("div");
playResult.classList.add("result");
container.appendChild(playResult);
let result = ""
playResult.textContent = result;

//get user interaction
const buttons = document.querySelectorAll("button");

function playUser() 
    {
        //user
        const rock = document.querySelector("#rock");
        const paper = document.querySelector("#paper");
        const scissors = document.querySelector("#scissors");
        
            rock.addEventListener(("click"), ()=>
                {
                    return "Rock"
                }
            )
            paper.addEventListener(("click"), ()=>
                {
                    return "Paper"

                }
            )
            scissors.addEventListener(("click"), ()=>
                {
                    return "Scissor"
                }
            )
    }


function playComputer()
    {
        //computer
        buttons.forEach((button)=>
            {
                button.addEventListener(("click"), ()=>
                    {
                        let choices = ["Rock", "Paper", "Scissors"];
                        let randomGenerator = choices[Math.floor(Math.random()*3)];
                        console.log(typeof playComputer());
                        return randomGenerator;
                    }
                )
            }
        )
    }