function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Willian',
  lastName: 'Moreno',
  age: 22,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Hello World';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Cleiton', 'Guerra', 30);
console.log(person1); // Person { firstName: 'Cleiton', lastName: 'Guerra', age: 30 }
console.log(person1.fullName()); // Cleiton Guerra

const person2 = new SubPerson('Irineu', 'Silva', 20);
console.log(person2); // SubPerson {firstName: 'Irineu', lastName: 'Silva', age: 20, fromSubClass: 'Hello World'}
console.log(person2.fullName()); // Irineu Silva
