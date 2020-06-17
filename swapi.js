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

    let newResults = results.slice(2, 80)
    

    let urlNums = []
    for (let i in results) {
    urlNums.push(findNum(results[i].url))
    }

    let missing = []
    for (let i=1; i <= findNum(results[results.length-1].url); i++) {
        if (!urlNums.includes(i)) {
          missing.push(i)
        }
      }
    
    return results;

}

function findNum(str) {
    let newStr = str.substring(0, (str.length-1));
    let last = newStr.lastIndexOf('/')+1
    return Number(newStr.substring(last))
}

// test()

// let arr = [1,2,3,4,6,7,8,9,10,11,14,15,16]

// let missing = []

// for (let i=1; i <= arr[arr.length-1]; i++) { // goes thru array and finds missing numbers in chronological order
//   if (!arr.includes(i)) {
//     missing.push(i)
//   }
// }

// console.log(missing);

function processArray(arr) {
    
    //alphebitizing
    let alphabetNames = []

    let sortedNames = arr.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA > nameB)
            return 1;
        return -1;
    })

    for (let e of arr) {
        alphabetNames.push(e.name)
    }

    //finding missing (if any) numbers from the url code
    let requiredLength = findNum(arr[arr.length-1].url);

    let urlNums = [] //gets the numbers from url and puts them in an array
    for (let i in arr) {
        urlNums.push(findNum(arr[i].url))
    }

    let missing = []
    for (let i=1; i <= requiredLength; i++) {
        if (!urlNums.includes(i)) {
          missing.push(i)
        }
    }
    
    //sort list backwards by url num

    let backwards = arr.sort((a, b) => {
        let numA = findNum(a.url);
        let numB = findNum(b.url);
        if (numA < numB)
            return 1;
        return -1
    })

    
    return {
        isMissing: missing,
        alphetized: alphabetNames,
        // backwards: backwards
    }

}

async function getHomeWorld() {
    let results = await test();
    
    let newArr = []

    for (let e of results) {
        let id = findNum(e.url);
        let homeUrl = e.homeworld;
        if (e.homeworld) {
            let homeworld = await fetch(homeUrl).then(resp => resp.json()).then(data => data)
            newArr.push({
                name: e.name,
                height: e.height,
                gender: e.gender,
                homeworld: {
                    name: homeworld.name,
                    climate: homeworld.climate,
                    terrain: homeworld.terrain
                    },
                homeworld_link: homeUrl,
                id: id
            })
        }
        else {
            continue;
        }
    }
    return newArr;
}

getHomeWorld().then(arr => console.log(arr));

// let results = test();

// processResults(test()).then(arr => {console.log(arr)})

// function consolelogResults(x) {
//     if (!Array.isArray(x)) {
//         console.log('is promise')
//         x.then(arr => {
//             console.log(processArray(arr))
//         })
//     }
//     else {
//         console.log('is array')
//         console.log(processArray(x))
//     }
// }

// // consolelogResults(test())

// test().then(arr => {
//     consolelogResults(arr)
// })


// let urlNums = [] //gets the numbers from url and puts them in an array
//     for (let i in results) {
//         urlNums.push(findNum(results[i].url))
//     }

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











