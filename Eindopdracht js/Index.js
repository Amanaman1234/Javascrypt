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

let acesp1 = document.getElementById("aces--p1");
let twosp1 = document.getElementById("twos--p1");
let threesp1 = document.getElementById("threes--p1");
let foursp1 = document.getElementById("fours--p1");
let fivesp1 = document.getElementById("fives--p1");
let sixesp1 = document.getElementById("sixes--p1");

let tkindp1 = document.getElementById("tkind--p1");
let fkindp1 = document.getElementById("fkind--p1");
let fousep1 = document.getElementById("fouse--p1");
let smallp1 = document.getElementById("small--p1");
let largep1 = document.getElementById("large--p1");
let yahtzeep1 = document.getElementById("yahtzee--p1");
let chancep1 = document.getElementById("chance--p1");

let knophold = document.getElementsByClassName("dice");

let hold = [false, false, false, false, false];
let dice = [dice1, dice2, dice3, dice4, dice5];
let values = [1, 1, 1, 1, 1];

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
  calculatePoints();
  single();
  fullHouse(checker());
};

function nOfAKind(nummer) {}

function checker() {
  let nummer = [];
  for (let i = 0; i < 6; i++) {
    if (values.includes(i)) {
      nummer.push(i);
    }
  }
  console.log(nummer);
  return nummer;
}
function fullHouse(nummer) {
  if (nummer.length == 2) {
    fousep1.innerHTML = 25;
  } else {
    fousep1.innerHTML = "-";
  }
  if (nummer.length == 1) {
    yahtzeep1.innerHTML = 50;
  } else {
    yahtzeep1.innerHTML = "-";
  }
}

function single() {}

function calculatePoints(dice) {
  let singles = [0, 0, 0, 0, 0, 0];
  values.forEach(function (num) {
    if (num == 0) {
      singles[0]++;
    } else if (num == 1) {
      singles[1]++;
    } else if (num == 2) {
      singles[2]++;
    } else if (num == 3) {
      singles[3]++;
    } else if (num == 4) {
      singles[4]++;
    } else if (num == 5) {
      singles[5]++;
    }
  });

  acesp1.innerHTML = singles[0] * 1;
  twosp1.innerHTML = singles[1] * 2;
  threesp1.innerHTML = singles[2] * 3;
  foursp1.innerHTML = singles[3] * 4;
  fivesp1.innerHTML = singles[4] * 5;
  sixesp1.innerHTML = singles[5] * 6;

  chancep1.innerHTML =
    singles[0] * 1 +
    singles[1] * 2 +
    singles[2] * 3 +
    singles[3] * 4 +
    singles[4] * 5 +
    singles[5] * 6;
}

function swapTurn() {}
