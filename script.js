let buttonDiv = document.querySelector("#options"),
    gameButtons = buttonDiv.querySelectorAll("button"),
    gameText = document.querySelector("#gameText"),
    playerScore = 0,
    computerScore = 0;

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let mix = Math.floor(Math.random() * options.length);
    return options[mix];
}

gameButtons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id, computerPlay())
        })
    })

function playRound(playerSelection, computerSelection) {

    function buttonPlay (winner) {
        if (playerScore == 5 || computerScore == 5) {
            console.log(playerScore + " AI " + computerScore);
            buttonDiv.style.display = "none";
            return gameText.textContent = `${winner} wins the Game! You played ${playerSelection} and the A.I. played ${computerSelection}.`
        } else {
            console.log(playerScore + " AI " + computerScore);
            return gameText.textContent = `${winner} wins the Round! \n You played ${playerSelection} and the A.I. played ${computerSelection}. your score: ${playerScore} \n A.I. score: ${computerScore}. \n Next round...`
        }
    }

    if ((playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            playerScore +=1;
            return buttonPlay("player");
    } else if ((playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
            computerScore += 1;
            return buttonPlay("A.I.");
    } else {
        console.log(playerScore + " AI " + computerScore);
        return gameText.textContent = `It's a Tie! You played ${playerSelection} and the A.I. played ${computerSelection}. \n your score: ${playerScore} \n A.I. score: ${computerScore}. \n Next round...`;
    }
}
