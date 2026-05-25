// Example 1: 1 2 3 4 5 (ascending order)

let i_while: number = 1;

do {
    console.log(i_while);
    i_while++;
} while (i_while <= 5);


// Example 2: 10 9 8 ... 1 (descending order)

let j: number = 10;

do {
    console.log(j);
    j--;
} while (j >= 1);


//use while loop when u want to check the condition before execution
// use do while when u need the loop to run at least once
// use for loop when u know the number of iterations 
// use break to stop a loop early
// use continue to skip an interation and proceed to next one
