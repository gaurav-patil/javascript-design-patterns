class SingletonTester {
  static isSingleton(generator) {
    let obj1 = generator();
    let obj2 = generator();
    console.log(obj1.toString());
    console.log(obj2.toString());
    console.log(`Returning ${obj1 === obj2}`);
    return obj1 === obj2;
  }
}

const item = [1, 2, 3];

console.log(SingletonTester.isSingleton(() => item)); // true

console.log(SingletonTester.isSingleton(() => [Math.random()])); // false
