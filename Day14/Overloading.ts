// Method Overloading and constructor overloading in typescript
// A constructor is a special method that is automatically called when an object is created using the new keyword.
// Constructor overloading means creating objects in different ways.
// Method overloading means the same method name can accept different parameters.

class Calculator{

    // constructor overloading
    constructor(); //default constructor
    constructor(a:number, b:number); //parameterized constructor

    constructor(a?:number, b?: number){

        if(a!==undefined && b!==undefined){
            console.log("sum of a and b", (a+b));
        }
        else{
            console.log("Default constructor called....");
        }
    }
    // Method Overloading
    add(a:number, b:number):number;
    add(a:number, b:number, c:number):number; 

    add(a:number, b:number, c?:number):number{
        if(c!== undefined){
            return a+b+c;
        }
        return a+b;
    }
}

//Constructor Overloading

let calc1 = new Calculator();
let calc2 = new Calculator(10,30);

//Method Overloading

console.log('adding two numbers',calc1.add(10,20));
console.log('adding three numbers',calc2.add(10,20,30));
