// Strings - text value or a combination of charecters

/*
    1. Single Quote = ''(string literal)
    2. Double Quote = "" (string literal)
    3. backtick(``) = String template

    //Index in string starts with zero
*/

// Declaration of strings

let str1: string = "this is a string with double quote";
let str2: string = 'THis is a string with single quote';
let str3: string = `This is a string with the back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

// When to use the back tick in a string

let num: number = 10;

console.log("Number is", num); // valid
console.log("Number is: ${num}"); // not valid
console.log('Number is: ${num}'); //Not valid
console.log(`Number is: ${num}`); // valid

// String methods

// 1) length - Find the length of the string (how many charecters are there)

let str: string = "Hello Typescript";

console.log("length of a string", str.length);

// 2) toUpperCase() and toLowerCase() in typedscript

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 3) charAt(index) and indexOf(string)

console.log(str.charAt(4));
console.log(str.indexOf("Type")); //this will take the string return the index

//4) substring(

// Syntax - substring(starting index, ending index);

let str_substring: string = "Welcome"
console.log(str_substring.substring(2,4));

// 5)includes() - return true or false(boolean)

console.log(str.includes("abc"));

// 6) startsWith() and endsWith() - returns a boolean value

console.log(str.startsWith("Hello"));
console.log(str.endsWith('t'));


// 7) replace() - replaces the string

console.log(str.replace('TypeScript','World'));


// 8) split() - Breaks a string into multiple parts
// based on a delimiter and returns an array


// Example 1

let str_new: string = "Hello TypeScript!";
let words_new: string[] = str.split(" ");
console.log("After splitting string:", words_new);

// Example 2

let myString: string = "abc@gmail.com,xyzabc";
let arr = myString.split(",");
console.log("Email:", arr[0]);
console.log("Password:", arr[1]);

// 9) trim(), trimStart(), trimEnd()

let text: string = "   Hello TypeScript!   ";
// 10) trim() - Removes spaces from both sides
let trimmedText = text.trim();
console.log("After trim():", trimmedText);


// 11) trimStart() - Removes spaces from beginning
let trimStartText = text.trimStart();
console.log("After trimStart():", trimStartText);


// 12) trimEnd() - Removes spaces from end
let trimEndText = text.trimEnd();
console.log("After trimEnd():", trimEndText);

// 13) concat() - concatenates the string

let str_concat_1: string = "Welcome";
let str_concat_2: string = "TypeScript";

console.log('After concatenation', str_concat_1.concat(str_concat_2));
console.log('After_new_concatenation using +', str_concat_1+str_concat_2);

// concept of immutability
// Strings are immutable in typescript
// number = 10
let num_1: number = 10
let res = num_1 + 5;
console.log(res); // 15


let new_string = "Welcome";
let modifiedString = new_string.concat("to Typescript");

console.log(modifiedString);



