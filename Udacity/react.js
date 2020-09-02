
/*
 * Programming Quiz: Using Sets (3-2)
 *
 * Create the following variables:
 *     - uniqueFlavors and set it to a new WeakSet object
 *     - flavor1 and set it equal to `{ flavor: 'chocolate' }`
 *     - flavor2 and set it equal to an object with property 'flavor' and value of your choice!
 *
 * Use the `.add()` method to add the objects `flavor1` and `flavor2` to `uniqueFlavors`
 * Use the `.add()` method to add the `flavor1` object (again!) to the `uniqueFlavors` set
 */

 const uniqueFlavors = new WeakSet();
 let flavor1 = {flavor: 'chocolate'};
 let flavor2 = {flavor: 'dulce de leche'};
 uniqueFlavors.add(flavor1);
 uniqueFlavors.add(flavor2);

 console.log(uniqueFlavors);

/*
 * Programming Quiz: Using Sets (3-1)
 *
 * Create a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 */

//  const myFavoriteFlavors = new Set();
//  myFavoriteFlavors.add('chocolate chip');
//  myFavoriteFlavors.add('cookies and cream');
//  myFavoriteFlavors.add('strawberry');
//  myFavoriteFlavors.add('vanilla');
//  myFavoriteFlavors.delete('strawberry');

//  console.log(myFavoriteFlavors);

/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 */

// class Vehicle {
// 	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
// 		this.color = color;
// 		this.wheels = wheels;
// 		this.horn = horn;
// 	}

// 	honkHorn() {
// 		console.log(this.horn);
// 	}
// }

// class Bicycle extends Vehicle {
//     constructor(color, wheels = 2, horn = 'honk honk'){
//         super(color, wheels, horn);
//     }
// }

// // your code goes here

// //tests
// const myVehicle = new Vehicle();
// myVehicle.honkHorn(); // beep beep
// const myBike = new Bicycle();
// myBike.honkHorn(); // honk honk




// function Sandwich(bread, meat, vegetables){
//     this.bread = bread;
//     this.meat = meat;
//     this.vegetables = vegetables;
// }

// let sub = new Sandwich('whole wheat', ['salami', 'prosciutto'], ['lettuce, tomato'])

// console.log(sub);