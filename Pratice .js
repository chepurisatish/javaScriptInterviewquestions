// const Name = [2,5,7,8,9,5,4,5,6,5]
// const Fun = (e)=>{
// console.log(e*2);
// }
//  Name.forEach(Fun);


const Name = [2,5,7,8,9,5,4,5,6,5]
const Fun = (e,n)=>{
return(e*n);
}
Fun(Name)

 let New = Name.map(Fun);

 console.log(New);
