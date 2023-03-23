
// let sum = 0;
// const num = 370;
// let temp = num;

// while (temp > 0) {

//     let remainder = temp % 10;
//     // console.log(remainder)
//     sum += remainder * remainder * remainder;
//     // console.log(sum)
//     temp = parseInt(temp / 10); 
//     // console.log(temp)
// }

// if (sum == num) {
//     console.log("it an Armstrong number")
// }
// else {
//     console.log("not an Armstrong number");
// }



// var obj1 = {a:"hellow, d:10, c:"abc"}
// var obj2 = {a:"test", b :20, c:10, d:"123" }
// o/p;-
//  var res = {a:"Hellow test", b:30, c:["abc,10"], d:"123"}

var obj1 = {a:"Hellow", b:10, c:"abc" }
var obj2 = {a:"test", b :20, c:10, d:"123" }

// function sumObjectsByKey(...objs) {
//     return objs.reduce((a, b) => {
//       for (let k in b) {
//         if (b.hasOwnProperty(k))
//           a[k] = (a[k] || 0) + b[k];
//       }
//       return a;
//     }, {});
//   }
  
//   console.log(sumObjectsByKey(obj1, obj2));
  var obj ={}
  Object.keys(obj1).forEach(function(a){
    obj[a] = obj1[a] +obj2[a]
  
  })
  console.log(obj)