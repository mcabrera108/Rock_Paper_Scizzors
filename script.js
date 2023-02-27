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

    if(playerSelection == computerSelection)
    {
        return "This is a tie! Try again"
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper")
    {
        return "You Lose! Paper beats Rock!"
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors")
    {
        return "You Lose! Scissor beats Paper!"
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock")
    {
        return "You Lose! Rock beats Scissors!"
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors")
    {
        return "You Win! Rock beats Scissors!"
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock")
    {
        return "You Win! Paper beats Rock!"
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper")
    {
        return "You Win! Scissors beats Paper!"
    }
    else {
        return "Please input a valid selection"
    }

}
function game()
{
    let playerChoice;
    let computerChoice;
    let playerScore = 0;
    let computerScore = 0;
    let results;

    for(let i = 0; i < 5; i++) {
        playerChoice = prompt("Input your Choice");
        computerChoice = getComputerChoice();
        results = playRound(playerChoice, computerChoice);

        console.log(results);
        if(results == "You Lose! Paper beats Rock!" || results == "You Lose! Scissor beats Paper!" || results == "You Lose! Rock beats Scissors!")
        {
            computerScore++;
        }
        else if(results == "You Win! Rock beats Scissors!" || results == "You Win! Paper beats Rock!" || results == "You Win! Scissors beats Paper!")
        {
            playerScore++;
        }
    }
    if(playerScore > computerScore)
    {
        console.log("Player has won!");
    }
    else if(playerScore < computerScore)
    {
        console.log("Player has lost!")
    }
    else 
    {
        console.log("It is a tie!")
    }
    
}

