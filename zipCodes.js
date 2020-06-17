let zipCodes = [
    {id:33185, city:'Kendall', state:'FL', location:[35.9874,-86.4847]},
    {id:33186, city:'Broward', state:'FL', location:[54.3234,-66.9870]},
    {id:44113, city:'Cleve', state:'OH', location:[87.0090,-12.434]},
    {id:00991, city:'Bangor', state:'ME', location:[43.9978,-98.3838]},
    {id:04491, city:'Portland', state:'ME', location:[43.908,-120.43534]},
    {id:27887, city:'Machu Pichu', state:'PE', location:[12.987,-90.7474]},
    {id:45443, city:'Somefield', state:'ME', location:[54.2345,-54.2344]}
  ]

function findZip(item) {
    let found = []
    for (let e of zipCodes) {
        if (Object.values(e).includes(item)) {
            found.push(e)
        }
    }
    if (found.length !== 0) {
        return found;
    } 
    return "Item not found"
}
    


// for (let e of zipCodes) {
//     if (Object.values(e).includes('peps')) {
//         console.log(e)
//     }
// }
// console.log('Item not found')



// console.log(findZip('ME'));

// let zipCodes = {}
// for (let e of zipCode) {
//     zipCodes[e.id] = {
//         city: e.city,
//         state: e.state,
//         lon: e.location[1],
//         lat: e.location[0]
//     }
// }

// console.log(zipCodes[33185]);

// let peperoni = 'peps'
// let caca = 95

// let obj = {
//     peps: caca,
//     40: 'old',
//     hello: 'peps'
//   }

// obj.roni = {
//     one: 1,
//     two: ['a', 'b', {three: 3}],
// }

// // console.log(obj.roni.two.three);

// peperoni = 'two';

// console.log(obj.roni[peperoni][2]['three']);

//   console.log(obj.peperoni);
// //   console.log(obj.40);
//   console.log(obj[40]);
//   console.log(obj['peperoni']);
//   console.log(obj[peperoni]);
// //   console.log(obj[hello]);
//   console.log(obj['hello']);
//   console.log(obj.hello);
