//get access the global score
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
//Get rollDice btn 
const rollBtn = document.querySelector("#rollBtn");
const holdBtn = document.querySelector("#hold");
const newGame = document.querySelector('#newGame');
// Get image 
const diceImage = document.querySelector(".diceImage");
const current1 = document.getElementById('current-0');
const current2 = document.getElementById('current-1');
// section player
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

//players 
const name1 = document.querySelector('#name--0');
const name2 = document.querySelector('#name--1');


let scores;
let current;
let activePlayer;

//init the values to zero
function reset() {
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  name1.textContent = "Player 1";
  name2.textContent = "Player 2";
  

  //freeze button roll dice and hold
 
  player1.classList.remove('player-winner');
  player2.classList.remove('player-winner');
  player1.classList.add('player-active');
  player2.classList.remove('player-active');
  rollBtn.style.visibility = 'visible';
  holdBtn.style.visibility = "visible";
  diceImage.classList.add('hidden');
  
  //rollBtn.style.visibility ='visible'
  // init the value to zero
  scores = [0, 0];
  current = 0;
  activePlayer = 0;
}

reset()

newGame.addEventListener('click', () => {
  console.log(newGame)

});
// Next player
const nextPlayer = function () {
    current = 0; 
    //reset currunt score for zero
    document.querySelector(`#current-${activePlayer}`).textContent =current;
    // change player
    activePlayer = activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
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
  //play sound recording
   const audio = new Audio("image/bruit-de-dés.mp3");
//When the soundtrack is loaded, chain the dice
 audio.addEventListener("canplaythrough", function () {
  audio.play();
 });
 
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
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
  //if a player reaches the maximum(100pts) score wins
  if (scores[activePlayer] >= 100) {
    console.log(activePlayer)
    // endgame
    document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
    document.querySelector(`#name--${activePlayer}`).innerHTML = `Winner`;
    //diceImage.style.visibility = 'hidden';
    rollBtn.style.visibility = 'hidden';
    holdBtn.style.visibility = "hidden";
  }
    
     else {
    nextPlayer();
  }
})
 
newGame.addEventListener('click', reset );

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

  document.querySelector("#name--0").innerHTML = player1;
  document.querySelector("#name--1").innerHTML = player2;
}
