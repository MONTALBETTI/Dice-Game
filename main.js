//get access the global score
const score1 = document.querySelector('#score-1');
const score2 = document.querySelector('#score-2');
//Get rollDice btn 
const rollBtn = document.querySelector("#rollBtn");
const holdBtn= document.querySelector("#hold");
// Get image 
const diceImage = document.querySelector(".diceImage");
const current1 = document.getElementById('current-1');
//players 
const player1 = document.querySelector('#player--1');
const player2 = document.querySelector('#player--2');

//const current2 = document.getElementById('current-2');

//init the values to zero
score1.textContent = 0;
score2.textContent = 0;
diceImage.classList.add('hidden');

let scores = [0,0];
let current = 0;
let activePlayer = 1;

// Next player
const nextPlayer = function () {
    current = 0; 
    //reset currunt score for zero
    document.querySelector(`#current-${activePlayer}`).textContent =current;
    // change player
    activePlayer = activePlayer == 1 ? activePlayer = 2 : activePlayer = 1;
    //active player / remove player or add player
    player1.classList.toggle('player-active')
    player2.classList.toggle('player-active')
  }

// functionnality for rollDice btn

rollBtn.addEventListener('click', function () {
// 1.Generate a random numeber [1,6],
  const diceRandom = Math.floor(Math.random() * 6) + 1;
  console.log(diceRandom)
//display a random number on the dice image
    diceImage.classList.remove('hidden');
    diceImage.src = 'image/dice' + diceRandom + '.png';
//add it to the active player's current score, if the random number is not 1,
  if (diceRandom != 1) {
    current = current + diceRandom;
    document.querySelector(`#current-${activePlayer}`).textContent = current;
  } else {
    nextPlayer()
    // if the diceRandom = 1, the player will lose all his scores and it will be a next player
  }
});
// functionnality for holdBtn
holdBtn.addEventListener('click', () => {
  //add the current score to the global score
  scores[activePlayer] = scores[activePlayer] + current;
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
  //if a player reaches the maximum(100pts) score wins
  if (scores[activePlayer] >= 100) {
    // endgame
    document.querySelector(`.player--${activePlayer}`).classList.add('.player-winner');
    document.querySelector(`#name--${activePlayer}`).textContent = ('Winner');
  } else {
    nextPlayer();
  }
 })


// show and hide game rules
let rules = document.getElementById("rules");
let gameRule = document.getElementById("gameRule");
rules.addEventListener("click", () => {
  if(getComputedStyle(gameRule).display != "none"){
    gameRule.style.display = "none";
  } else {
    gameRule.style.display = "block";
  }
})
function editNames() {
  
  let player1 = prompt("Change Player1 name");
  let player2 = prompt("Change player2 name");

  document.querySelector(".player1").innerHTML = player1;
  document.querySelector(".player2").innerHTML = player2;
}
