// function musica(musicians) {
//   if (musicians <= 0) {
//     return "not a group";
//   } 
//   if (musicians === 1) {
//     return "solo";
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

// console.log(musica(-2));
/*
let musicians = -1
*/
// function musica(musicians) {
//   switch (true) {
//     case musicians <= 0:
//       return "not a group"
//     case musicians === 1:
//       return "solo"
//     case musicians === 2:
//       return "duet"
//     case musicians === 3:
//       return "trio"
//     case musicians === 4:
//       return "quartet"
//     default:
//       return "this is a large group"
//   }
// }

// console.log(musica(80))
/*
function musica(musicians) {
  if (musicians <= 0) 
    return "not a group"
 
  switch(musicians) {
    case 1:
      return "solo"
    case 2:
      return "duet"
    case 3:
      return "trio"
    case 4:
      return "quartet"
    default:
      return "this is a large group"
  }
}

console.log(musica(-1))
*/



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

// var madLib = "The Intro to Javascript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!";

// var madLib = `The Intro to Javascript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;



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


//----------------------------------

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