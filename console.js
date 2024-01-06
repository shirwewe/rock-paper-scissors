// This is the main game console for the game rock, papaer, scissors.
// The user will be playing against a bot who will return either Rock, Paper, or Scissors at random


// This function will randomly return either rock paper or scissors

player_points = 0;
bot_points = 0;

function getComputerChoice(){
    const list_of_moves = ["rock", "paper", "scissors"];
    const random_move = Math.floor(Math.random() * list_of_moves.length);
    return list_of_moves[random_move];
}

function playRound(playerSelection, computerSelection){
    const lowerplayerSelection = playerSelection.toLowerCase();
    let message;
    switch(lowerplayerSelection){
        case "rock":
            if (computerSelection == "rock"){
                message = "It's a tie!";
            }
            else if (computerSelection == "paper"){
                message = "You Lose! Paper beats Rock!";
                bot_points++;
            }
            else if (computerSelection == "scissors"){
                message = "You Win! Rock beats Scissors";
                player_points++;
            }
            break;
        case "paper":
            if (computerSelection == "rock"){
                message = "You Win! Paper beats Rock!";
                player_points++;

            }
            else if (computerSelection == "paper"){
                message = "It's a tie!";

            }
            else if (computerSelection == "scissors"){
                message = "You Lose! Scissors beats Paper!";
                bot_points++;
            }
            break; 
        case "scissors":
            if (computerSelection == "rock"){
                message = "You Lose! Rock beats Scissors!";
                bot_points++;
            }
            else if (computerSelection == "paper"){
                message = "You win! Scissors beats Paper!";
                player_points++;
            }
            else if (computerSelection == "scissors"){
                message = "It's a tie";
            }
            break;
        default:
            message = "Wrong input, please try again";
        
    }
    return message;

}

function scorekeeper(){
    return "Your points: " + player_points + "\nBot points: " + bot_points;
}

function declare_winner(){
    if (player_points > bot_points){
        return "Game over! The player wins!";
    }

    else if (player_points < bot_points){
        return "Game over! The bot wins!";
    }
    else{
        return "Game over! It's a tie! "
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Please input one of: 'Rock', 'Paper', 'Scissors'");
        const computerSelection = getComputerChoice();
        console.log("You played: " + playerSelection +  "\nThe bot played: " + computerSelection )
        console.log(playRound(playerSelection,computerSelection));
        console.log(scorekeeper());
    }
    console.log(declare_winner())
}

game()