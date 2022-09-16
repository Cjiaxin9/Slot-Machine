const items = ["🍭", "🍌", "⛄️", "🍎"];
const bonusArr = ["0", "1", "0"];

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
    new Audio("cashinsound.mp3").play();
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
    new Audio("cashoutsound.mp3").play();
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
  let currentBet = document.querySelector(".displayForBet").innerHTML;
  let currentbalance = document.querySelector(
    ".displayForTotalCredit"
  ).innerHTML;

  //check if player place bet
  if (parseFloat(currentBet) != "0") {
    //check if any one of the checkbox tick else it will ask to tick the line to bet
    if (
      document.querySelector(".switch1").checked ||
      document.querySelector(".switch2").checked ||
      document.querySelector(".switch3").checked ||
      document.querySelector(".switch4").checked ||
      document.querySelector(".switch5").checked
    ) {
      document.querySelector(".bonusGame").style.visibility = "hidden";

      //execute if the current value > bet value else it will prompt to topup
      if (parseFloat(currentbalance) >= parseFloat(currentBet)) {
        let balance = parseFloat(currentbalance) - parseFloat(currentBet);

        document.querySelector(".displayForTotalCredit").innerHTML = balance; // display the balance value  after deduct the bet

        //2000 milisecond the function will execute
        setTimeout(function () {
          //check the nos of bet line
          noOfLineBet();

          gameSpin();
          //execute if there is value for the noofline esle it will just print the not winning message
          if (noOfLine != 0) {
            soundForWin();

            if (parseFloat(totalBetLine) == 1) {
              winingValue = parseFloat(currentBet) * parseFloat(2);
            } else if (parseFloat(totalBetLine) == 2) {
              winingValue = parseFloat(currentBet) * parseFloat(1.75);
            } else if (parseFloat(totalBetLine) == 3) {
              winingValue = parseFloat(currentBet) * parseFloat(1.5);
            } else if (parseFloat(totalBetLine) == 4) {
              winingValue = parseFloat(currentBet) * parseFloat(1.25);
            } else if (parseFloat(totalBetLine) == 5) {
              winingValue = parseFloat(currentBet) * parseFloat(1);
            }
            // print how many line bet that win
            const lineMessage = document.createElement("div");
            lineMessage.setAttribute("id", "message");
            lineMessage.innerText = "You have win " + noOfLine + " lines";
            document.querySelector(".Winning_line").appendChild(lineMessage);

            // print win message
            const winMessage = document.createElement("div");
            winMessage.setAttribute("id", "message");
            winMessage.innerText = "Congratulation! You Have Win!";
            document.querySelector(".Winning_line").appendChild(winMessage);

            // print the balance
            document.querySelector(".displayForWin").innerHTML = winingValue;
            balance = parseFloat(balance) + parseFloat(winingValue);
            document.querySelector(".displayForTotalCredit").innerHTML =
              balance;

            //bonus spin
            document.querySelector(".bonusGame").style.visibility = "visible";
            let bonusBox1 = document.querySelector(".bonusBox");
            bonusBox1.innerText = bonusArr[Math.floor(Math.random() * 3)];

            //bonus message
            if (parseFloat(bonusBox1.innerText) == "1") {
              //free game message
              const bonusmessage = document.createElement("div");
              bonusmessage.setAttribute("id", "message");
              bonusmessage.innerText =
                "Congratulation! You have win " +
                bonusBox1.innerText +
                " free game";
              document.querySelector(".Winning_line").appendChild(bonusmessage);

              //instruction for free game
              const bonusmessage2 = document.createElement("div");
              bonusmessage2.setAttribute("id", "message");
              bonusmessage2.innerText =
                "Press the Bonus Spin to start the bonus round";
              document
                .querySelector(".Winning_line")
                .appendChild(bonusmessage2);

              // no of time execute the free game
              let nooftime = 0;
              //assign the no of time to this object of the function
              //so that we can access it outside
              this.nooftime = nooftime;
            } else {
              //no game message
              const notWinBonusGame = document.createElement("div");
              notWinBonusGame.setAttribute("id", "message");
              notWinBonusGame.innerText = "You did not Win any bonus game";
              document
                .querySelector(".Winning_line")
                .appendChild(notWinBonusGame);
              const notWin2 = document.createElement("div");
              notWin2.setAttribute("id", "message");
              //next instruction for not winning a free game
              notWin2.innerText = "Press the Spin to play";
              document.querySelector(".Winning_line").appendChild(notWin2);

              //assign some number that is not equal to 0 so that it the bonus spin button will not work
              let nooftime = 1;
              //assign the no of time to this object of the function
              //so that we can access it outside
              this.nooftime = nooftime;
            }
          } else {
            //message for not winning in the beginning round
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
  } else {
    alert("Please place your bet");
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
  //clear the bonus $ display and win$ display
  document.querySelector(".displayForWin").innerHTML = "0";
  document.querySelector(".displayForBonusWin").innerHTML = "0";

  //clear the messages
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
    line2 = 1;
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
    line3 = 1;
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
    line4 = 1;
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
    line5 = 1;
  } else {
    line5 = 0;
  }
}

//sound for winning
function soundForWin() {
  new Audio("sound.wav").play();
}

// set the winning line to 0
let totalBetLine,
  betline1,
  betline2,
  betline3,
  betline4,
  betline5,
  countTimeWin = 0;

// to know betting on what line
function noOfLineBet() {
  if (document.querySelector(".switch1").checked) {
    betline1 = 1;
  } else {
    betline1 = 0;
  }

  if (document.querySelector(".switch2").checked) {
    betline2 = 1;
  } else {
    betline2 = 0;
  }

  if (document.querySelector(".switch3").checked) {
    betline3 = 1;
  } else {
    betline3 = 0;
  }

  if (document.querySelector(".switch4").checked) {
    betline4 = 1;
  } else {
    betline4 = 0;
  }

  if (document.querySelector(".switch5").checked) {
    betline5 = 1;
  } else {
    betline5 = 0;
  }

  totalBetLine =
    parseFloat(betline1) +
    parseFloat(betline2) +
    parseFloat(betline3) +
    parseFloat(betline4) +
    parseFloat(betline5);

  // to print how many bet line for this round
  const lineMessage = document.createElement("div");
  lineMessage.setAttribute("id", "message");
  lineMessage.innerText = "You have bet " + totalBetLine + " lines";
  document.querySelector(".Winning_line").appendChild(lineMessage);
}

function gameSpin() {
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
}

// bonus game
let bonusWiningValue = 0;

function bonus(e) {
  let currentBet = document.querySelector(".displayForBet").innerHTML;
  let currentbalance = document.querySelector(
    ".displayForTotalCredit"
  ).innerHTML;
  const bonusmessage1 = document.querySelector(".bonusBox");
  let bonusWiningValue = document.querySelector(
    ".displayForBonusWin"
  ).innerHTML;

  if (
    (parseFloat(nooftime) == "1" &&
      parseFloat(bonusmessage1.innerText) == "0" &&
      parseFloat(bonusWiningValue) == "0") ||
    (parseFloat(nooftime) == "1" &&
      parseFloat(bonusmessage1.innerText) != "0") ||
    parseFloat(bonusWiningValue) != "0"
  ) {
    alert("Press the Spin to play");
  }

  //execute when 1 bonus game
  if (
    parseFloat(bonusmessage1.innerText) == "1" &&
    parseFloat(bonusWiningValue) == "0" &&
    parseFloat(nooftime) == "0"
  ) {
    gameSpin();
    if (noOfLine != 0) {
      soundForWin();

      if (parseFloat(totalBetLine) != 0) {
        if (parseFloat(totalBetLine) == 1) {
          bonusWiningValue = parseFloat(currentBet) * (parseFloat(2) * 2);
        } else if (parseFloat(totalBetLine) == 2) {
          bonusWiningValue = parseFloat(currentBet) * (parseFloat(1.75) * 2);
        } else if (parseFloat(totalBetLine) == 3) {
          bonusWiningValue = parseFloat(currentBet) * (parseFloat(1.5) * 2);
        } else if (parseFloat(totalBetLine) == 4) {
          bonusWiningValue = parseFloat(currentBet) * (parseFloat(1.25) * 2);
        } else if (parseFloat(totalBetLine) == 5) {
          bonusWiningValue = parseFloat(currentBet) * (parseFloat(1) * 2);
        }

        //calculation to add in the bonus to the current balance

        balanebonus = parseFloat(currentbalance) + parseFloat(bonusWiningValue);
        document.querySelector(".displayForTotalCredit").innerHTML =
          balanebonus;

        // instruction for end game
        const endMessage = document.createElement("div");
        endMessage.setAttribute("id", "message");
        endMessage.innerText =
          "You have end the bonus game, press the Spin to play";
        document.querySelector(".Winning_line").appendChild(endMessage);
        nooftime = 1;
      } else {
        //print a message whwn do not win any game
        const notWin = document.createElement("div");
        notWin.setAttribute("id", "message");
        notWin.innerText = "You did not Win any bonus game";
        document.querySelector(".Winning_line").appendChild(notWin);
        //instruction for next when no bonus game win
        const notWin2 = document.createElement("div");
        notWin2.setAttribute("id", "message");
        notWin2.innerText =
          "You have end the bonus game, press the Spin to play";
        document.querySelector(".Winning_line").appendChild(notWin2);
        //assign some number that is not equal to 0 so that it the bonus spin button will not work
        nooftime = 1;
      }
    } else {
      // print if not winning in the bonus game
      const notWin = document.createElement("div");
      notWin.setAttribute("id", "message");
      notWin.innerText = "You did not Win any in the bonus game";
      document.querySelector(".Winning_line").appendChild(notWin);
      //instruction for next when not in the bonus game
      const notWin2 = document.createElement("div");
      notWin2.setAttribute("id", "message");
      notWin2.innerText = "Press the Spin to play";
      document.querySelector(".Winning_line").appendChild(notWin2);
      //assign some number that is not equal to 0 so that it the bonus spin button will not work
      nooftime = 1;
    }
  }
}

document.querySelector(".bonusSpin").onclick = bonus;
