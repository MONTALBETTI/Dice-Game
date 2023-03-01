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
    
// reset game
const resetgame = function (){
  numberplay1.innerHTML = "player1";
  numberplay2.innerHTML = "player2";
  numberPlay1.innerHTML = 0;
  numberPlay2.innerHTML = 0;
  numberCurrent1.innerHTML = 0;
  numberCurrent2.innerHTML = 0;

}
// variable 1 = play 1 =0 lance le dé,  resultatp1 +1
const player1 = document.getElementById("player1")

//variable 2 = play2 =0 lance le dé, résultat
//des ont click sur ROll dice fais rouler tourné le dé
// Valeur de de= (1 et 6)
// Utilise math.rondom générer un chiffre aléatoire entre 0 et 1(chiffre à virgule)
//Utilise math.floor trunc arrondire le chiffre 0+1
// utiliser la méthode document.querySelector appeller class.


//boucle for { play1=valeur D}
//p1=play1+valeur D
//while play1 ou play2 >=100 continue lancer le dé
// stocker ma variable pointer un élément


 

  