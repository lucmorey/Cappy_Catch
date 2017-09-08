# Cappy Catch :bear:
--
*Your lawn has been overrun with Capybaras! (The largest rodent on earth!) Catch as many as you can, but don’t disturb the happy Quokkas!* 

	- Each player has one 30 second turn.
	- Click on as many Capybaras as you can.
	- Avoid the Quokkas, they like to eat points!
	- Adds 75 points for each Capybara click.
	- Subtracts 150 points for each Quokka click.

 *Player with the most points wins!*

- [Link](https://lucmorey.github.io/Cappy_Catch/) to game.

- [Link](https://trello.com/b/w64tQT84/cappy-catch) to trello.




**Walkthrough:**

Cappy Catch is a simple 2 player whack-a-mole style game that is set on a fifty square board made of divs. When game pieces are clicked points are awarded or deducted. The pieces then move randomly to different squares using a Math.random function and applying a .length  and putting it in an .eq(), which will select the div square number that corresponds to the random number generated. Then the function performs an ‘if’ condition that will append the game piece to the new square, but only if it is unpopulated. If the square is populated by another game piece, the function will continue running itself until an unpopulated square has been chosen.(Recursion)
The game pieces use an .on click that uses these functions to select an unpopulated square and append it there.

The start button triggers a function that first hides the overlay. (The overlay sits on top of the board like a piece of plexiglass, rendering it unresponsive.) The start button also starts the music, the countdown timer, and uses functions previously mentioned to  randomly move the game pieces to an unpopulated square every 1.5 seconds. Another function determines when the countdown is over and then switches players accordingly. The next function then compares the two scores and announces a winner, which is used in the final function, which calls it at the end of player 2’s turn.

**known errors:**


Capybara and Quokka noises don’t sound every single time you click on them, as if they can only sound once every two seconds or so. Reduced the length of the mp3’s to as short as possible, but did not solve the problem.

*- Created using HTML, CSS, JavaScript, and JQuery.*


