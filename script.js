function computerPlay() {
    let options = ["0", "rock", "paper", "scissors"];
    let mix = Math.floor(Math.random() * 3 + 1);
    return options[mix];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

        if ((playerSelection == "paper" && computerSelection == "rock") ||(playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") ) {
            playerScore +=1;
        return `You Win! You played ${playerSelection} and the A.I. played ${computerSelection} `;
        } else if ((playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock")) {
            computerScore += 1;
        return `You Lose! You played ${playerSelection} and the A.I. played ${computerSelection}`;
        } else {
            return `It's a Tie! You played ${playerSelection} and the A.I. played ${computerSelection} `;
        }
}


function game() {
    while (playerScore !== 5 && computerScore !== 5) {
        let player;
        let answer;
        while ((player !== "rock") && (player !== "paper") && (player !== "scissors")) {
            answer = prompt("rock, paper, scissors?");
            player = answer.toLowerCase();
        }
        console.log(playRound(player, computerPlay()));
        console.log ("your score: " + playerScore);
        console.log ("A.I. score: " + computerScore);
        console.log ("%cNext round...", "color:grey; font size: 20px; font-style: italic")
        if (playerScore == 5) {
            console.log("%cYou Win the Game!", "color:red; font-size: 30px");
        }
        else if (computerScore == 5) {
            console.log("%cYou Lost the Game!", "color:blue; font-size: 30px");
        }
    }
}