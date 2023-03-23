//constructor function
// function person(){
//     this.name = "satish",
//     this.age = 25,
//     this.mail = "xyz@gamil.com"
// }
//  const person1 = new person();
//  const person2 = new person();
//  const person3 = new person();
//  console.log(person1.name)
//  console.log(person1.age)
//  console.log(person1.mail)

 //Prototype Inheritance

// function person(){
//     this.name = "satish",
//     this.age = 25,
//     this.mail = "xyz@gamil.com"
// }
// person.prototype.gender = 'male';
//  const person1 = new person();
//  const person2 = new person();
//  const person3 = new person();


//  console.log(person.prototype)
 
//  console.log(person1.name)
//  console.log(person1.age)
//  console.log(person1.mail)
//  console.log(person1.gender)

function user(){
    this.name = "satish"
    this.age = 23
}
user.prototype.gender = "male";
user.prototype.user1 = function() {
    console.log("hello"+" "+this.name)
}
const person = new user();
console.log(person.gender);
console.log(person.name)
person.user1()