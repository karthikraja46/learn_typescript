let y = 40;

y = 50;
console.log(y); // Output: 50

// y = 'Hello';
// console.log(y); // Error due to type safety in TypeScript

//type safety in TypeScript

// let is not type safe, it allows reassignment of different types

// example 2:
let z: number = 60;
console.log(z); // Output: 60

z = 70; // Valid assignment
console.log(z); // Output: 70

// z = 'World'; // Error: Type 'string' is not assignable to type 'number'


let message = "Hello, TypeScript!"; // string
let count = 10; // number
let isActive = true; // boolean

console.log(message); // Output: Hello, TypeScript!
console.log(count); // Output: 10
console.log(isActive); // Output: true


let result = "5" + 3
console.log(result); // Output: "53" (string concatenation)

let numResult = 5 + 3
console.log(numResult); // Output: 8 (numeric addition)

let num1 = "5";
let num2 = 3;

// let sum = num1 + num2;
// console.log(sum); // Output: "53" (string concatenation)

let num_1:string = "5";
let num_2:number = 3;

let sum1 = num_1 + num_2;
console.log(sum1); // Output: "53" (string concatenation)


//Annotation and type inference in typescript

// example 1: type annotation

let raj_karthik : number = 25;
console.log(raj_karthik); // Output: 25

// example 2: type inference

let raj_karthik1 = 30; // TypeScript infers the type as number
console.log(raj_karthik1); // Output: 30

// raj_karthik1 = "Hello"; // Error: Type 'string' is not assignable to type 'number'   

