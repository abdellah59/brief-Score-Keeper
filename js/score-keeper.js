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
let gameOver = false;


function updateScores(player, display){

    if(!gameOver){

      player++;

      if (player ===playingTo){

        gameOver = true;
        winnerDisplay.textContent = display === p1Display ? "Player One Wins!" : "Player Two Wins!";
        display.classList.add("winner");
      }

      display.textContent = player;
    }

  return player;
}
  
p1Button.addEventListener("click", () =>{ p1Score = updateScores(p1Score, p1Display); });
  
p2Button.addEventListener("click", ()=>{ p2Score = updateScores(p2Score, p2Display);});

limitInput.addEventListener("change", () =>{playingTo = parseInt(limitInput.value);reset();});
  
resetButton.addEventListener("click", reset);


function reset(){

    gameOver = false;
    p1Score =0;
    p2Score =0;
    p1Display.textContent =0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    winnerDisplay.textContent = "Let's Play!";
  }
  