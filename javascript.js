function getComputerChoice() {
let choice = ["Rock", "Paper", "Scissors"]
return randomChoice = choice[Math.floor(Math.random() * choice.length)]
}
const ComputerSelection = getComputerChoice();
console.log(randomChoice)

function playerSelection(){
    let selection = prompt("Rock, Paper, or scissors?")
    let selectionLower = selection.toLowerCase()
    return selectionLower
    
}
function playRound(playerSelection, ComputerSelection) {
        if (playerSelection == "rock"  && ComputerSelection == "Paper") {
        return "You lost, Paper Kills Rock.";
    }
    else if (playerSelection == "paper" && ComputerSelection == "Scissors"){
        return "You lost, Scissors Kill Paper";
    }
    else if (playerSelection == 'scissors'  && ComputerSelection == "Rock"){
        return "You lost, Rock Kills Scissors";}
    else if (playerSelection == 'scissors'  && ComputerSelection == "Paper"){
        return "You Won, Scissors Kill Paper."
    }
    else if (playerSelection == 'scissors'  && ComputerSelection == "Scissors"){
        return "it's a tie";
    }
    else if (playerSelection == "paper"  && ComputerSelection == "Rock"){
        return "You won, Paper beats rock."
    } 
    else if (playerSelection == "paper" && ComputerSelection == "Paper"){
        return "it's a tie"
    }

    else if (playerSelection == "rock"   && ComputerSelection == "Scissors"){
        return "You won, Rock beats scissors"
    }
    else if (playerSelection == "rock"   && ComputerSelection == "Rock"){
        return "it's a tie";
    }
    else{
        return "you entered a wrong selection"
    }
    }

console.log(playRound(playerSelection(), ComputerSelection))
