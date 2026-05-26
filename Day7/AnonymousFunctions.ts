// Anonymous functions (unnamed functions/Nameless function)

/*
An anonymous function is a function that does not have a name instead this is assigned to a variable which acts as its name

Syntax:

let variable = function(parameters){
    // function body
}

variable(); // Calling the function;

*/

// Example 1: Anonymous Function

let msg = function(): string
{
    return 'Hello typescript';
}
msg();

// Example 2 : Anonymous functions with parameters

let multiply = function(a:number, b:number){
    return a*b;
}

console.log(multiply(10,20));
