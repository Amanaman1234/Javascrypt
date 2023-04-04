let p1Scores = []; //sla hierin de gebruikte nummers op, dit zijn de nummers die beige gekleurd zijn
let p2Scores = [];
let rollsLeft = document.getElementById("rolls");
let highscore = 0;
let p1Turn = true; //true voor player 1, false voor player 2
let images = [
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

let knophold = document.getElementsByClassName("dice");

let dobbel1 = {
  image: "Images/Dice-1.png",
  el: document.getElementById("die1"),
  waarde: 1,
  hold: false,
};
let dobbel2 = {
  image: "Images/Dice-1.png",
  el: document.getElementById("die2"),
  waarde: 1,
  hold: false,
};
let dobbel3 = {
  image: "Images/Dice-1.png",
  el: document.getElementById("die3"),
  waarde: 1,
  hold: false,
};
let dobbel4 = {
  image: "Images/Dice-1.png",
  el: document.getElementById("die4"),
  waarde: 1,
  hold: false,
};
let dobbel5 = {
  image: "Images/Dice-1.png",
  el: document.getElementById("die5"),
  waarde: 1,
  hold: false,
};

let hold = [false, false, false, false, false];
let dice = [dice1, dice2, dice3, dice4, dice5];
let values = [1, 1, 1, 1, 1];

let testdb = [dobbel1];

let rollover = 3;

let eentotal = 0;

let dobbel = document.getElementById("dobelknop");

for (let i = 0; i < knophold.length; i++) {
  knophold[i].onclick = function vast() {
    hold[i] = !hold[i];
  };
}

dobbel.onclick = function roll() {
  for (let i = 0; i < dice.length; i++) {
    if (hold[i]) {
      continue;
    }
    values[i] = Math.floor(Math.random() * 6);
    dice[i].setAttribute("src", images[values[i]]);
  }

  rollsLeft.innerHTML -= 1;

  if (rollsLeft.innerHTML <= 0) {
    rollsLeft.innerHTML = 3;
    if (turn == false) {
      turn = true;
    } else if ((turn = true)) {
      turn = false;
    }
  }
};

function nOfAKind(num, dice) {
  let points;
  return points;
}
//functie voor een full house
function fullHouse(dice) {}

function single(num, dice) {}

function lockDie() {}

function calculatePoints(dice) {}

function swapTurn() {}
