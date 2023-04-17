let knop = document.getElementById("knop");

let teller = 0;

knop.onclick = function () {
  teller++;
  let div = document.createElement("Div");
  document.getElementById("kont").appendChild(div);
  div.classList.add("container__item");
  div.innerHTML = teller;

  if (teller == 49) {
    this.remove();
  }
};
