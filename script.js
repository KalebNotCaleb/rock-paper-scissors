let playPrompt = prompt("Pick your weapon: rock, paper, or scissors?");

let playerChoice = playPrompt.charAt(0).toUpperCase() + playPrompt.slice(1).toLowerCase();

let computerChoice = Math.floor(Math.random() * 3);

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === 2 || playerChoice === "Paper" && computerChoice === 0 || playerChoice === "Scissors" && computerChoice === 1) {
        return `You win! ${playerChoice} beats ${computerChoice}!`;
    } else if (playerChoice === "Rock" && computerChoice === 1 || playerChoice === "Paper" && computerChoice === 2 || playerChoice === "Scissors" && computerChoice === 0) {
        return `You lose! ${playerChoice} loses to ${computerChoice}!`;
    } else {
        return "It's a tie!";
    }
}

console.log(playRound(playerChoice, computerChoice))

