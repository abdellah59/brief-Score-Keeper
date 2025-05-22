const p1Button = document.getElementById("p1button");
const p2Button = document.getElementById("p2button");
const resetButton = document.getElementById("reset");

const p1Display = document.getElementById("p1Score");
const p2Display = document.getElementById("p2Score");
const winnerDisplay = document.getElementById("winner") ;
const limitInput = document.getElementById("limit");

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(limitInput.value);
let isGameOver = false;