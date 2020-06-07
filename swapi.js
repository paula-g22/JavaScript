const fetch = require('node-fetch')

let url = 'http://swapi.dev/api/people/?page=1'

// fetch(url) // asynchronous function
//     .then(resp => resp.json())
//     .then(data => { console.log(data.detail)

//     })

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
    let next = true
    let urls = [url]
    while (next) {
        await fetch(urls[urls.length - 1])
            .then(resp => resp.json())
            .then(data => {
                next = data.next ? true : false
                next && urls.push(data.next)
            })
    }
    console.log(urls)
}

test()

