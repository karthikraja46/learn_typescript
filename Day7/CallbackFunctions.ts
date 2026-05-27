// // In TypeScript, a callback function is a function passed as an argument to another function, so it can be executed later.

// function greet_raj(name: string, callback: () => void): void { //parameters
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye(): void {
//   console.log("Goodbye!");
// }

// greet_raj("John", sayBye); // arguments

//Why use callback Functions?
// 1) Useful when you want a function to execute only after another function
// 2) This is common in asynhronous operations like API calls, file handling and event handling
// 3) synchronous means the code runs in a particular sequence of instructions given in the program



// Example 1: 

//Function that takes callback function as a parameter

function greet_raj(name: string, smg:(message:string)=> void){
    console.log(name);
    smg("Hello"); // Executing the callback functions
}

//callback function
function showMessage(message: string){
    console.log(message);
}

//calling the function by passing the callback function
greet_raj("John", showMessage)


// Example 2: 

function sum_raja(a:number, b:number, callback:(result: number) => void)
{
    let result = a + b;
    callback(result); // executing the callback function

}

//callback function
function displayResult(result: number): void
{
    console.log(result);

}
sum_raja(10, 20, displayResult);
