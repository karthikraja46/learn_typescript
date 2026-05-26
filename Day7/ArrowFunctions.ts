// Arrow functions/Lamda functions

/*
Lambda refers to anonymous fucntions in programming
lambda functions are a conscide mechanism to reperesent anonymous fucntions
these functions are also called as arrow functions

3 parts of a lambda fucntion :

1. parameters : A fucntion may optionally have parameters
2. The fat arrow notation/lambda notation( => ) - It is also called goes to operator
3. statements - represents the functions instruction set

Syntax

let variable = (parameters) => {
    //block of code
}

variable();

*/

// Example 1 : Arrow function with no parameters and no return type

let greet = (): void => 
{
    console.log('Hi typescript');
}

greet();


// Example 2: Arrow functions with paramters and a return type

let addition = (a: number, b: number): number => {
    return a+b;

}

console.log(addition(10, 30));

// Example 3: arrow fucntion with implicit return
// this is possible when u have a single return type
let add = (a:number, b:number):number => a + b;
console.log(add(10, 40));

let multi = (a:number, b:number):number => a * b;
console.log(multi(10, 40));

// Example 4: Arrow Function with Optional Parameters

const display_Details = (
  id: number,
  name: string,
  mailId?: string
): void => {
  console.log("ID:", id);
  console.log("Name:", name);

  if (mailId !== undefined) {
    console.log("Email:", mailId);
  }
};

display_Details(123, "Scott", "scott@gmail.com");
display_Details(123, "Scott");