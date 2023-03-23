class parent {
    constructor() {
        this.name = "satish";
    }
    personname(){
        console.log(this.name)
    }
}

class child extends parent{
    constructor(){
        super();
        this.name ="eswar"
        this.age = 23;
    }
    personage(){
     console.log(this.age);
    }
}

const person1 = new child();
person1.personname();
person1.personage();