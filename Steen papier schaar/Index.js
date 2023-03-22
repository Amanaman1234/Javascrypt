let rockhtml = document.getElementById("rock");
let paperhtml = document.getElementById("paper");
let scissorshtml = document.getElementById("scissors");

let win = document.getElementById("win");

rock.setAttribute("src", "images/rock.png");
paper.setAttribute("src", "images/paper.png");
scissors.setAttribute("src", "images/scissors.png");

let = lefthand = document.getElementById("left");
let = rightHand = document.getElementById("right");

let choice = 0;

let images = ["Images/rock.png", "images/paper.png", "images/scissors.png"];

let isPLayerTurn = true;
let round = 0;
let round1 = document.getElementById("r1");
let round2 = document.getElementById("r2");
let round3 = document.getElementById("r3");

rockhtml.onclick = function () {
  console.log(this.id);
  choice = 1;
  select(choice);
  cpuTurn();
  checkWinner();
};
paperhtml.onclick = function () {
  console.log(this.id);
  choice = 2;
  select(choice);
  cpuTurn();
  checkWinner();
};
scissorshtml.onclick = function () {
  console.log(this.id);
  choice = 3;
  select(choice);
  cpuTurn();
  checkWinner();
};

function select(choice) {
  lefthand.setAttribute("src", images[choice - 1]);
}
function cpuTurn() {
  let value = Math.floor(Math.random() * images.length);
  console.log(value);
  rightHand.setAttribute("src", images[value]);
  cpuChoise = value + 1;
}

function checkWinner() {
  if (choice == cpuChoise) {
    win.innerHTML = " - Draw -";
    roundScore("draw");
    return;
  }
  if (choice == 1) {
    if (cpuChoise == 3) {
      win.innerHTML = "Player Wins!!!!";
      roundScore("player 1");
    } else {
      win.innerHTML = "Bot wins :(";
      roundScore("player 2");
    }
  }
  if (choice == 2) {
    if (cpuChoise == 1) {
      win.innerHTML = "Player Wins!!!!";
      roundScore("player 1");
    } else {
      win.innerHTML = "Bot wins :(";
      roundScore("player 2");
    }
  }
  if (choice == 3) {
    if (cpuChoise == 2) {
      win.innerHTML = "Player Wins!!!!";
      roundScore("player 1");
    } else {
      win.innerHTML = "Bot wins :(";
      roundScore("player 2");
    }
  }
}

function roundScore(score) {
  round += 1;
  switch (round) {
    case 1:
      round1.innerHTML = score;
      break;
    case 2:
      round2.innerHTML = score;
      break;
    case 3:
      round3.innerHTML = score;
  }
}
