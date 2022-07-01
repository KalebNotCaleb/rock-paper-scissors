let playerScore = parseInt(0);
let computerScore = parseInt(0);

for(let i=0; i<100; i++) {
    let playPrompt = prompt("Pick your weapon: rock, paper, or scissors?");

    let playerChoice = playPrompt.charAt(0).toUpperCase() + playPrompt.slice(1).toLowerCase();

    let computerNum = Math.floor(Math.random() * 3);

    function compLogic(computerNum) {
        if (computerNum === 0) {
            return "Rock";
        } else if (computerNum === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    let computerChoice = compLogic(computerNum);

    function playRound(playerChoice, computerChoice) {
        if (playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Paper" && computerChoice === "Rock" || playerChoice === "Scissors" && computerChoice === "Paper") {
            playerScore++;
            return `You win! ${playerChoice} beats ${computerChoice}!`;
        } else if (playerChoice === "Rock" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Scissors" || playerChoice === "Scissors" && computerChoice === "Rock") {
            computerScore++;
            return `You lose! ${playerChoice} loses to ${computerChoice}!`;
        } else {
            return "It's a tie!";
        }
    }

   
    console.log(playRound(playerChoice, computerChoice));
    console.log(`Your score is ${playerScore}!`);
    console.log(`The computer's score is ${computerScore}!`);

    if (computerScore === 5 || playerScore === 5) {
        break;
    }
}


