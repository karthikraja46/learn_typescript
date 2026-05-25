// Named Functions : A function that is declared with a name 

/*
Syntax

function functionName(parameter): returnType {
    //block of code
}
*/

// functionName(); // Calling the fucntion/invoking the function
// if it does not have any run type keep void


// Example 1: Named function with no parameter and no return type

function display(): void {
    console.log('Welcome to Tpescript');

}

display();
display(); //calling function


// Example 2: Named functions with parameters and return type

function Add_Numbers(x: number, y: number): number{

    return x+y;

}

// console.log(Add_Numbers(10, 5));


let result: number = Add_Numbers(10, 5);
console.log(result);

// Example 3: Named functions with rest paramters
// Rest paramaters dont restrict the number of values that u can pass to a fucntion

// ...nums: number[] is a rest paramter

function add_numbers(...nums:number[]): void{

    let sum: number = 0;
    for (let i = 0; i< nums.length; i++){
        sum = sum + nums[i];
        
    }

    // return sum;
    console.log('sum of the numbers', sum);


}

add_numbers(1,2,3,4,5);
add_numbers(1,2,3);

// Example 4: Named functions with rest parameters - multiple types

function findElements(...elements:(number | string)[]): number{
    return elements.length;
}

let finding_elements = findElements(3,"john",5,"karthik");
console.log(finding_elements);
