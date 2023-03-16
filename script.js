const options = ["rock", "paper", "scissors"];


function getComputerChoice() {
const choice = options[Math.floor(Math.random() * options.length)];
console.log(choice);

}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "You tied"
    }
    else if 
            (playerSelection == "rock" && computerSelection == "scissors"){
                return "Congrats You Win!"
            }
    
    else if 
            (playerSelection == "paper" && computerSelection == "rock"){
                return "Congrats You Win!"
            }
    else if 
            (playerSelection == "scissors" && computerSelection == "paper"){
                return "Congrats You Win!"
            }

    else if 
            (playerSelection == "scissors" && computerSelection == "rock"){
                return "Sorry You Lose!"
            }
    
    else if 
            (playerSelection == "paper" && computerSelection == "scissors"){
                return "Sorry You Lose!"
            }
            
    else if 
            (playerSelection == "rock" && computerSelection == "paper"){
                return "Sorry You Lose!"
            }
    


}

getComputerChoice()

function playRound(playerSelection, computerSelection) {

    


}


