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
            (playerSelection == "rock" && computerSelection == "paper")
                return "Congrats You Win!"
            


}

getComputerChoice()

function playRound(playerSelection, computerSelection) {

    


}


