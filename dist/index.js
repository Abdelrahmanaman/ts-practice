"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price, time) {
        super(title);
        this.price = price;
        this.time = time;
    }
    getCookingTime() {
        console.log(`The cooking time for the ${this.title} Pizza is ${this.time} minutes, price $${this.price}`);
    }
}
class Burger extends Food {
    constructor(title, price, time) {
        super(title);
        this.price = price;
        this.time = time;
    }
    getCookingTime() {
        console.log(`The cooking time for the ${this.title}  burger is ${this.time} minutes, price $${this.price}`);
    }
}
let pizzaOne = new Pizza("Mixed", 10, 25);
console.log(pizzaOne);
pizzaOne.getCookingTime();
let burgerOne = new Pizza("Beef", 20, 10);
console.log(burgerOne);
burgerOne.getCookingTime();
//# sourceMappingURL=index.js.map