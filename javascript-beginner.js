// let arr = [1,2,3,4,5]

// // function peps(x) {
// //   console.log(x)
// // }

// // //arrow functions

// // const pepsi = (x) => {
// //   console.log(x)
// // } //esto es lo mismo q the before function

// function findsEven(arr) {
//   for (let e of arr)
//     if (e%2 === 0)
//       console.log(e)
// }

// console.log(findsEven(arr))

// /*
//  * Programming Quiz: Murder Mystery (3-4)
//  */

// /*
//  * QUIZ REQUIREMENTS
//  * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
//  * 2. Your code should include a conditional statement
//  * 3. The variable `suspect` should use one of the provided values
//  * 4. The variable `weapon` should be based on the `room`
//  * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
//  * Example: Mr. Parkes did it in the dining room with the knife!
//  *
//  * 6. For unmatching combination of the suspect and the room, print nothing on the console
//  */

// /* ****************************************** */
// /* TESTING LOGIC */ 
// // Change the value of `room` and `suspect` to test your code

// // A room can be either of - dining room, gallery, ballroom, or billiards room
// var room = "billiards room";

// // A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// // Test your code by giving matching as well as unmatching names of the suspect
// var suspect = "Mr. Parkes"; 

// /* ****************************************** */

// /* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "";
var solved = false;
var room = "dining room";
var suspect = "Mr. Parkes";

// /*
// * To help solve this mystery, write a combination of conditional statements that:
// * 1. sets the value of weapon based on the room and
// * 2. sets the value of solved to true if the value of room matches the suspect's room
// */

/*
if (room === 'ballroom') {
  weapon = 'poison'; 
  if (suspect === "Mr. Kalehoff")
    solved = true;  
} else if (room === 'gallery') {
    weapon = 'trophy';
    if (suspect === "Ms. Van Cleve") {
      solved = true;
    }
} else if (room === 'billiards room') {
    weapon = 'pool stick';
    if (suspect === "Mrs. Sparr") {
      solved = true;
    }
} else if (room === 'dining room') {
    weapon = 'knife'; 
    if (suspect === "Mr. Parkes") {
      solved = true;
    } 
} else {
}
*/

if (room === 'ballroom' && suspect === "Mr. Kalehoff") {
  weapon = 'poison';
  solved = true;
} else if (room === 'gallery' && suspect === "Ms. Van Cleve") {
    weapon = 'trophy'; 
    solved = true;
} else if (room === 'billiards room' && suspect === "Mrs. Sparr") {
    weapon = 'pool stick';
    solved = true;
} else if (room === 'dining room' && suspect === "Mr. Parkes") {
    weapon = 'knife'; 
    solved = true; 
} else {}


if (solved) {
  console.log(`${suspect} did it in the ${room} with the ${weapon}!`)
}


// /* ****************************************** */
// // The code below will run only when `solved` is true
// if (solved) {
// 	console.log(/* your message goes here*/);
// }
// /* ****************************************** */



/*
 * Programming Quiz: Musical Groups (3-3)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */
 
// change the value of `musicians` to test your conditional statements
// var musicians = 2;

// your code goes here

// if (musicians <= 0) {
//     console.log("not a group");
//     } else if (musicians === 1) {
//         console.log("solo");
//     } else if (musicians === 2) {
//         console.log("duet");
//     } else if (musicians === 3) {
//         console.log("trio");
//     } else if (musicians === 4) {
//         console.log("quartet");
//     } else {
//         console.log("this is a large group");
//     }

// function musica(musicians) {
//   if (musicians <= 0) {
//     return "not a group";
//   } 
//   if (musicians === 1) {
//     return "solo");
//   }
//   if (musicians === 2) {
//     return "duet";
//   } 
//   if (musicians === 3) {
//     return "trio";
//   } 
//   if (musicians === 4) {
//     return "quartet";
//   } 
//   return "this is a large group";
// }

// console.log(musica(2));

// console.log('paunu');


/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */
 
 
// change the value of `number` to test your if...else statement
// var number = 2;

// if (number % 2 === 0) {
//     console.log("even");    
// } else {
//     console.log("odd");
// }



/*
 * Programming Quiz: One Awesome Message (2-12)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */
 
 /*
 * Example:
 * - Assuming, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the following message:
 * 
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

// var firstName = "Peps";
// var interest = "coding";
// var hobby = "read";

// var awesomeMessage = "Hi, my name is "+firstName+". I love "+interest+". In my spare time, I like to "+hobby+".";

// console.log(awesomeMessage);


/*
 * Programming Quiz: MadLibs (2-11)
 * 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */
 
 // your code goes here

// var adjective1 = "amazing";
// var adjective2 = "fun";
// var adjective3 = "entertaining";

// var madLib = "The Intro to Javascript course is " + adjective1 + ". " + "James and Julia are so " + adjective2 + ". " + "I cannot wait to work through the rest of this " + adjective3 + " content!";

// console.log(madLib);

/*
Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

Print the total to the JavaScript console.

Hint: 15% in decimal form is written as 0.15_._

TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
*/
/*
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * .15;
var total = bill + tip;

console.log('$' + total.toFixed(2));
*/

/*
 * Programming Quiz: Semicolons! (2-8)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have two variables -  `thingOne` and `thingTwo`
 * 2. Your code should only have one `console.log` statement
 * 3. Your code should print out the values of `thingOne` and `thingTwo` using concatenation
 * 4. Your code should contain semicolons at the end of each line
 */

// var thingOne = 'red';
// var thingTwo = 'blue';

// console.log(thingOne + ' ' + thingTwo);

// Number("Hello") *returns NaN

// "Hello" % 10 *returns NaN

/*
 * Programming Quiz: Yosa Buson (2-6)
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `haiku`
 * 2. Your code should use string concatenation
 * 3. Your poem should match the famous haiku poem
 */

// var line1 = "Blowing from the west\n"
// var line2 = "Fallen leaves together\n"
// var line3 = "In the east."

// var haiku = line1 + line2 + line3
// console.log(haiku);



/*
 * Programming Quiz: All Tied Up (2-5)
 
 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
*/
// var joke = "Why couldn't the shoes go out and play?\nThey were all \"tied\" up!"
// console.log(joke);

// 'green'=='blue'

/*
var myString = 'Paunu';

var ASCII_value = myString.charCodeAt(0);

console.log(ASCII_value);
*/

// "Up up\n\tdown down"

// console.log('The man whispered, \"please speak to me.\"')

// "Hello" + 5*10

// 2 + 2*2*11 - 4

// 3 <= 3

// 2 + 10 - 19 + 4 - 90 + 1

// -20 + -19 - (-10) - (-1) + 24

// (10/5) * 4 - 20

// 4096 % 12

// 3

// 2 + 890.3

// console.log('hola peps');