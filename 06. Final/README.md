Project #1: Slot Machine

1. OverView on the slot machine

- There 5 matching lines for this game to win.
- The player can choose the lines and place the bet
- If the lines that the player choose matches , the player will get win.
- With any line matches, the player will have a chance to get a free bonus game to win 2 times the bet

Below are the winning rules during normal game:
• Bet 1 line will win 2 times of the bet amounts
• Bet 2 lines with any line matches , win 1.75times of the bet amounts
• Bet 3 lines with any line matches , win 1.5 times of the bet amounts
• Bet 4 lines with any line matches , win 1.25 times of the bet amounts
• Bet 5 lines with any line matches , win 1 time of the bet amounts

Below are the winning rules during bunos game:
• Bet 1 line will win 4 times of the bet amounts
• Bet 2 lines with any line matches , win 3.5 times of the bet amounts
• Bet 3 lines with any line matches , win 3 times of the bet amounts
• Bet 4 lines with any line matches , win 2.5 times of the bet amounts
• Bet 5 lines with any line matches , win 2 time of the bet amounts

2. Step to play/place the bet

- Press cash in button to cash in the amount the player want. The player cash out by press the cash out button
- Press the up button to raise the bet . The player can press the down button to lower the bet.
- check the checkbow on the line that the player want to bet
- Press the Spin button to start the game.
- If the player win, the bonus game will be visible and execute to see whether the player win any bonus game.
- If the player win a bonus game, the player have to press the bonus spin to start the bonus round.
- when the bonus round execute finish, the player have to press the spin button to start the new round of game.

3. Coding

A. The array
• items aray - use for 3x3 box for the game
• bonus array - use for finding any free bonus game

B. betRaise function
• To increase everytime the player press up

C.betReduce function
• To decrease everytime the player press down

D.cashin function
• Prompt to ask player how much to cash in
• It will alert the player how much it cash in
• It will play a cash in sound
• The amount will add to the existing amount if the player cash in again
• If the player did not key in number, the prompt will pop up again

E.cashOut function
• Prompt to ask player how much to cash out
• It will alert the player how much it cash out
• It will play a cash out sound
• If the player cash out partially, the amount will deduct from the existing amount
• If the player did not key in number, the prompt will pop up again

F.spin function
• clear function will execute (will explain below)
• The condition for the spin function to work

- chosse the lines to bet
- place the bet
- the bet $ must be or equal to the credit(cashin) $
  •else it will alert a message to ask the play to cash in , place the bet or choose the betting line

• if the above condition fulfil, the cedit$ will deduct the bet valve
•
• the bonus game section will disapear
• it will delay of 2000 milisecond before it go to execute the noOfLineBet function and gameSpin function (these 2 function will explain below)

• If the player win

- it will calculate the win$ (time) base on the no of line bet multiply by the bet $
- it will print the folowing message

* "You have win " + noOfLine + " lines"
* "Congratulation! You Have Win!"
* display the winning $ and credit/add to the existing balance (credit)
* the bonus game section will appear and execute for get how many bonus game
* if there is not bonus game. it will print "You did not Win any bonus game"
* if there is bonus game . it will print the following

- "Congratulation! You have win " + bonusBox1.innerText + " free game"
- "Press the Bonus Spin to start the bonus round"
  +assign nooftime to 0

• If the player loss

- the following message will print :

* "You did not Win any bonus game"
* "Press the Spin to play"

G. Rules function
• to open a window to displace the rules when press on the rules button

H. clear function
• when the spin function execute, it will execute the following

- set the display for win to 0
- set the display for bonus win to 0
- remove all the message line that was created from the previous round game

I. line_1 function
• if the line 1 matches , assign line1 =1
• else assign line1 = 0

J. line_2 function
• if the line 2 matches , assign line2 =1
• else assign line2 = 0

K. line_3 function
• if the line 3 matches , assign line3 =1
• else assign line3 = 0

L. line_4 function
• if the line 4 matches , assign line4 =1
• else assign line4 = 0

M. line_5 function
• if the line 5 matches , assign line1 =1
• else assign line5 = 0

N.soundForWin function
• to set a winning sound

O.noOfLineBet function
• to check which line the player bet. if it bet on the line, it will assign 1 to the corresponding line
• it will print a message to show how many line was bet by the player

P. gameSpin function
• random choose a number from 0 to 3 and print to the respective box
• if the checkbox line is checked, the corresponding line funciton will execute
• it will calculate how many line win / how many line bet

Q. bonus function
• it excuete will the following condition

- no of the bonus game = 1
- no of time = 0
- bonus win $ =0

* if the above condition fulfil, it will execute the gamespin function
* it will execute similar to the normal game.
* if win in the bonus game , it will calculate with a higher winning. and print the following

- display the bonus win $ and assign the no of time to 1

* if loss, it will print a message that the player do not win any in the bonus game and press Spin to play the new game
  •else it will print alert for the player to press the spin for the new game when pressing the bonus spin button
