let obj = [
    {firstName: 'john', lastName: 'garcia'},
    {firstName: '', lastName: ''},
    {firstName: 'PANCHO', lastName: 'FERNANDEZ'},
    {firstName: 'rachel', lastName: 'green'},
    {firstName: 'alienSmith', lastName: ''},
    {firstName: '', lastName: 'JoeyTrivianni'},
    {firstName: 'Emma', lastName: 'negri'},
    {firstName: 'peps inguanti', lastName: ''},
    {firstName: '', lastName: 'PePs gArCiA'}
  ]
  
  const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  
  // console.log(capitalize(obj[7].firstName));
  
  // let formattedObj = [];
  
  
  
  // for (let e of obj) {
  
  //   let first = e.firstName;
  //   let last = e.lastName;
    
  //   if (first === '' && last === '') { continue; }
  
  //   let temp;
  // //firstName is empty, lastName has firstname and last
  //   if (first === '') {
  //     let arr = last.split(' '); //puts string in array, divided by empty space
  //     if (arr.length === 1) { //one word
  //       let upper = last.toUpperCase(); 
  //       let indexOfUpper;
  //       for (let i in last) {
  //         if (last[i] === upper[i]) indexOfUpper = i;   
  //       } 
  //       e.firstName = capitalize(last.substring(0, indexOfUpper)) //makes first name the first part of the name
  //       e.lastName = capitalize(last.substring(indexOfUpper));   
  //     }
  //     else if (arr.length === 2) {
  //       e.firstName = capitalize(arr[0]); //the first name is the first element of array, and capitalizes
  //       e.lastName = capitalize(arr[1]); //last name is second element of array, and capitalizes
  //     }
  //   }
  //   else if (last === '') { // if last name is empty
  //     let arr = first.split(' ');
  //     if (arr.length === 1) {
  //       let upper = first.toUpperCase();
  //       let indexOfUpper;
  //       for (let i in first) {
  //         if (first[i] === upper[i]) indexOfUpper = i;  
  //       } 
  //       e.firstName = capitalize(first.substring(0, indexOfUpper))
  //       e.lastName = first.substring(indexOfUpper);   
  //     }
  //     else if (arr.length === 2) {
  //       e.firstName = capitalize(arr[0]);
  //       e.lastName = capitalize(arr[1]);
  //     }
  //   }
  //   else { //if both names have a string, it capitalizes it
  //     e.firstName = capitalize(e.firstName);
  //     e.lastName = capitalize(e.lastName);
  //   }
  // }
  
  
  for (let e of obj) {
  
    let first = e.firstName;
    let last = e.lastName;
    
    if (first === '' && last === '') continue;
  
    let temp;
  
    if (first === '') {
      temp = last;
    }
    else if (last === '') {
      temp = first;
    }
    
    if (temp) {
      let arr = temp.split(' ');
      if (arr.length === 1) {
        let upper = temp.toUpperCase();
        let indexOfUpper;
        for (let i in temp) {
          if (temp[i] === upper[i]) indexOfUpper = i;  
        } 
        first = temp.substring(0, indexOfUpper)
        last = temp.substring(indexOfUpper);   
      }
      else if (arr.length === 2) {
        first = arr[0];
        last = arr[1];
      }
    }
    e.firstName = capitalize(first);
    e.lastName = capitalize(last);
  }
  
  // for (let e of obj) {
  //   if (e.firstName === '') {
  //    e.firstName = 'Caca'
  //     e.lastName = 'Pop' 
  //   }
  // }
  
  
  
  console.log(obj);