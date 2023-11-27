let userInput = prompt("Enter your Choice!").toLocaleLowerCase();

console.log(userInput);


let computerChoice = function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];

    let randomNumber = Math.floor(Math.random() * 3)

    return computerChoice[randomNumber].toLowerCase();
}
computerChoice();

console.log(computerChoice);

function comparingFunction(computerChoice, userInput) {
    if (computerChoice == "rock" && userInput == "scissor") {
        console.log("Computer Wins!" + computerChoice + "wins against" + userInput)
    } else if (computerChoice == "rock" && userInput == "rock") {
        console.log("Its a tie")
    } else if (computerChoice == "rock" && userInput == "paper") {
        console.log("Computer loses!" + computerChoice + "loses against" + userInput)
    }
    else {
        console.log("What did you chose? Choose Paper, Scissor or Rock!")
    }
}