//arrow function with on argument
// let name = () => console.log("satish");
// name();

//arrow function with one argument
// let name = x => console.log(x);
// name("satish")

// let sum = (x,y) => console.log(x+y);
// sum(5,5)

// let sum =(x,y) => { 
//     let result =  x+y;
//     return result;
// }
//  let res =sum(5,5);
//  console.log(res)

let age = 15;
let welcome = (age<10) ?
() => console.log("baby") :
() => console.log("adult");
 welcome(5)


