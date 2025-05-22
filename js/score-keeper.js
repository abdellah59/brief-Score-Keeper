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
  
p1Button.addEventListener("click", () =>{ p1Score = updateScores(p1Score, p1Display); });
  
p2Button.addEventListener("click", ()=>{ p2Score = updateScores(p2Score, p2Display);});

limitInput.addEventListener("change", () =>{winningScore = parseInt(limitInput.value);reset();});
  
resetButton.addEventListener("click", reset);
