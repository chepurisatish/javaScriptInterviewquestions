// let a = null;
// const  user = () => {
// if(a == undefined || null ){
//     console.log("check")
// }
// else{
//     console.log(a)
// }
// }
// user();

//  let a = 8;
//   const user = () =>{
//     if(a == undefined && null && 6 ){
//         console.log("please check the value")
//     }
//     else{
//         console.log(a)
//     }
//   }
//   user();

// let a = 6;
// const user = () =>{
// if(a != 8){
//     console.log("check the value")
// }
// else{
//     console.log(a)
// }
// }
// user();
 
// spread operator
// spread operator is es6 feature it is used to expanded to array and obejcts spread operator is donoted by ... 

//ex
// let arry1 = ["1","2","3"];
// let arry2 = ["4","5","6"];
// let new_Array = [...arry1,...arry2] 
// console.log(new_Array)

// rest
// When the spread operator is used as a parameter, it is known as the rest parameter.
// let num = [1,2,3]
// const user=(a,b,c)=>{
//     return a+b+c;
// }
// console.log(user(...num))

//for loop
//A for loop, on the other hand, is better suited for executing the “loop body” a fixed number of times.
// for (let i = 0; i < 3; i++) {
//     console.log(i); // will print 0, 1, and 2
// }

//while loop
//while loops are typically used when the “loop body” needs to be repeated an unknown number of times until the condition is met.
// let i = 0;
// while (i < 3) {
//   console.log(i); // will print 0, 1, and 2
//   i++;
// }

let arry1 =[1,2,[3,4]]
let user =(a)=>{
    let New = a.flat();
    console.log(New)
    // let j =arry.length;
    // let res=[];
    // for(i=j;i<=j;i++){
        
    // }
}
user(arry1)
