'use strict';

//coding-challenge#2 arrays

const calcTip = bill => bill < 50 || bill > 300 ? bill*.20 : bill*.15;

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

console.log(calcTip(100));
console.log(bills)
console.log(tips)
console.log(total)


//coding-challenge#1 functions

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// let avgKoalas = calcAverage(23, 34, 27)

// let avgDolphins = calcAverage(85, 54, 41);

// function checkWinner (avgKoalas, avgDolphins){
//     if(avgKoalas >= avgDolphins*2){
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//     } else if (avgDolphins >= avgKoalas*2){
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//     } else {
//         return `Neither team wins`
//     }
// }

// console.log(checkWinner(avgKoalas, avgDolphins))

//coding-challenge-4

// const bill = 430;
// let tip = bill < 50 || bill > 300 ? bill*.20 : bill*.15;


// console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}.`);

//coding-challenge-3
// let scoreDolphins = (97 + 112 + 101) / 3;
// let scoreKoalas = (109 + 95 + 106) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log('Dolphins are the winners!')
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >=100){
//     console.log("It's a tie!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log('Koalas are the winners!')
// } else{
//     console.log(`The teams didn't score enough points. No winner could be determined.`)
// }

//coding-challenge-1
// let markHeight = 1.69;
// let markWeight = 78;
// let johnHeight = 1.95;
// let johnWeight = 92;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;

// // if (markBMI > johnBMI) {
// //     markHigherBMI = true;
// // }
// // else {
// //     markHigherBMI = false;
// // }

// console.log(markBMI, johnBMI, markHigherBMI, "😄");
