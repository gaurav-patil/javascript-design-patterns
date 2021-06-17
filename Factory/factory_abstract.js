class HotDrink {
  consume() {}
}

class Tea extends HotDrink {
  consume() {
    console.log("This tea is nice with lemon!");
  }
}

class Coffee extends HotDrink {
  consume() {
    console.log(`This coffee is delicious!`);
  }
}

class HotDrinkFactory {
  prepare(amount) {
    /* abstract */
  }
}

class TeaFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Tea();
  }
}

class CoffeeFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Grind some beans, boil water, pour ${amount}ml`);
    return new Coffee();
  }
}

let AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory,
});

class HotDrinkMachine {
  constructor() {
    this.factories = {};
    for (let drink in AvailableDrink) {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  makeDrink(type) {
    switch (type) {
      case "tea":
        return new TeaFactory().prepare(200);
      case "coffee":
        return new CoffeeFactory().prepare(50);
      default:
        throw new Error(`Don't know how to make ${type}`);
    }
  }

  interact(name, amount, consumer) {
    let d = this.factories[name].prepare(amount);
    consumer(d);
  }
}

let machine = new HotDrinkMachine();
console.log(
  machine.interact("tea", "200", function (drink) {
    drink.consume();
  })
);
