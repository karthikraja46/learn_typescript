/*
1) Primitive data types(built in)

number 
string
null
boolean
undefind
any 
union, type
void

/*
2) Non Primitive datatypes(Objects)

array
class
fucntion
interface
tuple etc

*/

/*
// 1. Number Type
//Represents both integers and floating point numbers

let age_data_types: number = 25;
let price = 25.5;
let big = 553535353535;

console.log(age_data_types);
console.log(price);
console.log(big);

console.log(typeof(age));
console.log(typeof(price));
console.log(typeof(big));

*/


/*

2) String Type

represents textual data

we can use single quote('') double quote("") and back quote('')

*/

// use back ticks in type script

// let FirstName: string = "John";
// let SecondName: string = "Kennedy";

// let greeting: string = `Hello ${FirstName} ${SecondName}`;

// console.log(greeting);

 

// 3) Boolean type - Represents true/false values

let isStudent: boolean = true;
let hasJob: boolean = false;

console.log('Is student', isStudent);
console.log('has job?', hasJob);

//4) null and undefined
// special types of abscenc eof values

let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log(emptyValue);
console.log(notAssigned);

// 5) Any Type - This follows dynamically typed language

let value: any = "Welcome";

console.log(typeof(value));

value = 100;
console.log(typeof(value));

value = true;
console.log(typeof(value));

/*
// 6) Union Type - Combine multiple types

let id: number | string | boolean;

id = 'ABC12334';
console.log(id);

id = '12345';
console.log(id);

id = false
console.log(id);


*/

