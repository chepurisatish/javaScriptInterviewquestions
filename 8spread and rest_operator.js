// => Spread operator

// let arry=["my","name","is","satish"];
// console.log(...arry)

// let arry1 = ["1","2","3"];
// let arry2 = [...arry1,"4","5","6"];
// console.log(arry2 )



// let obj1 = {
//     name  : "satish",
//     age : 20,
// }
// let obj2  = {
//     village : "mdk",
//     study : "btech",
// }

// let New = {...obj1,...obj2}
// console.log(New)

// =>Rest Operator

// let fun = function(...a){
//     console.log(a);
// }
// fun(1,2,3)

function add(a,b,c){
    sum = a+b+c;
    return sum;
}
let num = [1,2,3,4];
console.log(add(...num))
// let res = add(...num);
// console.log(res);
