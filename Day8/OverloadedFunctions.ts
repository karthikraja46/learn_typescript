// U have method overloading (polymorphism) and function overloading in typescript

//Step 1: Write a signature of function
//Step 2: Implement a function
//Step 3: Calling a function

//A fucntion without a body/implementation is called a signature

function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(value: number | string): string {

  if (typeof value === "number") {
    return `ID is ${value}`;
  }

  if (typeof value === "string") {
    return `Name is ${value}`;
  }

  return "";
}

// Function Overloading in TypeScript: It allows you to drefine the multiple versions of a function with the same name but different parameters or return types

console.log(getInfo(101));
console.log(getInfo("John"));

// // In automation while using playwright instead of the clickByText()
// clickBySelector()
// clickByIndex() we use only click()with different argument types/options.This keeps APIs clean.
//Instead of creating multiple fucntions we create only one function 


//Example 2: Different number of parameters

function add_new(a: number, b: number): number;
function add_new(a: number, b: number, c: number): number;

function add_new(a: number, b: number, c?: number): number {

  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
}

console.log(add_new(10, 30));
console.log(add_new(10,20,30));


// Example 3: Different types of return types

function processInput(str: string): string;
function processInput(num: number): number;

function processInput(input: string | number): string | number
{
  if (typeof input == "string"){
    return input.toUpperCase();

  }
  else{
    return input*2;

  }
}

console.log(processInput("welcome"));
console.log(processInput(101));


// Example 4: 

function greet_ece(name: string): string;
function greet_ece(age: number): string;
function greet_ece(isMarried: boolean): string;

function greet_ece(value: string | number | boolean): string {

  if (typeof value === "string") {
    return `Hello ${value}`;
  }

  else if (typeof value === "number") {
    return `You are ${value} years old`;
  }

  else {
    let res: string = value ? "Married" : "Single";
    return res;
  }
}

// Conclusion
// • Callback Functions allow functions to be executed later, useful in asynchronous
// programming.
// Function Overloading enables defining multiple function signatures for different
// parameter types or return types.