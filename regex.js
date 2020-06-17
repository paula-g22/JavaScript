let arr = ['Hi my name is Hernan and I wanted to know if..', 'When she was born her mother named her Pepe.', 
'When the pandemic was over the name Justin kept resonating in his mind.', 
'If they can come together and give their business the name Coco'];

// const reg = /name(\w?)(\s\w*)?\s([A-Z]\w*)/g
const reg = /name[ a-z]+([A-Z]\w*)/


// function getNames(arr){
//     let names = []
//     let allNames = []
//     for (let e of arr) {
//         names = [...names, ...(e.match(reg))]
//     }
//     if (names.length > 1) {
//         for (let e of names) {
//             allNames.push(e.substring(e.lastIndexOf(' ')).trim())
//         } 
//     } 
//     return allNames;
// }

// function getNames(arr){
//     let names = []
//     for (let e of arr) {
//         names = [...names, ...(e.match(reg))]
//     }
//     return names.map(e => e.replace(reg, '$3'))
// }

function getNames(arr){
    let names = []
    for (let e of arr) {
        names = [...names, e.match(reg)[1]]
    }
    return names;
}

console.log(getNames(arr))





// for (let i=0; i<names.length; i++) {
//     names[i].substring(3)
// }

// console.log(names);

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// expected output: Array ["T", "I"]