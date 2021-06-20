class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  deepCopy() {
    return new Address(this.streetAddress, this.city, this.country);
  }

  toString() {
    return `Address: ${this.streetAddress}, ` + `${this.city}, ${this.country}`;
  }
}

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address; //!
  }

  deepCopy() {
    return new Person(
      this.name,
      this.address.deepCopy() // needs to be recursive
    );
  }

  toString() {
    return `${this.name} lives at ${this.address}`;
  }
}

let gaurav = new Person("Gaurav", new Address("Chinchwad", "Pune", "India"));
let copy = gaurav.deepCopy();

copy.name = "Gaurav_Copy";
copy.address.streetAddress = "New Address";

console.log(gaurav.toString());
console.log(copy.toString());
