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



//* Never
/**
 * Returns Type Never returns
 * Doesn't have a normal completion
 * it throws an error or never finished running at all "infinite loop"
 */
