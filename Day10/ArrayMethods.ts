let numbers: number[] = [1,2,3,4,5];
let fruits: string[] = ["apple", "banana","orange","mango"];


console.log("numbers array", numbers);
console.log("fruits array", fruits);

// Length - attribute (Not a method)

console.log("size of number array",numbers.length); //5
console.log("size of fruits array", fruits.length); //4

// push - Adds single/multiple elements at the end of an array
//syntax : array.push(element1, element2,.....elementN);

numbers.push(6);
console.log("after push()", numbers);

// 2. pop() - Removes the last element from an array
// Syntax: array.pop()


let lastFruit = fruits.pop();

console.log("After pop():", fruits);
console.log("Removed Fruit is:", lastFruit);


// 3. shift() - Removes the first element from an array
// Syntax: array.shift()


let firstNumber = numbers.shift();

console.log("After shift():", numbers);
console.log("Removed Number:", firstNumber);

// Array Methods in TypeScript

// Original Arrays
// let numbers = [10, 20, 30, 40];
// let fruits = ["apple", "banana", "orange", "mango"];
let colors = ["red", "green", "blue"];
let cities = ["Delhi", "Mumbai", "Chennai"];


// 1. shift() - Removes first element
// let firstNumber = numbers.shift();

console.log("After shift():", numbers);
console.log("Removed Number:", firstNumber);


// 2. concat() - Combines arrays
let extraNumbers = [50, 60];

let combined = numbers.concat(extraNumbers);

console.log("After concat():", combined);


// 3. slice() - Returns part of array
let slicedFruits = fruits.slice(1, 3);

console.log("After slice():", slicedFruits);


// 4. splice() - Add/Remove elements
colors.splice(1, 1, "yellow");

console.log("After splice():", colors);


// 5. indexOf() - Finds index
let index = fruits.indexOf("orange");

console.log("Index of orange:", index);


// 6. includes() - Checks existence
let isPresent = cities.includes("Mumbai");

console.log("Includes Mumbai?:", isPresent);


// 7. toString() - Converts array to string
let arrString = fruits.toString();

console.log("toString():", arrString);

