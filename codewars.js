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

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// function findOutlier(integers){
//     let odds = []
//     let evens = []
//     for (let e of integers) {
//         if (e%2 === 0) {
//             evens.push(e)
//         }
//         else {
//             odds.push(e)
//         }
//     }
//     if (odds.length === 1) 
//         return odds[0]
//     return evens[0]
//   }

  //most upvoted solution
//   function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }

//filter the 'friends' list and only return your friend, a name that has exactly four letters

// function friend(friends){
//     return friends.filter(friend => friend.length === 4)
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]))

// function printerError(s) {
//     let letters = 'abcdefghijklm'
//     let numerator = [] 
//     let denominator = s.length;
//     for (let e of s) {
//       if (letters.includes(e)) continue;
//       numerator.push(e)
//     }
    
//     return `${numerator.length}/${s.length}`
// }

//best answer
// function printerError(s) {
//     return s.match(/[^a-m]/g).length + "/" + s.length;
// }

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))

// function pigIt(str){
//     let words = str.split(' ')
//     let answer = ''
//     for (let e of words) {
//         if (e.match(/[^\W]/)) {
//             answer += e.substring(1)+e[0]+'ay '
//         }
//         else {
//             answer += e;  
//         }    
        
//     }
//     return answer.trim()
//   }

// function pigIt(str){
//     let words = str.split(' ')
//     let answer = ''
//     for (let e of words) {
//         answer = e.length > 1 ? answer += e.substring(1)+e[0]+'ay ' : answer += e + ' ';
//     }
//     return answer.trim()
//  }

// function pigIt(str){
//     let words = str.split(' ')
//     let answer = ''
//     for (let e of words) {
//         answer = e.match(/[^\W]/) ? answer += e.substring(1)+e[0]+'ay ' : answer += e
//     }
//     return answer.trim()
// }

//   console.log(pigIt('Pig latin s cool ?'))

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// #Example 1: a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// #Example 2: a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// let a1 = ["arp", "mice", "bull", "strong", "1.9", 'wh']
// let a2 = ["lively", "alive", "harp", "sharp", "armstrong", "1.9?", 'whistle']

// function inArray(array1,array2){
//     let r = []
//     for (let e2 of array2) {
//         for (let e1 of array1) {
//             if ((e2.includes(e1) && e1 !== e2) && (!r.includes(e1))){
//                 r.push(e1)
//             }
//         }
//     }
//     if (r.length > 1) {
//         r.sort((a,b) => {
//             if (a>b)
//                 return 1
//             return -1
//         })
//     }
//     return r;
// }

// console.log(inArray(a1,a2))

// [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]
// [ {name: 'Bart'}, {name: 'Lisa'} ]
// [ {name: 'Bart'} ]

// function list(names){
//     let answer = ''
//     if (names.length === 1) {
//        answer = names[0]['name']
//     }
//     else if (names.length > 1) {
//         for (let i = 0; i < names.length; i++) {
//             if (i < names.length-2) {
//                 answer += names[i]['name'] + ', ' 
//             }
//             else if (i === names.length -2) {
//                answer += names[i]['name'] + ' & ' 
//             }
//             else {
//                answer += names[i]['name'] 
//             }
//         }
//     }
//     return answer
//   }

function list(names){
    if (names.length === 1) {
        return names[0]['name']
    }
    let answer = '' 
    for (let e of names) {
        answer+= e.name + ', '
    }
    answer = answer.substring(0, answer.length-2)
    answer = answer.replace(/(.*),/, '$1 &')

    return answer;
  }

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Peps'}, {name: 'Luis'}, {name: 'Paula'}, {name: 'Emma'}, {name: 'Amber'} ]));

// function sumDigPow(a, b) {
//     let answer = [];
//     for (let i = a; i <= b; i++) {
//       if (i === helperFunc(i)) {
//         answer.push(i)
//       }
//     }
//     return answer;
// }

// function helperFunc(int) {
//   let num = int.toString()
//   let sum = 0
//   for (let i = 0; i < num.length; i++) {
//     sum += (Number(num[i])**(i+1))
//   }
//   return sum;
// }

// function sumDigPow(a, b) {
//     let answer = [];
//     for (let num = a; num <= b; num++) {
//         let int = num.toString()
//         let sum = 0
//         for (let i = 0; i < int.length; i++) {
//             sum += (Number(int[i])**(i+1))
//         }
//         if (num === sum) {
//             answer.push(num)
//         }
//     }
//     return answer;
// }

// console.log(sumDigPow(5, 500))


// for (let i = 0; i < x.length; i++) {
//   console.log( sum += (Number(x[i])**(i+1)) )
// }