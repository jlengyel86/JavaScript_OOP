//Exercise 1
console.log(`Exercise 1: Create Class Notation`);

class Person {
  constructor(name, pets, residence, hobbies){
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  removeHobby(hobby){
    let foundIdx = this.hobbies.indexOf(hobby);

    let valuesBefore = this.hobbies.slice(0, foundIdx);

    let valuesAfter = this.hobbies.slice(foundIdx = 1);

    this.hobbies = valuesBefore.concat(valuesAfter);
  }

  greeting(){
    console.log("Hello fellow person!")
  }

  toString(){
    return Object.entries(this).toString();
  }
}


//Exercise 2
console.log(`Exercise 2: Subclass`);

class Coder extends Person{
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);

        this.occupation = occupation;
    }
    greeting() {
        console.log("Hello, I am a coder!");
    }
}

//Exercise 3
console.log(`Exercise 3: Instances of classes`)

let coder = new Coder("Ben", 0, "Birmingham", ["running", "DIY", "reading"], "Full Stack Web Developer");

coder.addHobby("fencing");

console.log(coder);

coder.removeHobby("running");

console.log(coder);

coder.greeting();

console.log(coder.toString());

//Exercise 4
console.log(`Exercise 4: Basic Calculator`)

class Calculator {
  result = 0;

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  divide(a,b) {
    this.result = a / b;
    return this.result;
  }
}

let calc = new Calculator();

console.log(calc.add(1, 1));
console.log(calc.subtract(5, 2));
console.log(calc.multiply(2, 3));
console.log(calc.divide(6, 3));