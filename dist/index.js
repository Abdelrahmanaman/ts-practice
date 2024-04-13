"use strict";
class User {
    constructor(_username, salary) {
        this._username = _username;
        this.salary = salary;
        this.msg = function () {
            return `Hello1 ${this._username}! Your salary is $${this.salary}.`;
        };
    }
    sayMsg() {
        return `Hello2 ${this._username}! Your salary is $${this.salary}.`;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
}
let userOne = new User("John", 500);
console.log(userOne.username);
userOne.username = "Jane";
console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());
//# sourceMappingURL=index.js.map