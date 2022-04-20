//Scores
let currentScore = document.getElementById(`currentscorep`);
let playerScore = 0;
let computerScore = 0;
let result;

//Result
let currentResult = document.getElementById("resultp");

//Buttons
const buttonRock = document.querySelector("#button-rock-id");
const buttonPaper = document.querySelector("#button-paper-id");
const buttonScissor = document.querySelector("#button-scissor-id");

//Event Listeners
buttonRock.addEventListener("click", function (e) {
  game("Rock", computerPlay);
});
buttonPaper.addEventListener("click", function (e) {
  game("Paper", computerPlay);
});
buttonScissor.addEventListener("click", function (e) {
  game("Scissor", computerPlay);
});

// Returning computer output of Rock, Paper, or Scissor
function computerPlay() {
  const handArray = ["Rock", "Paper", "Scissor"];
  return handArray[Math.floor(Math.random() * handArray.length)];
}

// Function for gameplay
function playRound(player, computer) {
  const winStr = `You win! You had ${player} and Computer had ${computer}`;
  const loseStr = `You LOSE! You had ${player} and Computer had ${computer}`;
  const tieStr = `It's a tie. You had ${player} and Computer had ${computer}`;
  if (player === "Rock" && computer === "Rock") {
    return tieStr;
  } else if (player === "Rock" && computer === "Scissor") {
    return winStr;
  } else if (player === "Rock" && computer === "Paper") {
    return loseStr;
  } else if (player === "Paper" && computer === "Rock") {
    return winStr;
  } else if (player === "Paper" && computer === "Scissor") {
    return loseStr;
  } else if (player === "Paper" && computer === "Paper") {
    return tieStr;
  } else if (player === "Scissor" && computer === "Rock") {
    return loseStr;
  } else if (player === "Scissor" && computer === "Scissor") {
    return tieStr;
  } else if (player === "Scissor" && computer === "Paper") {
    return winStr;
  }
}

//Function for the game
function game(player, computer) {
  let computerResult = computer();
  result = playRound(player, computerResult);
  if (result.includes(`win`)) {
    playerScore++;
    updateScore();
    updateResult();
    checkIfWon();
  }
  if (result.includes(`LOSE`)) {
    computerScore++;
    updateScore();
    updateResult();
    checkIfWon();
  }
  if (result.includes(`tie`)) {
    updateResult();
    checkIfWon();
  }
  return result;
}

//Function to update score
function updateScore() {
  currentScore.textContent = `${playerScore} : ${computerScore}`;
}

//Function to update result
function updateResult() {
  currentResult.textContent = `${result}`;
}

//Funcion to check if won
function checkIfWon() {
  if (playerScore == 5) {
    alert(`🎇🎇CONGRATS, you saved the world!🎇🎇 \n 🥇🥇🥇🥇🥇🥇`);
    restartGame();
  }
  if (computerScore == 5) {
    alert(
      "☠️☠️You lose! Go beat Thanos, and snap back to get another shot!☠️☠️"
    );
    restartGame();
  }
}

//Function to restart game
function restartGame() {
  currentScore.textContent = `${0} : ${0}`;
  playerScore = 0;
  computerScore = 0;
}
