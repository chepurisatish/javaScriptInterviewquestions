// let pro = new Promise(function(resolve,reject){
//         let data = true;
//         if(data){
//             resolve([1,2,3])
//         }
//           else{
//             reject("Not Done")
//           }
//     }
// )
// console.log(pro) 


// let pro = new Promise(
//     function(resolve,reject){
//         let data = true;
//         if(data){
//             resolve([1,2,3])
//         }
//           else{
//             reject("Not Done")
//           }
//         });
//      pro.then(function(result){
//          console.log(result)
//      });
//      pro.catch(
//         function(rejectdata){
//            console.log(rejectdata)
//         });
// console.log(pro)

let prom = new Promise(function(resolve,reject){
  let data = true;
  if(data){
    resolve([1,2,3,])
  }
  else{
    reject("unsuccess")
  }
  prom.then(function(res){
    console.log(res)
  })
  prom.catch(function(rej){
    console.log(rej)
  })
});
console.log(prom)
