class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Teacher extends Person {
    teach(subject) {
      console.log(`${this.name} is now teaching ${subject}`);
    }
  }

const mahipal = new Teacher('Mahipal');
mahipal.teach('JavaScript');
