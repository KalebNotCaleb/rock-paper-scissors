const computerOptions = ["Rock", "Paper", "Scissors"];

let computerChoice = Math.floor(Math.random() * computerOptions.length);

let playerChoice = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}



