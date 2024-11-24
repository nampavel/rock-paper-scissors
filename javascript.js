//STEP 1: the project setup

//STEP 2: function to randomly return rock paper or scissors
let computerChoice;
let humanChoice;
let computerRandomInteger;

function getComputerChoice (min, max) {
    //returns an integer number from x to y; 
    min = Math.ceil(1);
    max = Math.floor(3);
    computerRandomInteger = Math.floor(Math.random() * (max - min + 1)) + min;


    //make the function returns string options of rock/paper/scissors instead of number
    if (computerRandomInteger === 1) {
        computerChoice = "rock";
    } else if (computerRandomInteger === 2) {
        computerChoice = "paper";
    } else if (computerRandomInteger === 3) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

//STEP 3: ask a person for an answer, store it, return it
function getHumanChoice () {
    humanChoice = prompt("type your choice");
    return humanChoice;
}

//STEP 4: Players score variables
let humanScore = 0;
let computerScore = 0;

//STEP 5: function to play a single round


//STEP 6: function to play 5 rounds
function playGame() {
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();

    function playRound (humanChoice, computerChoice) {
        console.log("computer: " + computerChoice);
        console.log("you: " + humanChoice);
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("You got a draw");
            } else if (computerChoice === "paper") {
                console.log("Computer won, paper beats rock!")
                computerScore = computerScore + 1;
            } else {
                console.log("you won!")
                humanScore = humanScore + 1;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "paper") {
                console.log("You got a draw");
            } else if (computerChoice === "scissors") {
                console.log("Computer won, scissors beats paper!")
            } else {
                console.log("you won!")
                humanScore = humanScore + 1;
            }
        } else {
            if (computerChoice === "scissors") {
                console.log("You got a draw");
            } else if (computerChoice === "rock") {
                console.log("Computer won, rock beats scissors!")
                computerScore = computerScore + 1;
            } else {
                console.log("you won!")
                humanScore = humanScore + 1;
            }
        }
        console.log("human: " + humanScore + "   computer: " + computerScore);
    }

    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
}


playGame();