const computerArray = ["Rock", "Paper", "Scissors"];

let computerNum = Math.floor(Math.random() * computerArray.length);

let computerChoice = function(computerNum) {
    if (computerNum < 1) {
        return "Rock";
    } else if (computerNum > 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

console.log(computerChoice(computerNum))

let str = 'pApER'

let playerChoice = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(playerChoice(str))

function playRound (playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors.");
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Rock loses to Paper.");
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock!");
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Paper loses to Scissors.");
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beat Paper!");
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Scissors lose to Rock.");
    } else {
        console.log("You tied. Try again.")
    }       
}

console.log(playRound(playerChoice, computerChoice))


