const fetch = require('node-fetch')

// let url = 'http://swapi.dev/api/people/?page=1'

// fetch(url) // asynchronous function
//     .then(resp => resp.json())
//     .then(data => { console.log(data)

//     })

// async function p() {
//     let resp = await fetch(url);
//     let data = await resp.json()
// }

// async function p() {
//     fetch(url).then(resp => {
        
//         })
//     let data = await resp.json()
//         console.log(data)
// }

// async function p() {
//     let resp = fetch(url).then(resp => {
//         return resp.json()
//     })
//     let data = await resp
//     console.log(data)
// }

// p();

/*********
 *  NOT WAITING FOR IT
 *********/
// function test() {
//     let next = true
//     let urls = [url]
//     let count = 0
//     while (next && count < 100) {
//         console.log('count', ++count)
//         fetch(urls[urls.length - 1])
//             .then(resp => resp.json())
//             .then(data => {
//                 console.log('fetch')
//                 next = data.next ? true : false
//                 next && urls.push(data.next)
//             })
//     }
//     console.log(urls)
// }

// test()

// /************
//  *  WAITING FOR THE ASYNC FETCH
//  ************/
// async function test() {
//     let next = true
//     let urls = [url]
//     let count = 0
//     while (next && count < 100) {
//         console.log('count', ++count)
//         await fetch(urls[urls.length - 1])
//             .then(resp => resp.json())
//             .then(data => {
//                 console.log('fetch')
//                 next = data.next ? true : false
//                 next && urls.push(data.next)
//             })
//     }
//     console.log(urls)
// }

// test()

// async function test() {
//     let next = true
//     let urls = [url]
//     while (next) {
//         await fetch(urls[urls.length - 1])
//             .then(resp => resp.json())
//             .then(data => {
//                 next = data.next ? true : false
//                 next && urls.push(data.next)
//             })
//     }
//     console.log(urls)
// }

async function test() {
    // let next = true
    let url = 'http://swapi.dev/api/people/?page=1'
    let results = []
    while (url) {
        await fetch(url)
            .then(resp => {return resp.json()})
            .then(data => {
                // next = data.next ? true : false
                url = data.next
                results = results.concat(data.results)
                // results = [...results, ...data.results]
                
            })
    }

    // let id = {}   

    // for (let i=0; i < results.length; i++) {
    //     id[url[i]] = results[i].url.replace(/[^0-9]/g, '');
    // }

    // let newResults = results.sort((a,b) => {
    //     id[a.url] - id[b.url]
    // })
    
    

    // for (let e of results) {
    //     console.log(e.url)
    // }
    
    return results

}

function findNum (str) {
    let newStr = str.substring(0, (str.length-1));
    let last = newStr.lastIndexOf('/')+1
    return Number(newStr.substring(last))
}

// let arr = [1,2,3,4,6,7,8,9,10,11,14,15,16]

// let missing = []

// for (let i=1; i <= arr[arr.length-1]; i++) { // goes thru array and finds missing numbers in chronological order
//   if (!arr.includes(i)) {
//     missing.push(i)
//   }
// }

// console.log(missing);

function processResults (arr) {

    arr.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA > nameB)
            return 1;
        return -1;
    })

    let alphabetNames = []

    for (let e of arr) {
        alphabetNames.push(e.name)
    }

    return alphabetNames;

}

console.log(processResults(test())).then();

// function isMissing (arr1, arr2) {
//     let missing = arr1.filter((x) => {
//         return !arr2.includes(x);
//       })
//     if (missing.length != 0)  
//         return {
//           missing: missing,
//       }
//     return 'All objects are there'
// }

    // for (let e of results) { //extracts the numbers from the url string.
    //     e.url = e.url.replace(/[^0-9]/g, '');
    //     results.sort((a, b) => {
    //         a.url - b.url
    //     })
    //     console.log(e)
    // }

    // results.sort((a, b) => { // sorts it alphabetically by name
    //     let nameA = a.name.toUpperCase();
    //     let nameB = b.name.toUpperCase();
    //     if (nameA > nameB)
    //         return 1;
    //     return -1
    // })

    // for (let e of results) {
    //     console.log(e.url)
    // }
    
    // results.sort((a, b) => { // sorts it alphabetically by name
    //     let nameA = a.name.toUpperCase();
    //     let nameB = b.name.toUpperCase();
    //     if (nameA > nameB)
    //         return 1;
    //     return -1
    // })



// async function getData() {
//     let starwars = await test(); 
//     console.log(starwars)
// }

// function sortNames(){
//     test().then((ret) => {
//         for (let e of ret) {
//             console.log(e.name);
//         }
//     })
// }

// sortNames()











