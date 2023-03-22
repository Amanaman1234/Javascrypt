let p1Scores = []; //sla hierin de gebruikte nummers op, dit zijn de nummers die beige gekleurd zijn
let p2Scores = [];
let rollsLeft = document.getElementById("rolls");
let highscore = 0;
let p1Turn = true; //true voor player 1, false voor player 2
let dice = [
  "Images/Dice-1.png",
  "Images/Dice-2.png",
  "Images/Dice-3.png",
  "Images/Dice-4.png",
  "Images/Dice-5.png",
  "Images/Dice-6.png",
];

let dice1 = document.getElementById("die1");
let dice2 = document.getElementById("die2");
let dice3 = document.getElementById("die3");
let dice4 = document.getElementById("die4");
let dice5 = document.getElementById("die5");
let YourHand = 0;

let dobbel = document.getElementById("dobelknop");

dobbel.onclick = function roll() {
  let dieOne = Math.floor(Math.random() * 6);
  let dieTwo = Math.floor(Math.random() * 6);
  let dieThree = Math.floor(Math.random() * 6);
  let dieFour = Math.floor(Math.random() * 6);
  let dieFive = Math.floor(Math.random() * 6);
  console.log(dieOne, dieTwo, dieThree, dieFour, dieFive);

  dice1.setAttribute("src", dice[dieOne]);
  dice2.setAttribute("src", dice[dieTwo]);
  dice3.setAttribute("src", dice[dieThree]);
  dice4.setAttribute("src", dice[dieFour]);
  dice5.setAttribute("src", dice[dieFive]);
};

function nOfAKind(num, dice) {
  let points;
  return points;
}
//functie voor een full house
function fullHouse(dice) {}

function single(num, dice) {}

function lockDie(die) {}

function calculatePoints(dice) {}

function swapTurn() {}
