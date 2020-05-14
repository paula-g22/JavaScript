/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the value of `education` to test your code
var education = "a Bachelor's degree";

// set the value of this based on a person's education
var salary = 0;

// your code goes here

switch (education) {
  case 'no high school diploma':
    salary = 25636;
    break;
  case 'a high school diploma':
    salary = 35256;
    break;
  case "an Associate's degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396;
}

console.log(`In 2015, a person with ${education} earned an average of $${salary.toLocaleString("en-US")}/year.`);

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
/*
var eatsPlants = true;
var eatsAnimals = true;
*/
/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

/*
var category = eatsPlants ? (eatsAnimals ? 'omnivore' : 'herbivore') : (eatsAnimals ? 'carnivore' : 'undefined');

console.log(category);
*/

/*
Imagine your software is running the inventory of a shoe store, a client needs to know in what colors do you have a particular shoe.

Instructions
Complete this switch statement with 3 possible colors: Red, Green and Blue.

The function needs to return true if the color is available or false if the color is not available.
*/

/*
function getColor(selection)
{
	switch(selection){
	    case 'RED':
		  case 'Red':
		  case 'red':
		  case 'GREEN':
		  case 'Green':
		  case 'green':
		  case 'BLUE':
		  case 'Blue':
		  case 'blue':
		    return true; 
		    //break; //peps me explicas porque hay q break aca
	    default :
	    	return false;//return false because the user pick a unavailable color
	      //break;               
	}
}

console.log(getColor('yellow'))
*/

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
/*
var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;
*/
/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE

/*

if ((shirtWidth >= 18) && (shirtWidth < 20) && (shirtLength >= 28) && (shirtLength < 29) && (shirtSleeve >= 8.13) && (shirtSleeve < 8.38)) {
  console.log('S');
} 
  else if ((shirtWidth >= 20) && (shirtWidth < 22) && (shirtLength === 29) && (shirtLength < 30) && (shirtSleeve === 8.38) && (shirtSleeve < 8.63)) {
    console.log('M');
  }
  else if ((shirtWidth >= 22) && (shirtWidth < 24) && (shirtLength >= 30) && (shirtLength < 31) && (shirtSleeve >= 8.63) && (shirtSleeve < 8.88)) {
    console.log('L');
  }
  else if ((shirtWidth >= 24) && (shirtWidth < 26) && (shirtLength >= 31) && (shirtLength < 33) && (shirtSleeve >= 8.88) && (shirtSleeve < 9.63)) {
    console.log('XL');
  }
  else if ((shirtWidth >= 26) && (shirtWidth < 28) && (shirtLength >= 33) && (shirtLength < 34) && (shirtSleeve >= 9.63) && (shirtSleeve < 10.13)) {
    console.log('2XL');
  }
  else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
    console.log('3XL');
  }
  else {
    console.log('NA')
  }

*/

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */
 
// change the values of `flavor`, `vessel`, and `toppings` to test your code
/*
var flavor = "vanilla";
var vessel = "cone";
var toppings = "peanuts";
*/
// Add your code here

// if (flavor === 'vanilla' || flavor === 'chocolate') {
//   if (vessel === 'cone' || vessel === 'bowl') 
//   if (toppings === 'sprinkles' || toppings === 'peanuts') {
//     console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
//   }
// }

//correct answer (because it has one conditional): 

/*
if ((flavor === 'vanilla' || flavor === 'chocolate') && (vessel === 'cone' || vessel === 'bowl') && (toppings === 'sprinkles' || toppings === 'peanuts')) {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
  }
*/



/*
Using the flowchart below, write the code to represent checking your balance at the ATM. The yellow diamonds represent conditional statements and the blue rectangles with rounded corners represent what should be printed to the console.
*/
/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */

/*
var balance = 0;
var checkBalance = true;
var isActive = false;

if (checkBalance === true && isActive === true && balance > 0) {
  console.log(`Your balance is $${balance}.`);
} else if (checkBalance === true && isActive === true && balance === 0 ) {
  console.log('Your account is empty.');
} else if (checkBalance === true && isActive === false) {
  console.log('Your account is no longer active.');
} else if (checkBalance === true && isActive === true && balance < 0) {
  console.log('Your balance is negative. Please contact bank.')
} else {
  console.log('Thank you. Have a nice day!')
}

//Udacity version (mejor está)
if (checkBalance === true) {
    // Cases when account is active. Now, the balance could be <, =, or > zero
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.");
    } 
    else if (isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
    // Case when account is NOT active
    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }  
} 
else {
  console.log("Thank you. Have a nice day!");
}
*/




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
/*
var weapon = "";
var solved = false;
var room = "dining room";
var suspect = "Mr. Parkes";
*/
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

// if (room === 'ballroom' && suspect === "Mr. Kalehoff") {
//   weapon = 'poison';
//   solved = true;
// } else if (room === 'gallery' && suspect === "Ms. Van Cleve") {
//     weapon = 'trophy'; 
//     solved = true;
// } else if (room === 'billiards room' && suspect === "Mrs. Sparr") {
//     weapon = 'pool stick';
//     solved = true;
// } else if (room === 'dining room' && suspect === "Mr. Parkes") {
//     weapon = 'knife'; 
//     solved = true; 
// } else {}


// if (solved) {
//   console.log(`${suspect} did it in the ${room} with the ${weapon}!`)
// }


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