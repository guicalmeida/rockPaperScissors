let buttonDiv = document.querySelector("#options"),
    gameButtons = buttonDiv.querySelectorAll(".button"),
    gameText = document.querySelector("#gameText"),
    start = document.querySelector("#start"),
    scoreboard = document.querySelector("#scoreboard"),
    playerCurrentScore = document.querySelector("#humanScore"),
    computerCurrentScore = document.querySelector("#AIScore"),
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

buttonDiv.style.display = "none";
scoreboard.style.display = "none";

function playRound(playerSelection, computerSelection) {

    function buttonPlay (winner) {
        if (playerScore == 5 || computerScore == 5) {
            buttonDiv.style.display = "none";
            return gameText.textContent = `${winner} wins the Game! You played ${playerSelection} and the A.I. played ${computerSelection}.`
        } else {
            return gameText.textContent = `${winner} wins the Round! \n You played ${playerSelection} and the A.I. played ${computerSelection}.`
        }
    }

    if ((playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            playerScore += 1;
            playerCurrentScore.textContent = playerScore;
            return buttonPlay("player");
    } else if ((playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
            computerScore += 1;
            computerCurrentScore.textContent = computerScore;
            return buttonPlay("A.I.");
    } else {
        return gameText.textContent = `It's a Tie! You played ${playerSelection} and the A.I. played ${computerSelection}.`;
    }
}

start.addEventListener("click", () => {
    buttonDiv.style.display = "flex";
    gameText.textContent = "Choose your fighter!";
    computerCurrentScore.textContent = 0;
    playerCurrentScore.textContent = 0;
    start.style.display = "none";
    scoreboard.style.display = "flex";

})

