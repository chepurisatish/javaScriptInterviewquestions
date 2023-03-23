//this

// const person = {
//     firstName : "eswar",
//     lastName : "m",
//     fullName : function (){
//         return this.firstName+" "+this.lastName;
//     }
// }
// console.log(person.fullName())


// call

// const person = {
//     fullName : function (){
//         return this.fisrtName+" "+this.lastName;
//     }

// }
// const person1 = {
//     fisrtName : "eswar",
//     lastName : "M",
// }
// const person2 = {
//     fisrtName : "satish",
//     lastName : "ch",
// }
// console.log(person.fullName.call(person1));

// const person = {
//     fullName : function (a,b){
//         return this.lastname + "." + this.fistname +" "+ a +" "+ b;
//     }
// }

// const person1 = {
//      fistname : "eswar",
//      lastname : "M",
// }
// const person2 = {
//     fistname : "satish",
//     lastName : "ch"
// }

// console.log(person.fullName.call(person1,"b.tech","Ece"));


// apply
// const person = {
//     fullname : function(a,b){
//         return this.lastName + "." + this.fistname+" "+ " "+a+" "+b
//     }
// }
// const person1 = {
//      fistname : "eswar",
//      lastname : "M",
// }
// const person2 = {
//     fistname : "satish",
//     lastName : "ch"
// }
// console.log(person.fullname.apply(person2,["b.tech","Ece"]))

//bind

// const person = {
//     firstname: "eswar",
//     lastname : "m",
//     fullname : function (){
//   return this.firstname + " " + this.lastname;
//     }
// }
// const person1 = {
//     firstname: "satish",
//     lastname : "ch",
// }
// let user = person.fullname.bind(person1);
// console.log(user)
// console.log(person.fullname.bind(person1)());


const person = {
        firstname: "eswar",
        lastname : "m",
        fullname : function (){
      console.log( this.firstname + " " + this.lastname);
        }
    }
    const person1 = {
        firstname: "satish",
        lastname : "ch",
    }
let dispaly = person.fullname.bind(person);
 setTimeout(dispaly,3000)


   
// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }

// var user1 = new User('Bob', 25);
// var user2 = new User('Alice', 27);
// console.log(user2.age)
// var obj = { num: 2 };

// function add(a, b){
//   console.log(this.num + a + b);
// }

// const func = add.bind(obj, 3, 5);
// func();