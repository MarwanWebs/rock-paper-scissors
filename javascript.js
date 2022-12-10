// a function that chooses a random choice for the computer
function getComputerChoice() {
let choice = ["Rock", "Paper", "Scissors"]
return randomChoice = choice[Math.floor(Math.random() * choice.length)]
}
// a function That Takes Rock, Paper, Scissors choices from the player. 
function playerSelection(){
    let selection = prompt("Rock, Paper, or scissors?")
    let selectionLower = selection.toLowerCase()
    return selectionLower
    
}
// function upon called plays a round of rock paper scissors
function playRound(playerSelection, getComputerChoice) {
        if (playerSelection == "rock"  && getComputerChoice == "Paper") {
        return "You lost, Paper Kills Rock.";
    }
    else if (playerSelection == "paper" && getComputerChoice == "Scissors"){
        return "You lost, Scissors Kill Paper";
    }
    else if (playerSelection == 'scissors'  && getComputerChoice == "Rock"){
        return "You lost, Rock Kills Scissors";}
    else if (playerSelection == 'scissors'  && getComputerChoice == "Paper"){
        return "You Won, Scissors Kill Paper."
    }
    else if (playerSelection == 'scissors'  && getComputerChoice == "Scissors"){
        return "it's a tie";
    }
    else if (playerSelection == "paper"  && getComputerChoice == "Rock"){
        return "You won, Paper beats rock."
    } 
    else if (playerSelection == "paper" && getComputerChoice == "Paper"){
        return "it's a tie"
    }

    else if (playerSelection == "rock"   && getComputerChoice == "Scissors"){
        return "You won, Rock beats scissors"
    }
    else if (playerSelection == "rock"   && getComputerChoice == "Rock"){
        return "it's a tie";
    }
    else{
        return "you entered a wrong selection"
    }
    }
// function once called plays 5 rounds of rock paper scissors
function game (){
    console.log(playRound(playerSelection(), getComputerChoice()))
    console.log(playRound(playerSelection(), getComputerChoice()))
    console.log(playRound(playerSelection(), getComputerChoice()))
    console.log(playRound(playerSelection(), getComputerChoice()))
    console.log(playRound(playerSelection(), getComputerChoice()))
}
game()