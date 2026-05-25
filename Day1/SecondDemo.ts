/* console.log('Welcome to TypeScript!'); */


//variable : container where u can store some data


// var, let, const

// var : function scope
// let, const : block scope

// var a = 10;
// console.log(a);

// let b = 20;
// console.log(b);

// const c = 30;
// console.log(c);  


// var age = 30;
// console.log("age");

// var age = 30";
// console.log(age);

//nowadays var is avoided because of its function scope and hoisting issues. It can lead to unexpected behavior in larger codebases. Instead, it's recommended to use let and const for better readability and maintainability of your code.


//scope - accessible of area(Function scope, block scope)


// example 1:
function test() {
    var x = 10; // function scope
    console.log(x);
}

test();
// console.log(test); // Error: x is not defined

// Example 2:
function raja(){
    if(true){
        var y = 20; // function scope
    }
    console.log(y); // Accessible outside the block
}

raja();


//example 3: let and const are block scoped

function blockScope(){
    if(true){
        let z = 30; // block scope
        const w = 40; // block scope
        console.log(z); // Accessible inside the block
        console.log(w); // Accessible inside the block
    }
    // console.log(z); // Error: z is not defined
    // console.log(w); // Error: w is not defined
}

blockScope();


function ScopeDiff(){
    if(true){
        var num1 = 10;
        var num2 = 20;
        let num3 = 30;
        const num4 = 40;
        console.log(num1); // Accessible inside the block
        console.log(num2); // Accessible inside the block
        console.log(num3); // Accessible inside the block
        console.log(num4); // Accessible inside the block
    }
    console.log(num1); // Accessible outside the block
    console.log(num2); // Accessible outside the block
    // console.log(num3); // Error: num3 is not defined
    // console.log(num4); // Error: num4 is not defined
}

ScopeDiff();



/* 2.Declaration and Initialization and value assignment */

// example 1:

var x; // declaration
console.log(x); // Output: undefined

x = 10; // initialization
console.log(x); // Output: 10



// var and let do not require an initial value at the time of declaration, while const requires an initial value and cannot be reassigned later. This is because const is used for values that should remain constant throughout the program, while var and let allow for more flexibility in variable assignment and reassignment.
var age_raj = 40;
age_raj = 50;
console.log(age_raj); // Output: 50

let age_rama = 40;
age_rama = 50;
console.log(age_rama); // Output: 50

// const does not allow reassignment after the initial value is set. Once a value is assigned to a const variable, it cannot be changed. This is because const is meant to represent values that should remain constant throughout the program, providing a way to ensure that certain values are not accidentally modified.

const age_sita = 40;
// age_sita = 50; // Error: Assignment to constant variable.
console.log(age_sita); // Output: 40 

