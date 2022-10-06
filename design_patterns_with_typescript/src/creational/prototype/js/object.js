const personPrototype = {
  firstName: 'Willian',
  lastName: 'Moreno',
  age: 22,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Irineu'; // Shadowing - Na cadeia de prototype, a que estiver mais acima será retornada.
console.log(anotherPerson); // {}
console.log(anotherPerson.firstName); // Irineu (A prop firstName a ser visualizada primeiro retornará 'Irineu')
console.log(anotherPerson.fullName()); // Irineu Moreno
