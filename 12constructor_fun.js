// function Person(){
//     this.name = "satish",
//     this.age = 23,
//     this.bike = "rx";
// }
// const person1 = new Person();

// console.log(person1.age)
// console.log(person1.name)


function Person(name,age,gender){
    this.name = name,
    this.age = age,
    this.gender =gender
}

const person1 = new Person("satish",23,"male")
const person2 = new Person("eswar",33,"male")

console.log(person1.age)

console.log(person2.name)
