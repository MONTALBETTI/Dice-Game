// variables Current score
const player2Score = document.querySelector("#currentScore2");
// Get button 
const newGameBtn = document.querySelector("#newGame");
const rollBtn = document.querySelector("#rollBtn");
const startBtn = document.querySelector("#startBtn");
const holdBtn = document.querySelector("#hold");


// Get image 
const diceImage = document.querySelector(".diceImage");

// others variables
let activePlayer;
let roundScore, scores;//current; 



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

 // Function to change the player name
 
function editNames() {
  
    let player1 = prompt("Change Player1 name");
    let player2 = prompt("Change player2 name");

    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
  }
 // init  player 
   play()
 function play() {
    activePlayer= 0;
    roundScore = 0;
    scores = [0, 0];
    
   
   document.querySelector('p.player1').textContent = 'player1';
   document.querySelector('#score-1').textContent = '0';
   document.querySelector('#currentScore-1').textContent = '0';
   

   document.querySelector('.player2').textContent = 'player2'; 
   document.querySelector('#score-2').textContent = '0';
   document.querySelector('#currentScore-2').textContent = '0';
   
   //document.querySelector('.playerNumber-1').classList.add('active');
  // document.querySelector('.playerNumber-2').classList.remove('active');
}
rollBtn.addEventListener('click', function () {
  // 1.Create a random number
  const diceRandom = Math.floor(Math.random() * 6) + 1;
  diceImage.style.display = 'block'
  diceImage.src = 'image/dice' + diceRandom + '.png';
  //2.play the sound plug
  const audio = new Audio("image/bruit-de-dés.mp3");
  //3.When the soundtrack is loaded, lace the sound
  audio.addEventListener("canplaythrough", function () {
    audio.play()
  })
   // 4.if the diceRandom = 1, the player will lose all his scores and it will be a next player
  if (diceRandom !== 1) {
      roundScore = roundScore + diceRandom;
    document.getElementById("currentScore-"+activePlayer).textContent = roundScore;// erreur 

  } else {
    console.log('next players move');
  }
  })
//function nextPlay() {
  
//}

    



