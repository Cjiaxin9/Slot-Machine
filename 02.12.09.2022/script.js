function spin(e) {
  //const spin = Math.floor(Math.random() * 10);
  // console.log(document.querySelector(".box1"));
  document.querySelector(".box1").innerText = Math.floor(Math.random() * 3);
  document.querySelector(".box2").innerText = Math.floor(Math.random() * 3);
  document.querySelector(".box3").innerText = Math.floor(Math.random() * 3);
  document.querySelector(".box4").innerText = Math.floor(Math.random() * 3);
  document.querySelector(".box5").innerText = Math.floor(Math.random() * 3);
  document.querySelector(".box6").innerText = Math.floor(Math.random() * 3);
  document.querySelector(".box7").innerText = Math.floor(Math.random() * 3);
  document.querySelector(".box8").innerText = Math.floor(Math.random() * 3);
  document.querySelector(".box9").innerText = Math.floor(Math.random() * 3);

  const displayForBox1 = document.querySelector(".box1").innerText;
  const displayForBox2 = document.querySelector(".box2").innerText;
  const displayForBox3 = document.querySelector(".box3").innerText;
  const displayForBox4 = document.querySelector(".box4").innerText;
  const displayForBox5 = document.querySelector(".box5").innerText;
  const displayForBox6 = document.querySelector(".box6").innerText;
  const displayForBox7 = document.querySelector(".box7").innerText;
  const displayForBox8 = document.querySelector(".box8").innerText;
  const displayForBox9 = document.querySelector(".box9").innerText;

  if (
    (displayForBox1 == displayForBox2 && displayForBox2 == displayForBox3) ||
    (displayForBox4 == displayForBox5 && displayForBox5 == displayForBox6) ||
    (displayForBox7 == displayForBox8 && displayForBox8 == displayForBox9) ||
    (displayForBox1 == displayForBox5 && displayForBox5 == displayForBox9) ||
    (displayForBox3 == displayForBox5 && displayForBox5 == displayForBox7)
  ) {
    console.log("you Win");
  } else {
    console.log("You did not Win");
  }
}

document.querySelector(".button").onclick = spin;

// bet
function betRaise(e) {
  const displayNoAtDisplay = document.querySelector(".displayForBet");
  // console.log(document.querySelector(".displayForBet").innerHTML);
  const currentNo = document.querySelector(".displayForBet").innerHTML;
  currentNo = currentNo + 1;
  displayNoAtDisplay.innerHTML = currentNo;

  /*
  for (let i = 0; i <= e.length; i++) {
    currentNo = currentNo + i;

    displayNoAtDisplay.innerHTML = currentNo;
  }*/
}
document.querySelector(".bet-up").onclick = betRaise;
