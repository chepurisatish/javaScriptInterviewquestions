function user(){
    let a =5+6;
    console.log(a);
}
// setTimeout(user,3000)
// setInterval(user,3000)


// function user(){
//     let a =5+6;
//     console.log(a);
// }
// let data = setTimeout(user, 4000);
// console.log("Id:" + data)


// function forTime(){
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time)
//     setTimeout(forTime,3000);
// }
// forTime()

// const person1 = {
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 35 
// };

// const person2 = {
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 35,
// };
 
// const isDeepEqual = (object1, object2) => {

//   const objKeys1 = Object.keys(object1);
//   const objKeys2 = Object.keys(object2);

//   if (objKeys1.length !== objKeys2.length) return false;

//   for (var key of objKeys1) {
//     const value1 = object1[key];
//     const value2 = object2[key];

//     const isObjects = isObject(value1) && isObject(value2);

//     if ((isObjects && !isDeepEqual(value1, value2)) ||
//       (!isObjects && value1 !== value2)
//     ) {
//       return false;
//     }
//   }
//   return true;
// };

// const isObject = (object) => {
//   return object != null && typeof object === "object";
// };

// console.log(isDeepEqual(person1, person2));