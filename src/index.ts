// let test: string = "Abdelrahman Aman Bourka";

//* declaring types of variable

// let num1: number = 20;
// let str1: string = "Hello World";
// let data: any = "I am a unkown type of data";
// let tr: boolean = true;

//* declaring types of function

// function addNumber(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(addNumber(2, 2));

//* declaring types of arrow function

// const multiplyNumber = (num1: number, num2: number): number => num1 * num2;
// console.log(multiplyNumber(5, 3));

/*Data Types
- Type Alias 
*/

// type st = string; //* Declarying the type of the variable (it is like a shorthand for types)

// let pesudo: st = "Abdelrahman";

// type standnum = string | number;

// let mixTypeVar: standnum = "hello";
// mixTypeVar = 10;

// //* Advanced Type Alias

// type Buttons = {
//   up: string;
//   down: string;
//   left: string;
//   right: string;
// };

// type Last = Buttons & {
//   x: Boolean;
// };

// function getActions(btns: Last) {
//   console.log(`Action For Button Up is ${btns.up}`);
//   console.log(`Action For Button Right is ${btns.right}`);
//   console.log(`Action For Button Left is ${btns.left}`);
//   console.log(`Action For Button Down is ${btns.down}`);
//   console.log(`Action For Button X is ${btns.x}`);
// }

// getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go left", x: false });

//* Literal Types

// type nums = 0 | 1 | -1;

// function compare(num1: number, num2: number): nums  {
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   }else{
//     return -1;
//   }
// }
// console.log(compare(20, 20));
// console.log(compare(20, 15));
// console.log(compare(20, 30));

//* Tuple Types
/**
 * Is Another Sort fo Array Type
 * We know Exactly how many elemnts it contains
 * we know which types it contains at specific position
 */

// type article = readonly [number, string, boolean] ;
// let articleLiST:  article = [1, 'Hello world', true];
// const [id, title, published] =  articleLiST;
// console.log(id, title, published);

//* Void
/*
  Function that will return nothing(void) with a value showing as undefined
  //! P.S undefined is not Void
*/

// function logging(message: string): void {
//   console.log(message);
//   // return message //* => notice this void function doesn't have any return statement
// }
// console.log(logging("I am a message")); //returns the first console log within the function
// //  and returns undefined to the calling code

// // The example above  shows the use of a function returning void.

//* Never
/**
 * Returns Type Never returns
 * Doesn't have a normal completion
 * it throws an error or never finished running at all "infinite loop"
 */

// function fail(message: string) {
//   throw new Error(message);
//   // return message; // => this return is unreachable  because there is an error thrown beforehand in Never type
// }

// console.log(fail("Error ya"));

/* Enums => Enumerations
// Allows us to declare a set of named constants
// Used for logical grouping collection of consts "collection of related values"

*/

// function getHardestLevl() : number {
//   return 3;
// }

// enum Players {
//   Player1 = 25,
//   Player2 = 20,
//   Player3 = 15,
// }

// enum Level {
//   Beginner = Players.Player1,
//   Easy = 9,
//   Medium = 6,
//   Hard = getHardestLevl(),
// }

// let lvl : string = "Easy";
// if(lvl === "Easy"){
//   console.log(`The level is ${lvl} and number of seconds is ${Level.Beginner}`);
// }

//*Type Assertions
/*
Sometimes Complier doesn't know the information we do
TS does not perform any check to make sure type assertion is valid
*/

// let myImg = <HTMLImageElement> document.getElementById("#my-img");
// console.log(myImg.src);

// let data: any = "1000"

// console.log((data as string).toUpperCase())

//* Union and Intersection Types
/**
 * Union  Type - THE "|" Symbol is used to create the union =>"OR"
 *
 * Intersection Type
 * Is a type that combines several types into one
 * The "&" symbol is used to create and intersection "And"
 *
 * If a union is an OR, then intersection would be AND
 */

// let all : number | string = 100;

// type A = {
//   one: string;
//   two: number;
//   three: boolean;
// };
// type B = A & {
//   four: number
// };
// type C = {
//   five: boolean
// }

// type mix = A & C

// function getAction(btn: mix) {
//   console.log(`you have clicked ${btn.one}}`);
//   console.log(`you have clicked ${btn.two}}`);
//   console.log(`you have clicked ${btn.three}}`);
//   console.log(`you have clicked ${btn.five}}`);
// }

//  getAction({one: "Up", two: 2, three: false, five: true})

//* Type Annotations with Object

// let info: {
//   name: string;
//   age: number;
//   occupation: string;
//   excellent: boolean;
//   skills: {
//     one: string,
//     two: string
//   }
// } = {
//   name: "abelr",
//   age: 23,
//   occupation: "Softwaresd",
//   excellent: false,
//   skills: {
//     one:  "Javascript",
//     two: "CSS"
//   }

// };
// info.name = "Abdelrahman"
// info.age = 21
// info.occupation = "Software Developer"
// info.excellent = true

// console.log(info)

//* Interface
/**
 * Interface declaration
 * serves like types
 * the interface describes the shape of an object
 * it defines the syntax to follow
 *
 *
 * -USED WITH OBJECTS
 * USED WITH FUNCTION
 * USED READ ONLY AND OPTIONAL OPERATOR
 *
 */

interface User {
  id?: number;
  readonly username: string;
  country: string;
  sayHello(): string;
  sayWelcome: () => string;
  addNumber?(x: number, y: number): number;
}

// let user: User = {
//   id: 1,
//   username: "Abdelrahman",
//   country: "Oromia",
// };
// console.log(user);

function getData(data: User) {
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
addNumber(x: 10, y: 20) {
    return 10 + 10 ;
},});
