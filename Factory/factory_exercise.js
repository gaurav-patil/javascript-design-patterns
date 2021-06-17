class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  createPerson(name) {
    return new Person(PersonFactory.id++, name);
  }
}
PersonFactory.id = 0;

let pf = new PersonFactory();
let per1 = pf.createPerson("Gaurav");
console.log(per1);
let per2 = pf.createPerson("JS");
console.log(per2);
