// async function f1(){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=>resolve("hello"),3000)
//     });
//     let result = await promise;
//     console.log(result);
// }
//     f1();

async function example() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => reject("not done!"), 2000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  example();