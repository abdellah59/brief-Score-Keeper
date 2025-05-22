const p1Button = document.getElementById("p1button");
const p2Button = document.getElementById("p2button");
const resetButton = document.getElementById("reset");

const p1Display = document.getElementById("p1Score");
const p2Display = document.getElementById("p2Score");
const winnerDisplay = document.getElementById("winner") ;
const limitInput = document.getElementById("limit");

let p1Score = 0;
let p2Score = 0;
let playingTo = parseInt(limitInput.value);
let isGameOver = false;


function updateScores(player, display){

    if(!isGameOver){

      player++;

      if (player ===playingTo){

        isGameOver = true;
        winnerDisplay.textContent = display === p1Display ? "Player One Wins!" : "Player Two Wins!";
        display.classList.add("winner");
      }

      display.textContent = player;
    }

  return player;
}
  
