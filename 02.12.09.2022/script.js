// bet
let betNo = document.querySelector(".displayForBet").innerHTML;
function betRaise(e) {
  //betNo = betNo < 10000 ? betNo : betNo;
  if (betNo < 10000000) {
    betNo++;
    document.querySelector(".displayForBet").innerHTML = betNo;
  }
  return betNo;
}
document.querySelector(".bet-up").onclick = betRaise;

function betReduce(e) {
  if (betNo > 0) {
    betNo--;
    document.querySelector(".displayForBet").innerHTML = betNo;
  }
}

document.querySelector(".bet-down").onclick = betReduce;

let cashInValue = 0;

function cashin() {
  const cashInValue = prompt("Enter the amount to cash in $", "");
  //console.log(cashInValue);

  if (parseInt(cashInValue)) {
    document.querySelector(".displayForTotalCredit").innerHTML = cashInValue;
    alert("you have cash in $" + cashInValue);
  } else {
    cashin();
  }
}
document.querySelector(".CashIn").onclick = cashin;

function spin(e) {
  //document.getElementById("#message").value.innerHTML = "";
  //document.getElementsByClassName("Winning_line").remove();
  //console.log(document.getElementsByClassName("Winning_line"));
  //message.empty();
  const currentBet = document.querySelector(".displayForBet").innerHTML;
  const currentbalance = document.querySelector(
    ".displayForTotalCredit"
  ).innerHTML;

  if (parseInt(currentbalance) > parseInt(currentBet)) {
    console.log(currentbalance);
    console.log(currentBet);
    let balance = parseInt(currentbalance) - parseInt(currentBet);
    console.log(balance);
    document.querySelector(".displayForTotalCredit").innerHTML = balance;
    //const spin = Math.floor(Math.random() * 10);
    // console.log(document.querySelector(".box1"));
    setTimeout(function () {
      let noOfLine,
        line1,
        line2,
        line3,
        line4,
        line5 = 0;
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
        (displayForBox1 == displayForBox2 &&
          displayForBox2 == displayForBox3) ||
        (displayForBox4 == displayForBox5 &&
          displayForBox5 == displayForBox6) ||
        (displayForBox7 == displayForBox8 &&
          displayForBox8 == displayForBox9) ||
        (displayForBox1 == displayForBox5 &&
          displayForBox5 == displayForBox9) ||
        (displayForBox3 == displayForBox5 && displayForBox5 == displayForBox7)
      ) {
        const winMessage = document.createElement("div");
        winMessage.setAttribute("id", "message");
        winMessage.innerText = "Congratulation! You Have Win!";
        document.querySelector(".Winning_line").appendChild(winMessage);
        if (
          displayForBox1 == displayForBox2 &&
          displayForBox2 == displayForBox3
        ) {
          // console.log("line 1");
          const line_1 = document.createElement("div");
          line_1.setAttribute("id", "message");
          line_1.innerText = "Line 1";
          document.querySelector(".Winning_line").appendChild(line_1);
          line1 = 1;
        } else {
          line1 = 0;
        }
        if (
          displayForBox4 == displayForBox5 &&
          displayForBox5 == displayForBox6
        ) {
          // console.log("line 2");
          const line_2 = document.createElement("div");
          line_2.setAttribute("id", "message");
          line_2.innerText = "Line 2";
          document.querySelector(".Winning_line").appendChild(line_2);
          line2 = 1;
        } else {
          line2 = 0;
        }
        if (
          displayForBox7 == displayForBox8 &&
          displayForBox8 == displayForBox9
        ) {
          //console.log("line 3");
          const line_3 = document.createElement("div");
          line_3.setAttribute("id", "message");
          line_3.innerText = "Line 3";
          document.querySelector(".Winning_line").appendChild(line_3);
          line3 = 1;
        } else {
          line3 = 0;
        }
        if (
          displayForBox1 == displayForBox5 &&
          displayForBox5 == displayForBox9
        ) {
          //console.log("line 4");
          const line_4 = document.createElement("div");
          line_4.setAttribute("id", "message");
          line_4.innerText = "Line 4";
          document.querySelector(".Winning_line").appendChild(line_4);
          line4 = 1;
        } else {
          line4 = 0;
        }
        if (
          displayForBox3 == displayForBox5 &&
          displayForBox5 == displayForBox7
        ) {
          //console.log("line 5");
          const line_5 = document.createElement("div");
          line_5.setAttribute("id", "message");
          line_5.innerText = "Line 5";
          document.querySelector(".Winning_line").appendChild(line_5);
          line5 = 1;
        } else {
          line5 = 0;
        }

        noOfLine =
          parseInt(line1) +
          parseInt(line2) +
          parseInt(line3) +
          parseInt(line4) +
          parseInt(line5);
        console.log(noOfLine);

        //console.log("you Win");
        winingValue = parseInt(currentBet) * (noOfLine * 2);
        console.log(winingValue);
        document.querySelector(".displayForWin").innerHTML = winingValue;
        balance = parseInt(balance) + parseInt(winingValue);
        console.log(balance);
        document.querySelector(".displayForTotalCredit").innerHTML = balance;
        //console.log(document.getElementsByClassName("Winning_line"));
        console.log(document.getElementById("message").childNodes[0]);
        //console.log(document.getElementsByClassName("Winning_line").childNodes[0]
      } else {
        const notWin = document.createElement("div");
        notWin.setAttribute("id", "message");
        notWin.innerText = "You did not Win";
        document.querySelector(".Winning_line").appendChild(notWin);
        //console.log("You did not Win");
        //console.log(document.getElementsByClassName("Winning_line"));
        console.log(document.getElementById("message").childNodes[0]);
      }
    }, 2000);
  } else {
  }
}
document.querySelector(".button").onclick = spin;
function rules(e) {
  window.open("../rules.png");
}
document.querySelector(".rules").onclick = rules;
