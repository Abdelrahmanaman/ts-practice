"use strict";
function getData(data) {
    console.log(data.addNumber());
}
getData({
    id: 2,
    username: "Abdelrahman",
    country: "Oromiyya",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome() {
        return `Welcome ${this.username}`;
    },
    addNumber(x, y) {
        return 10 + 10;
    },
});
//# sourceMappingURL=index.js.map