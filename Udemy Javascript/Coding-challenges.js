
//coding-challenge-4

const bill = 430;
let tip = bill < 50 || bill > 300 ? bill*.20 : bill*.15;


console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}.`);

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
