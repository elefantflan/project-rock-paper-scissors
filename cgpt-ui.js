// Game options
const choices = ["Rock", "Paper", "Scissors"];

// Scores
let humanScore = 0;
let computerScore = 0;

// Create layout
const content = document.createElement("div");
const title = document.createElement("h3");
title.textContent = "RPS League";
document.body.appendChild(content);
content.appendChild(title);

// Score display elements
const hS = document.createElement("p");
const cS = document.createElement("p");
const score = document.createElement("p");
const final = document.createElement("p");

content.appendChild(hS);
content.appendChild(cS);
content.appendChild(score);
content.appendChild(final);

// Select buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = [rock, paper, scissors];

// Play one round
function playRound(human, computer) {
    if (human === computer) {
        return "Tie!";
    } else if (
        (human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

// Handle game logic on button click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent;
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        hS.textContent = "You chose: " + humanChoice;
        cS.textContent = "Computer chose: " + computerChoice;

        const result = playRound(humanChoice, computerChoice);

        score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
        final.textContent = result;

        // Optional: end game at 5 points
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                final.textContent = "🎉 You win the game!";
            } else {
                final.textContent = "💻 Computer wins the game!";
            }

            // Disable buttons
            buttons.forEach(btn => btn.disabled = true);
        }
    });
});
