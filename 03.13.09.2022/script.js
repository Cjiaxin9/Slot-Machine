const items = ["🍭", "🍌", "⛄️", "🍎"];

// bet increase
let betNo = document.querySelector(".displayForBet").innerHTML;
function betRaise(e) {
  if (betNo < 100000000) {
    betNo++;
    document.querySelector(".displayForBet").innerHTML = betNo;
  }
}

document.querySelector(".bet-up").onclick = betRaise;

// bet decrease
function betReduce(e) {
  if (betNo > 0) {
    betNo--;
    document.querySelector(".displayForBet").innerHTML = betNo;
  }
}

document.querySelector(".bet-down").onclick = betReduce;

// cash in
let cashInValue = 0;
let newCashIN = 0;
function cashin() {
  const cashInValue = prompt("Enter the amount to cash in $", "");
  const cashInBalance = document.querySelector(
    ".displayForTotalCredit"
  ).innerHTML;

  if (parseFloat(cashInValue)) {
    newCashIN = parseFloat(cashInBalance) + parseFloat(cashInValue); //balance + cash in value

    document.querySelector(".displayForTotalCredit").innerHTML = newCashIN;

    alert("you have cash in $" + cashInValue);
  } else {
    cashin();
  }
}
document.querySelector(".CashIn").onclick = cashin;

// cash out

let newCashOut = 0;
function cashOut() {
  const cashOutBalance = document.querySelector(
    ".displayForTotalCredit"
  ).innerHTML;
  const cashOutValue = prompt("Enter the amount to cash out $", cashOutBalance);

  if (parseFloat(cashOutValue)) {
    newCashOut = parseFloat(cashOutBalance) - parseFloat(cashOutValue); //balance + cash in value

    document.querySelector(".displayForTotalCredit").innerHTML = newCashOut;

    alert("you have cash out $" + cashOutValue);
  } else {
    cashOut();
  }
}
document.querySelector(".CashOut").onclick = cashOut;

// declare a name for all the boxes to retrieve the value for individual box
let displayForBox1 = document.querySelector(".box1");
let displayForBox2 = document.querySelector(".box2");
let displayForBox3 = document.querySelector(".box3");
let displayForBox4 = document.querySelector(".box4");
let displayForBox5 = document.querySelector(".box5");
let displayForBox6 = document.querySelector(".box6");
let displayForBox7 = document.querySelector(".box7");
let displayForBox8 = document.querySelector(".box8");
let displayForBox9 = document.querySelector(".box9");

// set the winning line to 0
let noOfLine,
  line1,
  line2,
  line3,
  line4,
  line5 = 0;

function spin(e) {
  clear(); // clear the message and set the value of the winning to 0

  const currentBet = document.querySelector(".displayForBet").innerHTML;
  const currentbalance = document.querySelector(
    ".displayForTotalCredit"
  ).innerHTML;
  //check if any one of the checkbox tick else it will ask to tick the line to bet
  if (
    document.querySelector(".switch1").checked ||
    document.querySelector(".switch2").checked ||
    document.querySelector(".switch3").checked ||
    document.querySelector(".switch4").checked ||
    document.querySelector(".switch5").checked
  ) {
    //execute if the current value > bet value else it will prompt to topup
    if (parseFloat(currentbalance) > parseFloat(currentBet)) {
      let balance = parseFloat(currentbalance) - parseFloat(currentBet);

      document.querySelector(".displayForTotalCredit").innerHTML = balance; // display the balance value  after deduct the bet

      //2000 milisecond the function will execute
      setTimeout(function () {
        // random choose a number from 0 to 3  and print to the respective box
        displayForBox1.innerText = items[Math.floor(Math.random() * 4)];

        displayForBox2.innerText = items[Math.floor(Math.random() * 4)];
        displayForBox3.innerText = items[Math.floor(Math.random() * 4)];
        displayForBox4.innerText = items[Math.floor(Math.random() * 4)];
        displayForBox5.innerText = items[Math.floor(Math.random() * 4)];
        displayForBox6.innerText = items[Math.floor(Math.random() * 4)];
        displayForBox7.innerText = items[Math.floor(Math.random() * 4)];
        displayForBox8.innerText = items[Math.floor(Math.random() * 4)];
        displayForBox9.innerText = items[Math.floor(Math.random() * 4)];

        //to execute if any check box is tick
        // execute if check box 1 is tick (for Line 1)
        if (document.querySelector(".switch1").checked) {
          line_1();
        } else {
          line1 = 0;
        }

        // execute if check box 2 is tick (for Line 2)
        if (document.querySelector(".switch2").checked) {
          line_2();
        } else {
          line2 = 0;
        }

        // execute if check box 3 is tick (for Line 3)
        if (document.querySelector(".switch3").checked) {
          line_3();
        } else {
          line3 = 0;
        }

        // execute if check box 4 is tick (for Line 4)
        if (document.querySelector(".switch4").checked) {
          line_4();
        } else {
          line4 = 0;
        }

        // execute if check box 5 is tick (for Line 5)
        if (document.querySelector(".switch5").checked) {
          line_5();
        } else {
          line5 = 0;
        }

        // to calculate the winning time
        noOfLine =
          parseFloat(line1) +
          parseFloat(line2) +
          parseFloat(line3) +
          parseFloat(line4) +
          parseFloat(line5);

        //execute if there is value for the noofline esle it will just print the not winning message
        if (noOfLine != 0) {
          const winMessage = document.createElement("div");
          winMessage.setAttribute("id", "message");
          winMessage.innerText = "Congratulation! You Have Win!";
          document.querySelector(".Winning_line").appendChild(winMessage);
          winingValue = parseFloat(currentBet) * noOfLine;
          document.querySelector(".displayForWin").innerHTML = winingValue;
          balance = parseFloat(balance) + parseFloat(winingValue);
          document.querySelector(".displayForTotalCredit").innerHTML = balance;
        } else {
          const notWin = document.createElement("div");
          notWin.setAttribute("id", "message");
          notWin.innerText = "You did not Win";
          document.querySelector(".Winning_line").appendChild(notWin);
        }
      }, 2000);
    } else {
      alert("You have not enough cash. Please cash in more money");
    }
  } else {
    alert("Please choose the Betting Line");
  }
}
document.querySelector(".button").onclick = spin;

// rules
function rules(e) {
  window.open("../rules.png");
}
document.querySelector(".rules").onclick = rules;

// clear the message can the winning values
function clear() {
  document.querySelector(".displayForWin").innerHTML = "0";

  let winningLineList = [...document.querySelector(".Winning_line").childNodes];

  if (winningLineList.length > 0) {
    for (let i = 0; i < winningLineList.length; i++) {
      winningLineList[i].remove();
    }
  }
}

// fucntion for line 1
function line_1() {
  if (
    displayForBox1.innerText == displayForBox2.innerText &&
    displayForBox2.innerText == displayForBox3.innerText
  ) {
    const line_1 = document.createElement("div");
    line_1.setAttribute("id", "message");
    line_1.innerText = "Line 1";
    document.querySelector(".Winning_line").appendChild(line_1);
    line1 = 1;
  } else {
    line1 = 0;
  }
}

// function for line 2
function line_2() {
  if (
    displayForBox4.innerText == displayForBox5.innerText &&
    displayForBox5.innerText == displayForBox6.innerText
  ) {
    const line_2 = document.createElement("div");
    line_2.setAttribute("id", "message");
    line_2.innerText = "Line 2";
    document.querySelector(".Winning_line").appendChild(line_2);
    line2 = 2;
  } else {
    line2 = 0;
  }
}

// function for line 3
function line_3() {
  if (
    displayForBox7.innerText == displayForBox8.innerText &&
    displayForBox8.innerText == displayForBox9.innerText
  ) {
    const line_3 = document.createElement("div");
    line_3.setAttribute("id", "message");
    line_3.innerText = "Line 3";
    document.querySelector(".Winning_line").appendChild(line_3);
    line3 = 1.5;
  } else {
    line3 = 0;
  }
}
// function for line 4
function line_4() {
  if (
    displayForBox1.innerText == displayForBox5.innerText &&
    displayForBox5.innerText == displayForBox9.innerText
  ) {
    const line_4 = document.createElement("div");
    line_4.setAttribute("id", "message");
    line_4.innerText = "Line 4";
    document.querySelector(".Winning_line").appendChild(line_4);
    line4 = 0.75;
  } else {
    line4 = 0;
  }
}
// function for line 5
function line_5() {
  if (
    displayForBox3.innerText == displayForBox5.innerText &&
    displayForBox5.innerText == displayForBox7.innerText
  ) {
    const line_5 = document.createElement("div");
    line_5.setAttribute("id", "message");
    line_5.innerText = "Line 5";
    document.querySelector(".Winning_line").appendChild(line_5);
    line5 = 0.5;
  } else {
    line5 = 0;
  }
}
