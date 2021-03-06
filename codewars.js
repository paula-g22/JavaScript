//Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array.

// function double(arr){
//   return arr.map(num => num * 2)
// }

// console.log(double([1,2,3]))

function add(arr){
  return arr.reduce((acc, curr) => acc + curr)
  // return total;
}

console.log(add([1,2,3,4,5,6]))



//Find the next biggest number by rearranging the number, if not possible return -1
// function nextBigger(n){
//   console.log(n)
//   n = n.toString().split('') // converts number to an array
//   let number;
//   let p;
//   let pivot;
//   let right;
//   let next;
//   for (let i=n.length-1; i > 0; i--){
//     if (n[i] > n[i-1]){
//       p = i-1 // finds the index of the 'pivot' point
//       break;
//     }
//   }
//   if (p >= 0){
//     right = n.splice(p) // gets the right side of the array at the pivot point
//     pivot = right[0] // the pivot number
//     right = right.sort() // sorts the right side from lowest to highest
//     next = right.splice(right.lastIndexOf(pivot)+1, 1) // gets the next highest number to account for multiple numbers
//     number = +n.concat(next).concat(right).join('')
//     return number;
//   }
//   else return -1
// }

// console.log(nextBigger(1018253))

// 1, 2, 2, 2, 5

//Short Code from Kata Code Wars user
// function nextBigger(n){
//   var arr = n.toString().split("").reverse();
//   var i = arr.findIndex((d, _i) => d < arr[_i-1]);
//   console.log(arr, i)
//   if (i === -1) { return -1; }
//   var subarr = arr.slice(0, i);
//   console.log(subarr);
//   var j = subarr.findIndex((d) => d > arr[i]);
//   console.log(j)
//   subarr.splice(j, 1, arr[i]);
//   console.log(subarr)
//   return parseInt(arr.slice(i+1).reverse().concat(arr[j]).concat(subarr).join(""));
// }

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// let next = beasts.splice(2,1).concat(beasts)

// console.log(next);


//Josephus permutation

// function josephus(items,k){
//   // let last = k-1;
//   let removed = []
//   var i = 0
//       len = items.length;
//     while (len = items.length) {
//         i = (i + (k-1)) % len;
//         console.log(i % len)
//         removed = removed.concat(items.splice(i, 1);
//     }
//   return removed;
// }

// function josephus(items, k) {
//   arr = [...arr]
  
//   const len = arr.length
//   let current = -1
//   let answer = []
  
//   for (let i=0; i<len; i++) {
      
//       for (let j=0; j<k; j++ ) {
//           current++
//           if (current > arr.length-1)
//               current = 0
//       }
      
//       answer.push( arr.splice(current, 1)[0] )
//       current--
//   }
  
//   return answer
// }

// console.log(josephus(['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], 4))

// let arr = ['b', 'i', 'f', 'e', 'l', 'a', 'n', 'a']
// let k = 2

// let last = k-1
// let removed = [];
// let removed = arr.reduce((acc, val, index) => {
//   console.log(acc);
//   last = index+k;
//   acc.map().concat(arr.splice(last, 1))
//   }, arr.splice(last,1))

// console.log(removed);




// for (let i=0; i < arr.length; i++){
//   removed = removed.concat(arr.splice(last, 1))
//   last = i+k;
//   if (last > arr.length-1){
//     last = 0;
//   }
  // console.log(i%arr.length)
// }

// console.log(removed);

// let i = 0
// while (arr.length){
//   last = i+k;
//   removed = removed.concat(arr.splice(last, 1))
// }




// let i = 0
// do{
//   removed = [...removed.concat(arr.splice(last,1))]
//   last = i+k
//   i++
// }
// while (i < arr.length)

//Interesting numbers Kata Codewars

// function isInteresting(number, awesomePhrases) {
//   if (number <= 99){
//     return 0
//   }
//   else{
//     let num = number.toString().split('')
//     let num1 = (number+1).toString().split('')
//     let num2 = (number + 2).toString().split('');
//     for (let i in num){
//       if (num[0] === '0') continue; 
//       if (&& num[i] === num[i+1]+1 || num[i] === num[i+1]-1){

//       }
//     }

//   }
// }

// let number = 90386

// let sorted = x => x.toString().split('').sort().join('');

// console.log(sorted(number))

// if (sorted(number)[0] === 0){
//   console.log(sorted (number.slice(1)) + '0')
// }



//Find anagrams

// function anagrams(word, words){
//     let sorted = x => x.split('').sort().join('');
  
//     let answer = [];
//     for (let e of words){
//       if (sorted(word) === sorted(e)){
//         answer.push(e)
//       }
//     }
//     return answer;
//   }

//using filter
// function anagrams(word, words){
//   let sorted = x => x.split('').sort().join('');
//   let answer = words.filter(e => sorted(e) === sorted(word))
//   return answer;
// }

// let salute = ['Hi', 'Hello']
// let name = ['John', 'Tim']
// let question = ['how are you?', 'how you been?']

// let lst = [salute, name, question]

// function loop(arr, str = ''){
//     if (){
//         console.log(str)
//         return;
//     }
//     let copylst = [...arr]
//     for (let e of copylst.splice(0)){
//         loop(copylst, str+e)
//     }
        
// }

// loop(lst);

// console.log(new Date().getTime());

//PIN Problem (find all possible variations of a pin)

// const adjacents = {
//         1: ['1', '2', '4'],
//         2: ['1', '2', '3', '5'],
//         3: ['2', '3', '6'],
//         4: ['1', '4', '5', '7'],
//         5: ['2', '4', '5', '6', '8'],
//         6: ['3', '5', '6', '9'],
//         7: ['4', '7', '8'],
//         8: ['5', '7', '8', '9', '0'],
//         9: ['6', '8', '9'],
//         0: ['0', '8']
//     }


// function getPINs(observed){
//     let codes = []
//     if (observed.length === 1){
//         return adjacents[observed];
//     }
//     else{
//         for (let e of observed){
//             codes.push(adjacents[e])
//         } 
//         // for (let r = 0; r < codes[0].length; r++){
//         //     let first = codes[0][r];
//         //     for (let c = 0; c < codes[1].length; c++){
//         //         let second = codes[1][c]
//         //         answer.push(first+second)
//         //     }
//         function combo(arr){
//             return arr.reduce((a,b) => (
//               a.map((x) =>
//                 b.map((y) =>
//                   x.concat(y)
//                 )
//               ).reduce((a,b) => (
//                 a.concat(b)
//               ), [])
//             ), [[]])
//         }   
//     }
//     return combo(codes).map(arr => arr.join(''))
// }



// console.log(getPINs('34'));

// let obj = {
//     one: [2,3,4,5,{y:'5',x:'6'},6,7],
//     two: {
//         t: 'sdf',
//         i: 'iii',
//         a: ['yoshi','mario',{super:'mario'}]
//     },
//     three: 'uioiuo',
//     four: '5223',
//     five: 'mario'
// }

//recursive function to find a specific string
// function findMario(item){
//     if (typeof item === 'string' && item === 'mario')
//         console.log(item)
//     if (typeof item === 'object')
//         if (Array.isArray(item))
//             for (let e of item)
//                 findMario(e);
//         else
//             for (let e of Object.values(item)) 
//                 findMario(e)      
// }

// findMario(obj);

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// function domainName(url){
//     let reg = /(https?:\/\/)?(www\.)?([\w-]+)(\.\w+)/
//     return (url.match(reg));
// }

// console.log(domainName("http://www.beauty-heroes-areawesome.com"));


// function pickPeaks(arr){
//     let position = []
//     let peaks = []
//     let plateau;
//     for (let i=1; i < arr.length-1; i++){
//         if (arr[i] > arr[i-1] && arr[i] > arr[i+1]){ 
//             position.push(i)
//             peaks.push(arr[i])
//         }
//         else if (arr[i] === arr[i+1]){
//             for (let j = i; j < arr.length; j++){
//                 if (arr[j] > arr[j-1]){
//                     plateau = i;
//                 } 
//                 else if (arr[j] < arr[j-1]){
//                     plateau = null
//                 }  
//                 else {
//                     break;
//                 } 
//             } 
//         } 
//         else if (arr[i] > arr[i+1] && arr[i] === arr[i-1]){
//             if (plateau){
//                 position.push(plateau)
//                 peaks.push(arr[plateau])
//             }
//         }
//     }
//     return {
//         pos: position,
//         peaks: peaks
//     }
//   }

//   console.log(pickPeaks([ 13, 5, 0, 10, 0, -4, -3, 3, 12, 1, 1, 0, 14, -2, 15, 15, 3, 10, -4, 0, 0, -4, 10, 8, 8, 7, 7, 10, -2, -4, 8, 14, 10, 14, 14, 3, 7, 1, 1, 5, 7 ]))
//   console.log(pickPeaks([ 5, 6, -3, 11, 4, 5, -1, 15, 10, -4, -3, -3, 10, 11, -3, 10, -4, 6, 7, 7, 15, 14, 14, -3, 6, 3, -1, 13, -1, 1 ]))

// function pickPeaks(arr){
//     let position;
//     let positions = []
//     let peaks = []
//     let potentialPeak = false
//     let previous = arr[0]+1
//     arr.forEach((e, i) =>{
//         if (previous < e){
//             potentialPeak = true
//             position = i; 
//         }
//         if (previous > e){
//             if (potentialPeak === true){
//                 peaks.push(previous)
//                 positions.push(position)
//                 potentialPeak = false
//             }
//         }
//         previous = e;
//     })
//     return {
//         pos: positions,
//         peaks: peaks
//     }
//   }

// console.log(pickPeaks([ 3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3 ]))

// console.log((pickPeaks([1,2,3,6,4,1,2,3,2,1]))) //, {pos:[3,7], peaks:[6,3]}));
// console.log((pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]))) //, {pos:[3,7], peaks:[6,3]}));
// console.log((pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))) //, {pos:[3,7,10], peaks:[6,3,2]}));
// console.log((pickPeaks([2,1,3,1,2,2,2,2,1]))) //, {pos:[2,4], peaks:[3,2]}));
// console.log((pickPeaks([2,1,3,1,2,2,2,2]))) //, {pos:[2], peaks:[3]}));
// console.log((pickPeaks([2,1,3,2,2,2,2,5,6]))) //, {pos:[2], peaks:[3]}));
// console.log((pickPeaks([2,1,3,2,2,2,2,1]))) //, {pos:[2], peaks:[3]}));
// console.log((pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))) //, {pos:[2,7,14,20], peaks:[5,6,5,5]}));
// console.log((pickPeaks([]))) //,{pos:[],peaks:[]}));
// console.log((pickPeaks([1,1,1,1]))) //,{pos:[],peaks:[]}));

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

//using regex
// function list(names){
//     if (names.length === 1) {
//         return names[0]['name']
//     }
//     let answer = '' 
//     for (let e of names) {
//         answer+= e.name + ', '
//     }
//     answer = answer.substring(0, answer.length-2)
//     answer = answer.replace(/(.*),/, '$1 &')

//     return answer;
//   }
// function list(names){
//     if (names.length === 1) {
//         return names[0]['name']
//     }
//     let answer = '' 
//     names.forEach(e => answer += e.name + ', ') 
//     answer = answer.substring(0, answer.length-2)
//     answer = answer.replace(/(.*),/, '$1 &')

//     return answer;
//   }

//most clever answer from codewars using map
// function list(names) {
//     var xs = names.map(p => p.name)
//     var x = xs.pop()
//     return xs.length ? `${xs.join(", ")} & ${x}` : x || ""
//   }

// console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Peps'}, {name: 'Luis'}, {name: 'Paula'}, {name: 'Emma'}, {name: 'Amber'} ]));

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

//Write an algorithm that takes an array and moves all the zeros to the end, preserving the order of the other elements.

// var moveZeros = function (arr) {
    // let zeros = arr.filter(e => e===0)
//     for (let e of arr) {
//         arr.splice(arr.indexOf(0), 1)
//         arr.push(0)
//     }
//     return arr;
// }

//one line using filter
// let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));


// console.log(moveZeros([ 9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ]))

// function add(a, b) {
//     let result = (BigInt(a) + BigInt(b)).toString()

//     return result;
//     // result.toString()
//     // return BigInt(result);
//   }

//   console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")

