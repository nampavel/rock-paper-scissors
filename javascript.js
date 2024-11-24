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

//STEP 5: creating elements of the result container
const gameResultsContainer = document.querySelector("#game-results-container");
const computerSelectionPara = document.createElement("p");
const humanSelectionPara = document.createElement("p");
const para = document.createElement("p");
const scorePara = document.createElement("p");
const finalResultPara = document.createElement("p");


//STEP 6: function to play 5 rounds
function playGame() {
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();

    function playRound (humanChoice, computerChoice) {
        computerSelectionPara.textContent = "Computer: " + computerChoice;
        gameResultsContainer.appendChild(computerSelectionPara);
        humanSelectionPara.textContent = "You: " + humanChoice;
        gameResultsContainer.appendChild(humanSelectionPara);
        console.log("computer: " + computerChoice);
        console.log("you: " + humanChoice);
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                para.textContent = "You got a draw";
                gameResultsContainer.appendChild(para);
                console.log("You got a draw");
            } else if (computerChoice === "paper") {
                para.textContent = "Computer won, paper beats rock!";
                gameResultsContainer.appendChild(para);
                console.log("Computer won, paper beats rock!")
                computerScore = computerScore + 1;
            } else {
                para.textContent = "You won!";
                gameResultsContainer.appendChild(para);
                console.log("you won!")
                humanScore = humanScore + 1;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "paper") {
                para.textContent = "You got a draw!";
                gameResultsContainer.appendChild(para);
                console.log("You got a draw");
            } else if (computerChoice === "scissors") {
                para.textContent = "Computer won, scissors beats paper!";
                gameResultsContainer.appendChild(para);
                console.log("Computer won, scissors beats paper!")
            } else {
                para.textContent = "You won!";
                gameResultsContainer.appendChild(para);
                console.log("you won!")
                humanScore = humanScore + 1;
            }
        } else {
            if (computerChoice === "scissors") {
                para.textContent = "You got a draw!";
                gameResultsContainer.appendChild(para);
                console.log("You got a draw");
            } else if (computerChoice === "rock") {
                para.textContent = "Computer won, rock beats scissors!";
                gameResultsContainer.appendChild(para);
                console.log("Computer won, rock beats scissors!")
                computerScore = computerScore + 1;
            } else {
                para.textContent = "You won!";
                gameResultsContainer.appendChild(para);
                console.log("you won!")
                humanScore = humanScore + 1;
            }
        }

        //displaying the current score
        scorePara.textContent = "human: " + humanScore + "   computer: " + computerScore;
        gameResultsContainer.appendChild(scorePara);
        console.log("human: " + humanScore + "   computer: " + computerScore);

        if (humanScore == 5) {
            finalResultPara.textContent = "Congratulation, you WON 5 rounds against computer first!"
            gameResultsContainer.appendChild(finalResultPara);
        } else if (computerScore == 5) {
            finalResultPara.textContent = "You LOST, computer won 5 rounds first!"
            gameResultsContainer.appendChild(finalResultPara);
        }
    }
  
    //event listeners for the buttons
    const rockButton = document.querySelector("#rockSelection");
    rockButton.addEventListener("click", ()=> {
        humanChoice = "rock";
        playRound(humanChoice, getComputerChoice());
    })

    const paperButton = document.querySelector("#paperSelection");
    paperButton.addEventListener("click", ()=> {
        humanChoice = "paper";
        playRound(humanChoice, getComputerChoice());
    })


    const scissorsButton = document.querySelector("#scissorsSelection");
    scissorsButton.addEventListener("click", ()=> {
        humanChoice = "scissors";
        playRound(humanChoice, getComputerChoice());
    })

}


playGame();







