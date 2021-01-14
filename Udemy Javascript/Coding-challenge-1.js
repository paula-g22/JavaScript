let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

// if (markBMI > johnBMI) {
//     markHigherBMI = true;
// }
// else {
//     markHigherBMI = false;
// }

console.log(markBMI, johnBMI, markHigherBMI, "😄");
