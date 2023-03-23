// let myArray1 = [1, 2, 3, 4];
// myArray1.forEach((element, index) => {
//     myArray1 = element * 2;
// })
// console.log(myArray1);

/* map method */
let myArray2 = [1, 2, 3, 4];
myArray2.map((element, index) => {
    myArray2 = element * index;
})
console.log(myArray2);