/**
 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type.
 * It helps in storing multiple fields of different data types together.
 * In tuple the datatype is fixed and values are also fixed
 * Fixed array is also called as a tuple
 * Array is dynamic in typescript and fixed in tuple
 */

// Example 1: Tuple with 2 values

// let person: [string, number] = ["John", 25];
// console.log(person[0]);
// console.log(person[1]);


//Example 2: Tuple with multiple values

let user:[number, string, boolean, number] = [10, "Karthik",true,23];
console.log(user);
console.log(user[0]);
console.log(user[1]);

// Example 3: Interating over a tuple using a traditional loop
console.log('Using traditional for loop');

for(let i = 0; i<user.length; i++){
    console.log(user[i]);

}

//Example 4: Using a 'for....in' loop

console.log('Using for in loop');

for (let i in user){
    console.log(user[i]);

}

//Example 6: Tuple array(array of tuples)

let students:[number, string][] = [[101,"John"],[102, "Smith"],[103, "Peter"], [104, "scott"]];

console.log(students.length);
// console.log(students[0]);


let tp = students[1];
console.log(tp[0]); //102
console.log(tp[1]); //smith

