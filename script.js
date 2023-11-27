
/* Main Function */

let computerPoints = 0;
let playerPoints = 0;

function comparingFunction(computerChoice, userInput) {

    if (computerChoice == "rock" && userInput == "scissor") {
        console.log("Computer Wins!" + computerChoice + "wins against" + userInput)
        computerPoints++;
    } else if (computerChoice == "rock" && userInput == "rock") {
        console.log("Its a tie")
    } else if (computerChoice == "rock" && userInput == "paper") {
        console.log("Computer loses!" + computerChoice + "loses against" + userInput)
        playerPoints++;
    } else if (computerChoice == "scissor" && userInput == "rock") {
        console.log("Computer loses!" + computerChoice + "loses against" + userInput)
        playerPoints++;
    } else if (computerChoice == "scissor" && userInput == "paper") {
        console.log("Computer wins!" + computerChoice + "wins against" + userInput)
        computerPoints++;
    } else if (computerChoice == "scissor" && userInput == "scissor") {
        console.log("Its a tie!")
    } else if (computerChoice == "paper" && userInput == "scissor") {
        console.log("Computer loses!" + computerChoice + "loses against" + userInput)
        playerPoints++;
    } else if (computerChoice == "paper" && userInput == "paper") {
        console.log("Its a tie")
    } else if (computerChoice == "paper" && userInput == "rock") {
        console.log("Computer wins! " + computerChoice + "wins against " + userInput)
        computerPoints++;
    }
    else {
        console.log("What did you chose? Choose Paper, Scissor or Rock!")
    }


}


function game() {

    for (let index = 0; index <= 5; index++) {

        /* Userinput is gernerated and logged into userInput */

        let userInput = prompt("Enter your Choice!").toLocaleLowerCase();

        console.log("User chose:" + userInput);

        /* Computerchoice is generated and logged into ComputerFinalChoice */

        let computerChoice = function getComputerChoice() {
            let computerChoice = ["Rock", "Paper", "Scissor"];

            let randomNumber = Math.floor(Math.random() * 3)

            return computerChoice[randomNumber].toLowerCase();
        }

        let ComputerFinalChoice = computerChoice();

        console.log("Computer chose: " + ComputerFinalChoice);

        console.log(comparingFunction(ComputerFinalChoice, userInput));

        console.log("Current score - Player: " + playerPoints + ", Computer: " + computerPoints);
    }

}


game();




