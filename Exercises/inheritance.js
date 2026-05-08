// Parent class
 class vehicle {
    constructor(brand) {
        this.brand = brand;

    }
    describe() {
        return this.brand + " i am a"+this.brand;
}
}
// Child class inherits from vehicle
class car extends vehicle {
    constructor(brand,doors) {
       super(brand);
        this.doors = doors; 
    }
}    


const car1 = new car("Toyota");


console.log(car1.describe());

// Parent class

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return this.name + " i am a " + this.age + " years old.";
}
}
// Child class inherits from person
class student extends person {
    constructor(name,age,grade) {
        super(name,age);
        this.grade = grade;

    }
}
const student1 = new student("kobi",21,);

console.log(student1.describe());


class Animal {
        
    eat() {
        return  "eating...";
    }
}

class Dog extends Animal{
    bark() {
      return  "woof!";  
    }

}
const Dog1 = new Dog();
console.log(Dog1.eat(),Dog1.bark());



// class Empoloyee {
//     constructor(name,salary) {
//         this.name = name;
//         this.salary = salary;
//     }
//     details() {
//         return this.name + " "
//     }
// }
