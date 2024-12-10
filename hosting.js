// var test = 12
// function foo() {
//     console.log(test);
// }
// foo()


// var test = 12
// console.log(test)
// foo();
// function foo() {
//     var test = 26
//     console.log(test);

// }
// var test = 26
// console.log(test)
// var test = 26
// function foo() {
//     console.log(test)
// }
// foo()
// var test = 12
// console.log(test)

// // function foo() {
// //     var test = 26
// //     console.log(test)
// //     var test = 68
// // }
// // foo();
// // console.log(test)
// console.log(a);
// var a = 10;

// function test() {
//     console.log(a);
//     var a = 20;

//     function inner() {
//         console.log(a);
//         var a = 30;
//     }

//     inner();
//     console.log(a);
// }

// test();

// console.log(a);


// var a = 50
// function test() {
//     console.log(a)
//     var a = 80

// }
// test()


// function test() {
//     console.log(foo); // What will this print?//undifine
//     var foo = 10;
//     console.log(foo); // What will this print?// 10
//     foo = 20;
//     console.log(foo); // What will this print?20
// }
// test();


// console.log(typeof test); // What will this print?
// var test = 5;

// function test() {
//     console.log("Hello from test function");
// }

// console.log(typeof test); // What will this print?

// console.log(myFunc); // What will this print?
// myFunc(); // Will this throw an error?

// var myFunc = function () {
//     return "Function Expression"

// };
// console.log(myFunc())

// function hoistTest(a = 10, b = a + 5) {

//     console.log(a, b); // What will this print?// 10,15
//     var a = 15
//     console.log(a, b); // What will this print?//
// }
// hoistTest();

// // Global variable
// var globalVar = "I am global";

// function testFunction() {
//     console.log(localVar); // Output: undefined (Hoisted but not initialized)

//     var localVar = "I am local"; // Function-scoped variable
//     console.log(localVar); // Output: "I am local"

//     if (true) {
//         var localVar = "I am re-declared in block"; // Still function-scoped
//         console.log(localVar); // Output: "I am re-declared in block"
//     }

//     console.log(localVar); // Output: "I am re-declared in block"
// }

// testFunction();

// console.log(globalVar); // Output: "I am global"

// // Trying to delete globalVar
// delete globalVar;
// console.log(globalVar); // Output: "I am global" (Global variables cannot be deleted)
// var test1 = 12,
//     test2 = 14,
//     test3 = 16
// function foo() {
//     console.log(test1, test2, test3);
// }
// foo();
// var test1 = 16
// var test2 = 14
// var test3 = 16
// function foo() {
//     console.log(test1, test2, test3);
// }
// foo();
// 'use strict';
// var test = 12;

// console.log(test);
// delete (test);

// function demoFunction() {
//     console.log(myVar); // Output: undefined (hoisted, but not initialized yet)

//     var myVar = 10; // Variable declared and initialized
//     console.log(myVar); // Output: 10
// }

// demoFunction();
// function exampleFunction() {
//     if (true) {
//         var x = 5; // `var` is function-scoped, not block-scoped
//     }
//     console.log(x); // Output: 5 (accessible outside the block)
// }

// exampleFunction();
// console.log(x);

// // Prefix
// let a = 2;
// b = --a;

// // Postfix
// let x = 3;
// y = x--;

// console.log(a);
// console.log(b);
// console.log(x);
// console.log(y);

// let a = 5

// // console.log(a++ + ++a)
// console.log(a++ + a)

// 8 4 2 1
// 0 1 0 1
// 0 0 0 1






