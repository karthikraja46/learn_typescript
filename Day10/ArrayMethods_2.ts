// forEach(), filter(), reduce(), some(), every(), map()

// 1. forEach() - executes a function once for each array element
// It takes function as a parameter

// Syntax : array.forEach(function(currentValue, index, array){ });

// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to.

//Example 1: Get index of all the fruits along with the value
let fruits_new: string[] = ["apple","banaba","mango","kiwi"];

console.log("printing the fruits values with index using for loop...");

for(let i in fruits_new){
    console.log(i, fruits_new[i]);

}

console.log('printing fruits along with the index for each method...');

// fruits_new.forEach(function(element, index){
//     console.log(`${index}`, `${element}`);
// })

// using arrow function
fruits_new.forEach((element, index) => {
    console.log(`${index}`, `${element}`);
});

fruits_new.forEach((element) => {
    console.log(element.toUpperCase());
});

/*

// 3. filter() - Creates a new array with all the elements that pass/satisfy the function-
// It Takes function as a parameter.
// Returns either same or fewer number of elements compared to original array.

*/
let numbers_even = [1, 2, 3, 4, 5, 6];

let EvenfilteredValues = numbers_even.filter((num) => {
    return num % 2 === 0;
});

console.log(EvenfilteredValues);

// Ex 2 : Get the only number greater than 3 from an array
let numbers_greater_than_3 = [1, 2, 3, 4, 5, 6];

let numbersFilterGreaterThanThree = numbers_greater_than_3.filter((num) => {
    return num > 3;
});

console.log(numbersFilterGreaterThanThree);


// 4. reduce() - Applies a function on every element of an array and returns a single value.
// Syntax: array. reduce(fuąction(accumulator, currentvalue, index, array) (3)

//accumulator - THe accumulated value from the previous iteration
//currentvalue - The current element being processed

let numbers_reduce = [1,2,4,5,7,9];
// let total = 0

// for(let i = 0; i<numbers_reduce.length; i++){
//     total = total+numbers_reduce[i];

// }

// console.log("sum of all numbers", total);

// using the arrow function of reduce 

let NumbersReduce = numbers_reduce.reduce ((total,element)=>{
    return (total + element);
},0); // 0 is the value of accumulator

console.log('Reducing the numbers', NumbersReduce);

// 5. some() - Checks if any element satisfies a condition
// Returns true if at least one element passes the condition, else false
// Syntax: array.some(function(currentValue, index, array)(})

// Ex1: Array contains the negative numbers or not
let numbers_some = [1,5,4,6,8];

let NumbersNegative = numbers_some.some((num) => {
    return num < 0;
});

console.log('numbers in negative are', NumbersNegative);


// 6. every() - Checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false
// Syntax: array.every(function(currentValue, index, array)())

let numbers_every = [1,3,5,7,9];

let hasNumbersEvery = numbers_every.every((num) => {
    return num % 2==1;
});

console.log('numbers are negative', hasNumbersEvery);

//7. map() - This creates the new transformed array
let numbers_square = [1, 2, 3, 4, 5];

let squares = numbers_square.map((num) => {
    return num * num;
});

console.log(squares);