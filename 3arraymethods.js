// The push() method adds an element at the end of the array. 
// var arry = ["1" ,"2", "3", "4", ]
// arry.push("5")
// console.log(arry)

//The pop() method removes the last element from an array and returns that element.
// let data = ["1", "2", "3", "4",]
//  data.pop();
//  console.log(data)

//The shift() method removes the first element from an array and returns that
// let data =["1", "2", "3" ,"4"]
// data.shift();
// console.log(data)

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// let data = ["1", "2", "3", "4"];
// data.unshift("-1","0",);
// console.log(data)

//The slice() method returns a shallow copy of a portion of an array into a new array object.
// let data = ["1", "2", "3", "4","5",]
// let new_data = data.slice(0,3)
// console.log(new_data)

//The indexOf() method returns the first index of occurance of an array element, or -1 if it is not found.

// function index(){
//     let arry = [ "1", "2", "3", "4",];
//     let index = arry.indexOf("3");
//     console.log(index)
// }
// index();

//The lastIndexOf() method returns the index of the last occurrence of a specified element in the array.

// function user(){
//     let arry = [1,2,3,4,5,4,6]
//     let index = arry.lastIndexOf(4)
//     console.log(index)
// }
// user()


//The concat() method returns a new array by merging two or more values/arrays.
// function user(){
//     let arry1 = [1,2,3];
//     let arry2 = [4,5,6];
//     let data = arry1.concat(arry2);
//     console.log(data);
// }
// user()

// function user(){
//     let arry1 = [1,2,3];
//   let arry2 = [
//     [4,5,6],
//     [7,8,9],
// ];
// arry2[0].push(0)
// arry2[1].push(0)
// let data = arry1.concat(arry2);
// console.log(data);
// }
// user();


//The filter() method returns a new array with all elements that pass the test defined by the given function.
// let arry = [1,2,3,4,5,6,7,8,9,10];
// function user(arry){
//     if(arry%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let data = arry.filter(user);
// console.log(data)

//The includes() method checks if an array contains a specified element or not.
// function user(){
//     let arry = ["satish", "mukesh", "eswar","prakash",""];
//     let data = arry.includes("")
//     console.log(data)
// }
// user()

//The some() method tests whether any of the array elements pass the given test function.
// let arry = [1,1,3,3,5,9,7]
// function user(element){
// return element %2 === 0;
// }
// let data=arry.some(user)
// console.log(data)

// The map() method creates a new array with the results of calling a function for every array element.
// let arry=[1,2,3,4,5,6]

// function sum(element){
//     return element*2;
// }
// let data = arry.map(sum);
// console.log(data)

// //arrow fun
// let data = arry.map((e)=>e*2);
// console.log(data)

//The filter() method returns a new array with all elements that pass the test defined by the given function.
// let arry = [1,2,3,4,5,6,7,8,9]
// function user(element){
//    if(element%2==0){
//     return true;
//    }
//    else{
//     return false;
//    }
// }
// let data = arry.filter(user);
// console.log(data)

//The find() method returns the value of the first array element that satisfies the provided test function.
// let arry = [1,2,3,4,5,6,7,8,9]
// function user(element){
//     if(element%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let data = arry.find(user);
// console.log(data)


//The sort() method sorts the items of an array in a specific order (ascending or descending).
// let arry = ["satish", "eswar", "mukesh", "prakesh"];
// function user(){
//     let data = arry.sort();
//     console.log(data);
// }
// user();

// let arry = ["satish", "eswar", "mukesh", "prakash", "yash"];
// function user(a, b){
//   //  return a.length - b.length; // according
//   return b.length - a.length; // Descending
// }
// arry.sort(user);

// console.log(arry);


//The reduce() method executes a reducer function on each element of the array and returns a single output value.
// var arry =["I", "am", "satish"];
// function user(a,b){
//     return a+b;
// }
// var data = arry.reduce(user);
//     console.log(data)

//The forEach() method executes a provided function for each array element.
// let arry = [1,2,3,4,5,6];
// function user(element){
//     console.log( element*element)

// }
//  arry.forEach(user);

// let arry = [1,2,3,4,5,6];
// function user(ele,ind){
//        console.log("array"+" "+ind+" "+ele*ele);
// }
// arry.forEach(user);

//The some() method tests whether any of the array elements pass the given test function.
// let arry = [1,2,3,4,5,6];
// function user(ele){
//     return ele%2==0;
// }
// let data = arry.some(user);
// console.log(data);

//The JavaScript Array every() method checks if all the array elements pass the given test function.
// let arry = [45,55,65,20,35,70];
// function user(ele){
//     return ele>=35;
// }
// let data=arry.every(user);
// console.log(data);



//filter
// let arry = [1,2,3,4,5,6];
// let data = arry.filter((e)=>e%2==0);
// console.log(data)

// let arry = [1,2,3,4,5,6];
// for(i=1;i<arry.length;i++){
//     if(arry[i]%2==0){
//         console.log(arry[i])
//     }
// }

//find
// let arry = [1,2,3,4,5,6];
// let data = arry.find((e)=>e%2==0);
// console.log(data)

// let arry = [1,3,4,2,5,6];
// for(i=1;i<arry.length;i++){
//     if(arry[i]%2==0){
//         console.log(arry[i]);
//         break;
//     }
// }

//reduce

// let arry = [1,2,3,4,5,6];
// let data = arry.reduce((e,i)=>e+i);
// console.log(data)

// var arry = [1,2,3,4,5,6];
// var arry1 = 0;
// for(i=0; i<arry.length;i++){
//    arry1 += arry[i]
// }
// console.log(arry1);

//sort
// let array = [2,4,5,1,3,7]
// let data = array.sort((e,i)=>i-e);
// console.log(data)

// function user() {
//    var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];
//    for (var i = 1; i < Arr.length; i++)
//       for (var j = 0; j < i; j++)
//          if (Arr[i] < Arr[j]) {
//             var x = Arr[i];
//             Arr[i] = Arr[j];
//             Arr[j] = x;
//          }
//    console.log(Arr);
// }

// let arry = [1,2,3,4,5,6,7]
// let Newarry=arry.slice(1,6)
// console.log(Newarry)


// let arry = [1,2,3,4,5,6,7,8]
// let Newarry=arry.splice(4,10)
// console.log(arry)