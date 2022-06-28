/* This array is used to set numeric values for the computer choices */
const computerArray = [0, 1, 2];

/* This variable is created using the aforementioned array to produce a random number between 0 and 2 */
let computerNum = Math.floor(Math.random() * computerArray.length);

/* This function expression creates a string from the random number produced from the array */
let computerChoice = function(computerNum) {
    if (computerNum < 1) {
        return "Rock";
    } else if (computerNum > 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

/* This log is used to debug the computerChoice variable and confirm it's giving the correct output. */
console.log(computerChoice(computerNum))

/* User input goes here */
let str = 'pApER'

/* This function expression takes the user input string and formats it to a properly capitalized word. */
let playerChoice = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/* This log is used to debug the playerChoice variable and confirm it's giving the correct output. */
console.log(playerChoice(str))

/* This function plays a round of "Rock, Paper, Scissors" and compares the parameters to determine a winner. */
function playRound (playerChoice, computerChoice) {
        switch(playerChoice + computerChoice) {
            case "RockScissors":
            case "PaperRock":
            case "ScissorsPaper":
                console.log("You win!")
                break;
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                console.log("You lose!")
                break;
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                console.log("It's a tie!")
        }
}

/* This log actually outputs the result of the completed program */
console.log(playRound(playerChoice, computerChoice))


