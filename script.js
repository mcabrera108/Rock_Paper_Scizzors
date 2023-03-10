let playerScore = 0;
let computerScore = 0;
const rockChoice = document.querySelector('.rock-button');
const paperChoice = document.querySelector('.paper-button');
const scissorChoice = document.querySelector('.scissors-button');
const score = document.querySelector('.score-keeper');
const victoryScreen = document.querySelector('.victory-screen');
const resetContainer = document.querySelector('.reset-container');

const resetButton = document.createElement('button');
resetButton.addEventListener('click', resetGame);
resetButton.textContent = "Reset";

const endRoundDialogue = document.createElement('div');

const beatenBy = {
    "Scissors" : "Paper",
    "Paper" : "Rock",
    "Rock" : "Scissors"
}

game();


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * 3);

    /*console.log(choices[computerChoice]);*/
    return choices[computerChoice];
}
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase(); /*Returns string with first letter in upper case and the rest in lower case*/
    const winDialogue = "You Win, " + playerSelection + " beats " + computerSelection;
    const loseDialogue = "You lose, " + computerSelection + " beats " + playerSelection;

    //console.log(playerSelection + " " + computerSelection);

    if(playerSelection === computerSelection)
    {

        //console.log("Its a tie");//Used for testing purposes
        recordScore("It's a tie!");
    }
    else if(beatenBy[playerSelection] === computerSelection)
    {
        ++playerScore;
        recordScore(winDialogue);
        //console.log("Player Wins");//Used for testing purposes
    }
    else
    {
        ++computerScore;
        recordScore(loseDialogue);
        //console.log("Computer Wins");//Used for testing purposes
    }

}
function game()
{
    playerScore = 0;
    computerScore = 0;

    score.textContent = playerScore + " - " + computerScore;
    

    rockChoice.addEventListener('click', function() {
        playRound("Rock", getComputerChoice());
    })
    paperChoice.addEventListener('click', function() {
        playRound("Paper", getComputerChoice());
    })
    scissorChoice.addEventListener('click', function() {
        playRound("Scissors", getComputerChoice());
    })
}
function recordScore(victoryDialogue)
{
    score.textContent = playerScore + " - " + computerScore;
    endRoundDialogue.textContent = victoryDialogue;
    score.appendChild(endRoundDialogue);

    if(playerScore === 5)
    {
        endGameMessage("Player has won!");
        
    }
    else if(computerScore === 5)
    {
        endGameMessage("Computer has won!");
    }
}
function endGameMessage(victoryMessage)//Function for 
{
    rockChoice.style.display = "none";
    paperChoice.style.display = "none";
    scissorChoice.style.display = "none";

    victoryScreen.textContent = victoryMessage;
    resetButton.style.display = "block";
    resetContainer.appendChild(resetButton);
    score.removeChild(score.firstElementChild);
    
} 
function resetGame()
{
    rockChoice.style.display = "inline";
    paperChoice.style.display = "inline";
    scissorChoice.style.display = "inline";

    victoryScreen.textContent = "";
    playerScore = 0;
    computerScore = 0;
    score.textContent = playerScore + " - " + computerScore;
    resetButton.style.display = "none";
    console.log("The game has been resetted");
}
