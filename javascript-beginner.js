let facebookProfile = {
  name: "Pepe",
  friends: 22,
  messages: ["hi, i'm Peps", "happy birthday peps", "I'm learning how to code"],
  postMessage: function addMessage(message) {
      let newMessage = facebookProfile.messages.push(message);
      return facebookProfile.messages;
  },
  deleteMessage: function(i) {
      let newArray = facebookProfile.messages.splice(i, 1);
      return facebookProfile.messages;
  },
  addFriend: function(i) {
    return facebookProfile.friends + i;  
  },
  removeFriend: function(i) {
      return facebookProfile.friends - i;
  }
};

console.log(facebookProfile.postMessage("how are you my peperoni"));

/*
* Programming Quiz: Bank Accounts 1 (7-3)
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have an object `savingsAccount` 
* - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
* - Your `savingsAccount` object should have a `printAccountSummary()` method
* - Your `printAccountSummary()` method should return the EXACT expected message
* - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
*/

/*
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  printAccountSummary: function () { return `Welcome!\nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`}
};

console.log(savingsAccount.printAccountSummary());
*/ 

/*
* Programming Quiz: Menu Items (7-2)
* Create an object named `breakfast`. 
* The object should contain properties for the `name`, `price`, and `ingredients`.
* Print the entire object on the console
*/

// your code goes here

/*
let breakfast = { 
  name: "The Lumberjack",
  price: "9.95",
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(breakfast);
*/ 

/*
* Programming Quiz: Umbrella (7-1)
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `umbrella`
* - The variable `umbrella` should be an object
* - Your `umbrella` object should have the `color` and `isOpen` property
* - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
* - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
*/

/*
var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  close: function() {
      if (umbrella.isOpen === false) {
          return "The umbrella is already closed!";
      } else {
          umbrella.isOpen = false;
          return "Julia closes the umbrella!";
      }
  }
};

console.log(umbrella);
*/ 
/*
* Programming Quiz: Nested Numbers (6-10)
* QUIZ REQUIREMENTS
*   - The `numbers` variable is an array of arrays.
*   - Use a nested `for` loop to cycle through `numbers`.
*   - Convert each even number to the string "even"
*   - Convert each odd number to the string "odd"
*/

/*
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
*/

/*
for (var row = 0; row < numbers.length; row++) {
for (var column = 0; column < numbers[row].length; column++) {
      if (numbers[row][column] % 2 === 0)
      console.log("even");
      else
      console.log("odd");
  }
}
*/ 

/*
for (var row = 0; row < numbers.length; row++) {
for (var column = 0; column < numbers[row].length; column++) {
      if (numbers[row][column] % 2 === 0)
      numbers[row][column] = "even";
      else
      numbers[row][column] = "odd";
  }
}

console.log(numbers);
*/

/*
* Programming Quiz: I Got Bills (6-9)
*
* Use the .map() method to take the bills array below and create a second array
* of numbers called totals. The totals array should contains each amount from the
* bills array but with a 15% tip added. Log the totals array to the console.
*
* For example, the first two entries in the totals array would be:
*
* [57.76, 21.99, ... ]
*
* Things to note:
*  - each entry in the totals array must be a number
*  - each number must have an accuracy of two decimal points
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `bills` and `totals`
* - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
* - Your `totals` array should be an array of numbers
* - Your code should print the `totals` array to the console
* - The output must be as described above. 
*/

/*
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(bill) {
  bill *= 1.15;
  return Number(bill.toFixed(2)); // returns it as a number with two decimal places
});

console.log(totals);
*/ 

/*
* Programming Quiz: Another Type of Loop (6-8)
* QUIZ REQUIREMENTS
* Use the existing `test` variable and write a `forEach` loop
* that adds 100 to each number that is divisible by 3.
*
* Things to note:
*  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
*  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
*  - Outside the loop, you can use `console.log` to verify the `test` variable 
*/

/*
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach (function(e, i, test) {
  if (e % 3 === 0)
  test[i] = e + 100;
}); 

console.log(test);

*/ 
/*
* Programming Quiz: Joining the Crew (6-6)
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `crew`
* - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
* - Your code should use the `push()` method to add new members to the `crew` array
* - Print the array on the console at the end
*/

/*
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor, sister, shepherd); 

console.log(crew);
*/ 

/*
* Programming Quiz: Quidditch Cup (6-5)
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a function `hasEnoughPlayers()`
* - Your function `hasEnoughPlayers()` should accept one parameter
* - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
* - Return true if the array size is atleast 7, otherwise false. 
*/

// your code goes here

/*
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(array) {
  if (team.length >= 7) 
      return true;
  else
      return false;
}
*/ 

/*
* Programming Quiz: Colors of the Rainbow (6-4)
*
* Use only the splice() method to modify the rainbow variable:
*  - remove "Blackberry"
*  - add "Yellow" and "Green"
*  - add "Purple"
*/

/*
var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2, 1, "Yellow", "Green"); 
rainbow.splice(5, 0, "Purple");

console.log(rainbow);
*/ 


/*
* Programming Quiz: The Price is Right (6-3)
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `prices`
* - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
* - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
*/

/*

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 1.22;
prices [2] = 49;
prices [6] = 1.15;

console.log(prices);

*/ 
/*
* Programming Quiz: Cry (5-5)
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `cry`
* - Your code should include a named function expression stored in the variable `cry`
* - Your code should call the function expression using the variable name, not the function name
* - Your function expression should return the expected output
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/


// your code goes here
/*
let cry = function cry () {
  return "boohoo!";
}

console.log(cry());
*/
/*
* Programming Quiz: Laugh (5-4)
*/

/*
* Programming Quiz: Inline Functions (5-6)
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have an `emotions()` function
* - Your code should call the `emotions()` function
* - Your `emotions()` function call should have an inline function expression passed as the second parameter
* - Your function expression should return the expected output
*/


// don't change this code
// emotions() function definition
/*
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
*/ 
// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
/*
emotions("happy", function myFunc(num) {
  let y = '';
  for (let x = 1; x <= num; x++) {
      y += 'ha';
      }
  return y + "!";
  });
*/ 
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `laugh`
* - Your code should include an anonymous function expression stored in the variable `laugh`
* - Your anonymous function expression should take one argument
* - Your anonymous function expression should return the correct number of `hahaha`\'s
*/

/*
var laugh = function(num) {
  let y = '';
  for (let x = 1; x <= num; x++) {
      y += 'ha';
  }
  return y + "!";
}

console.log(laugh(10));
*/
/*
// function expression catSays
var catSays = function(max) {
var catMessage = "";
for (var i = 0; i < max; i++) {
  catMessage += "meow ";
}
return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a `buildTriangle()` function
* - Your `buildTriangle()` function should take one argument (or you can say parameter)
* - Your `laugh()` function should build the triangle as describe above



// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(length) {
var y = '';
for (let x = 1; x <= length; x++) {
  y += makeLine(x);
}
return y
}


// test your code by uncommenting the following line

console.log(buildTriangle(10));

*/
/*
function isThisWorking(input) {
console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
return "Returning: I am returning this string!";
}

isThisWorking('peps');

function isThisWorking(input) {
console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}

isThisWorking(3);
*/
/*
* Programming Quiz: Laugh it Off 2 (5-2)
*
* Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
*
* Note:
*  - make sure your the final character is an exclamation mark ("!")
*  - make sure that your function produces the correct results when it is called multiple times
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a `laugh()` function
* - Your `laugh()` function should have one parameter named `num`
* - Your `laugh()` function should return the correct number of laughs
*/

/* 
function laugh(num) {
  let haHolder = '';
  for (let x = 1; x <= num; x++) {
      haHolder += 'ha';
   }
  return haHolder + "!";
}

console.log(laugh(5));
*/

/*
* Programming Quiz: Find my Seat (4-8)
* 
* Write a nested for loop to print out all of the different seat combinations in the theater.
* The first row-seat combination should be 0-0 
* The last row-seat combination will be 25-99
* 
* Things to note: 
*  - the row and seat numbers start at 0, not 1
*  - the highest seat number is 99, not 100
*/

/*
* QUIZ REQUIREMENTS
* - Your code should use a nested `for` loop'
* - Your code should produce the expected output, as explained above
*/

// Write your code here
/*
for (let x = 0; x <= 25; x++) {
  for (let y = 0; y <= 99; y++) {
      console.log(x+"-"+y)
  }
}

for (var x = 0; x < 5; x = x + 1) {
for (var y = 0; y < 3; y = y + 1) {
  console.log(x + "," + y);
}
}
*/
/*
* Programming Quiz: Countdown, Liftoff! (4-3)
* 
* Using a while loop, print out the countdown output above.
*/

/*
* QUIZ REQUIREMENTS
* - Your code should include a `while` loop
* - Your `while` loop should have a stop condition
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/


// your code goes here

/*
let seconds = 60;

while (seconds >= 0) {
  if (seconds === 50) {
      console.log("Orbiter transfers from ground to internal power");
  } else if (seconds === 31) {
      console.log("Ground launch sequencer is go for auto sequence start");
  } else if (seconds === 16) {
      console.log("Activate launch pad sound suppression system");
  } else if (seconds === 10) {
      console.log("Activate main engine hydrogen burnoff system");
  } else if (seconds === 6) {
      console.log("Main engine start");
  } else if (seconds === 0) {
      console.log("Solid rocket booster ignition and liftoff!")
  } else {
      console.log(`T-${seconds} seconds`);
  }
  seconds = seconds - 1
}

//udacity used 'n' instead of seconds which makes more sense

*/

/*
* Programming Quiz: 99 Bottles of Juice (4-2)
*
* Use the following `while` loop to write out the song "99 bottles of juice".
* Log the your lyrics to the console.
*
* Note
*   - Each line of the lyrics needs to be logged to the same line.
*   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `num` with a starting value of `99`
* - Your code should include a `while` loop
* - Your `while` loop should have a stop condition
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/


//var num = 99;

/* // pepe's code below:

while ((num <= 99) && (num >= 1)) {
  if ((num != 1) && (num != 2)) {
      console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num -1} bottles of juice on the wall!`);
  } else if (num === 2) {
      console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num -1} bottle of juice on the wall!`);
  } else {
      console.log(`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${num -1} bottles of juice on the wall!`);
  }
  num = num - 1;
}
*/

/*
while (num >= 1) {
  if ((num != 1) && (num != 2)) {
      console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num -1} bottles of juice on the wall!`);
  } else if (num === 2) {
      console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num -1} bottle of juice on the wall!`);
  } else {
      console.log(`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${num -1} bottles of juice on the wall!`);
  }
  num = num - 1;
}
*/

//Udacity answer:
/*
var num = 99;

while (num >=1) {
  // Last iteration. Note occurances of bottle, bottle, bottleS
  if (num === 1) {
      console.log(num + " bottle of juice on the wall! "
                  + num + " bottle of juice! Take one down, pass it around... "
                  + (num-1) + " bottles of juice on the wall!");
  }
  // Second-last iteration. Note occurances of bottleS, bottleS, bottle
  else if (num === 2){
      console.log(num + " bottles of juice on the wall! "
                  + num + " bottles of juice! Take one down, pass it around... "
                  + (num-1) + " bottle of juice on the wall!");
  }
  // All other iterations. Note occurances of bottleS, bottleS, bottleS
  else {
      console.log(num + " bottles of juice on the wall! "
                  + num + " bottles of juice! Take one down, pass it around... "
                  + (num-1) + " bottles of juice on the wall!");
  }
  num = num - 1;
}
*/

/*
* Programming Quiz: JuliaJames (4-1)
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `x` with a starting value of `1`
* - Your code should include a `while` loop
* - Your `while` loop should have a stop condition
* - Your code should use a conditional statement
* - Your code should increment `x` by `1` each time the loop executes
* - Your code should produce the expected output
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/

/*
var x = 1;

while (x <= 20) {
  if ((x % 3 === 0) && (x % 5 === 0)) {
    console.log("JuliaJames");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else if (x % 5 === 0) {
    console.log("James");
  } else {
    console.log(x);
  }
  x = x + 1;
}
*/
//estaba bien, ask Titi about proper syntax (lo q queda mas lindo)


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
// var education = "a Bachelor's degree";

// set the value of this based on a person's education
// var salary = 0;

// your code goes here

/*
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
*/ 

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