Project #1: Slot Machine

\1. OverView on the slot machine

- There 5 matching lines for this game to win.
- The player can choose the lines and place the bet
- If the lines that the player choose matches , the player will get win.
- With any line matches, the player will have a chance to get a free bonus game to win 2 times the bet

Below are the winning rules during normal game:

- Bet 1 line will win 2 times of the bet amounts
- Bet 2 lines with any line matches , win 1.75times of the bet amounts
- Bet 3 lines with any line matches , win 1.5 times of the bet amounts
- Bet 4 lines with any line matches , win 1.25 times of the bet amounts
- Bet 5 lines with any line matches , win 1 time of the bet amounts

Below are the winning rules during bonus game:

- Bet 1 line will win 4 times of the bet amounts
- Bet 2 lines with any line matches , win 3.5 times of the bet amounts
- Bet 3 lines with any line matches , win 3 times of the bet amounts
- Bet 4 lines with any line matches , win 2.5 times of the bet amounts
- Bet 5 lines with any line matches , win 2 time of the bet amounts

\2. Step to play/place the bet

- Press cash in button to cash in the amount the player want. The player cash out by press the cash out button
- Press the up button to raise the bet. The player can press the down button to lower the bet.
- Check the checkbox on the line that the player want to bet
- Press the Spin button to start the game.
- If the player win, the bonus game will be visible and execute to see whether the player win any bonus game.
- If the player wins a bonus game, the player has to press the bonus spin to start the bonus round.
- When the bonus round execute finish, the player have to press the spin button to start the new round of game.

\3. Coding

1. The array
   - Items array - use for 3x3 box for the game
   - Bonus array - use for finding any free bonus game
1. ` `betRaise function
   - To increase every time the player press up
1. betReduce function
   - To decrease every time the player press down
1. ` `cashin function
   - Prompt to ask player how much to cash in
   - It will alert the player how much it cash in
   - It will play cash in sound
   - The amount will add to the existing amount if the player cash in again
   - If the player did not key in number, the prompt will pop up again
1. cashOut function
   - Prompt to ask player how much to cash out
   - It will alert the player how much it cash out
   - It will play cash out sound
   - If the player cash out partially, the amount will deduct from the existing amount
   - If the player did not key in number, the prompt will pop up again
1. spin function
   - Clear function will execute (will explain below)
   - The condition for the spin function to work - chose the lines to bet - place the bet - the bet "$
     must be or equal to the credit(cashin) $
   - Else it will alert a message to ask the play to cash in , place the bet or choose the betting line
   - If the above condition fulfil, the credit$ will deduct the bet valve
   - The bonus game section will disappear
   - It will delay of 2000 millisecond before it go to execute the noOfLineBet function and gameSpin function (these 2 function will explain below)
   - ` `If the player win
     - It will calculate the win$ (time) base on the no of line bet multiply by the bet $
     - It will print the following message
       - "You have win " + noOfLine + " lines"
       - ` `"Congratulation! You Have Win!"
       - ` `display the winning $ and credit/add to the existing balance (credit)
       - The bonus game section will appear and execute to get how many bonus games
       - If there is not bonus game. it will print "You did not Win any bonus game"
       - ` `If there is bonus game. It will print the following
     - ` `"Congratulation! You have win” + bonusBox1.innerText + “free game"
     - "Press the Bonus Spin to start the bonus round"
     - ` `assign nooftime to 0
   - ` `If the player loss
     - The following message will print:
       - "You did not Win any bonus game"
       - "Press the Spin to play"
1. Rules function

   - to open a window to displace the rules when press on the rules button

1. clear function
   - When the spin function execute, it will execute the following
     - set the display for win to 0
     - set the display for bonus win to 0
     - remove all the message line that was created from the previous round game
1. line_1 function
   - If the line 1 matches, assign line1 =1
   - Else assign line1 = 0
1. line_2 function
   - If the line 2 matches, assign line2 =1
   - Else assign line2 = 0
1. line_3 function
   - If the line 3 matches , assign line3 =1
   - Else assign line3 = 0
1. ` `line_4 function
   - If the line 4 matches , assign line4 =1
   - Else assign line4 = 0
1. line_5 function
   - If the line 5 matches , assign line1 =1
   - Else assign line5 = 0
1. soundForWin function
   - To set a winning sound
1. noOfLineBet function
   - To check which line the player bet. if it bet on the line, it will assign 1 to the corresponding line
   - It will print a message to show how many line was bet by the player
1. ` `gameSpin function
   - Random choose a number from 0 to 3 and print to the respective box
   - If the checkbox line is checked, the corresponding line function will execute
   - It will calculate how many line win / how many line bet
1. bonus function
   - It execute will the following condition
     - no of the bonus game = 1
     - no of time = 0
     - bonus win $ =0
     - If the above condition fulfil, it will execute the gamespin function
     - It will execute similar to the normal game.
     - If win in the bonus game, it will calculate with a higher winning. and print the following
     - display the bonus win $ and assign the no of time to 1
     - if loss, it will print a message that the player do not win any in the bonus game and press Spin to play the new game
   - ` `else it will print alert for the player to press the spin for the new game when pressing the bonus spin button

\4. Things that can be add on

- To ask the player whether they are over 18 years old. If they are over 18 years old, the player can process to play else they will be alert to leave.
- can put a condition for the player to play the bonus game (Must play the bonus game) before it can continue to play.
