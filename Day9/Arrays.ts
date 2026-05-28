/* 
    Arrays in Typescript:

    An array is a special type of variable that stores multiple values
    THe values can be of the same datatype or different data types
    Indexing starts from 0
    Arrays are an ordered collection of elements
    Arrays are declared using '[]' or the generic Array<T> type.

*/

// 1) approach 1: Using literal

// let names: string[] = []; // declaration

//initialization/assignning values

// names[0] = "John";
// names[1] = "Smith";
// names[2] = "Peter";
// names[3] = "Scott";

let names: string[] = ["john", "smith", "peter", "scott"];

// 2) approach 2: Using the generic type Array<T> type

let empNames: Array<string> = ["john", "smith", "peter", "scott"];
let empIds: Array<number> = [101,102,103,104];
let data: Array<string | number> = ["john", "smith", 100,104]
let mixedData:Array<any> = [1,'John',true,null];


//Example 1: Interating over an array using a traditional for loop

console.log('size of an array', empNames.length);

for (let i = 0; i<=empNames.length-1; i++){
    console.log(empNames[i]);
}

for (let i = 0; i<empNames.length; i++){
    console.log(empNames[i]);
}

//Example 2: Iterating using the 'for...in' loop(indexes)

console.log("Employee IDs");
for (let i in empIds){
    console.log(empIds[i]);
}

//Example 3: Iterating using the 'for....of' loop(values):
console.log('Mixed data....')

for(let value of data)
{
    console.log(value);
}

// Example 4: Paasing an Array to the function

//search an element in an array using function

function search(ele:number, arr:number[]):boolean{

    for(let i = 0; i<arr.length; i++){
        if (arr[i] === ele){
            return true;
        }
    }
    return false;


}

// let linear_search = search(30, [10,20,30,50]);
// console.log('the element found is',linear_search);

let arr: number[] = [10,20,40,50];
let target: number = 40
let linear_search = search(target, arr);
console.log('the element found is: ',linear_search)
// using the binary search

function binary_search(nums: number[], target: number): boolean {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return true;
        }

        else if (nums[mid] < target) {
            left = mid + 1;
        }

        else {
            right = mid - 1;
        }
    }

    return false;
}

let nums: number[] = [10,20,40,50];
let target_binary: number = 40
let binary_search_solve = search(target_binary, nums);
console.log('Finding element using binary search',binary_search_solve);

//Example 5: A function takes an array and returns an array

function capitalizeWords(arr:string[]): string[]{

    let result:string[] = [];
    for (let i = 0; i<arr.length; i++){
        // console.log(arr[i]);
        result[i] = arr[i].toUpperCase();
    }
    return result;
}

console.log(capitalizeWords(["tree","hello","world","typescript"]));
