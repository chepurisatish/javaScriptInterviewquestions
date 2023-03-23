const array = 
    [ {id:1,name:"text1"}, {id:2,name:"text2"} ,{id:3,name:"text3"}];
const result =  array.map((item) => ({...item,age:item.id}));
console.log(result)

// let array = [5,5,2,8,7,3,5]
// let num = [];
// let res=[]
//     for(i=0;i<array.length;i++){
//         for(j=1;j<array.length;j++){
//             if(array[i]+array[j]==10){
//                 if(!num.includes(array[i]) &&! num.includes(array[j])){
//                     num.push(array[i])
//                     res.push([array[i],array[j]])

//                 }
//   }      
//   }
// }
//   console.log(res)
