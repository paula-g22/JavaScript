// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// function duplicateEncode(str){
//     let word = str.toLowerCase();
//     let obj = {}
//     let newWord = ''
//     for (let e of word) {
//         if (e in obj) {
//             obj[e] = ')'
//         }
//         else {
//             obj[e] = '('
//         }
//     }
//     for (let e of word) 
//         newWord += obj[e]
    
//     return newWord;
// }

// console.log(duplicateEncode("(( @"));