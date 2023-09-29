/* Exercise 1 - JS Fundamentals Review
1. In index.html, add a tag to link to this js file
2. Create a variable to keep score and give it an initial value. The value of the score variable will be changing, so be sure to use the correct variable keyword.
3. Use a DOM method to select the firefly picture by its id and assign it a variable. This value will not be changing, so be sure to use the correct variable keyword.
4. Similarly, select the #score p tag by its id and assign it a variable.
5. Also, select the game over div by its id and assign it a variable.
*/

let score = 0;
const firefly = document.querySelector('#firefly');
const scoreText = document.querySelector('#score');

/* Exercise 2 - CSS Review
1. In style.css, select the game over div by its id and hide it using the display property.
*/

/* Exercise 3 - Functions & Events Review
1. Create a function called scoring.
Inside scoring, increase the score by one and show the new score on the screen 
* Hint: Remember from Exercise 1, we already have variables for storing the score, the score element, and the firefly element.
2. To call the function, add a click event listener to the firefly. */



/* Exercise 4 - Style property, generating random numbers
1. Create a function called flyFirefly
Inside the function: 
2. Create a variable called randomNumTop
Set its value to a random number between 0 and 600
3. Create another variable called randomNumLeft
Set its value to a random number between 0 and 1200
4. Create a variable called newPositon
Set its value to a template literal. Insert the random numbers as values of the top and left CSS properties. Make sure to add px after the numbers
5. Use the cssText property to apply the new position
6. Call the function
*/



/* Exercise 5 - Timing functions 
1. Edit the function call in the last exercise to call function flyFirefly using setInterval every 1000 milliseconds
2. Assign the function call a variable called interval 
*/


/* Exercie 6
1. Create a function called end
Inside the function:
2. Use clearInterval to clear the interval variable
3. Use removeEventListener() to remove the listener on the firefly
4. Use the style property to set display to block on the game over div
5. Call function end using setTimeout() at 60000 milliseconds
*/

/* ********************************************************
Practice Session ******************************************

Make the firefly picture change every time the firefly moves. 
1. Create an array of firefly image file names, there are 3
2. Inside function flyFirefly():
 - Generate a random number between 0 and 3
 - Round hte number down using Math.floor()
 - Select one of the firefly images from the array using the random number
 - Use the src property to set the new picture.
 
 Bonus points:
 Show a game timer counting down the number of seconds left to play.
 Rotate the firefly picture when it moves.
 */