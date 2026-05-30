//Object - object contains properties and behaviour
// Object contains variables and methods
// object is collection of key and value pairs.

// Example : name, designation, salary, department
// bonus(), getEmpDetails(), setDetails()

// student - name, sid, grade
        //getDetails(), setDetails()


// There are different ways to create an object in TS/JS
// 1. Using 'object' type - Directly defining the values for the variable
// 2. Inline Type Object - We also define the datatype of the keys
// 3.Using type aliases (JS/TS)
// 4. Using the classes (JS ES16/TS)


// 1. Using 'object' type - Directly defining the values for the variable
// The typescript 'object' type represents all values that are not in primitive types
// Here we use it with key value pairs

// let employee = { name: "Raj", age: 25, salary: 50000, job: "Engineer"};

let employee = {
    name: "John",
    age: 30,
    salary: 30000,
    job: "Engineer",

    getDetails: function () {
        console.log(this.name, this.age, this.salary, this.job);
    }
};


//accessing the object (using .notation)
console.log(employee.getDetails());
console.log(employee.name, employee.age);

// accesing the object - approach 2(using bracket notation)
console.log(employee["name"], employee["salary"], employee["job"]);
console.log(employee["getDetails"]());

//if u want to modify the value
employee.job = "manager";
console.log(employee.job);



// 2. Inline type object - We also define the datatype of the keys(TS)
let student: {
    name: string;
    age: number;
    grade: string;
    getSummary: () => string;
} = {
    name: "Scott",
    age: 15,
    grade: "A",

    getSummary(): string {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
};

console.log(student.getSummary());

// let x:number // declaration
// x = 10; // assigning data to variable

//Problem with Inline Type object  : need to repeat the stucture for every object

// Problem with Inline Type Object:
// Need to repeat the structure for every object

let student1: {
    name: string;
    age: number;
    grade: string;
    getSummary: () => string;
} = {
    name: "Marry",
    age: 16,
    grade: "B",

    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
};

console.log(student1.getSummary());


// 3. Using type aliasd (TS) : allows creating a new name for an existing type

// Example1:
// Example 1

type Product = {
    name: string;
    price: number;
    getInfo: () => string;
};

const book1: Product = {
    name: "Learning TypeScript",
    price: 500,

    getInfo() {
        return `${this.name} costs ${this.price}`;
    }
};

const book2: Product = {
    name: "Mastering Playwright",
    price: 750,

    getInfo() {
        return `${this.name} costs ${this.price}`;
    }
};

const book3: Product = {
    name: "Automation Testing Guide",
    price: 650,

    getInfo() {
        return `${this.name} costs ${this.price}`;
    }
};

const book4: Product = {
    name: "JavaScript for Beginners",
    price: 450,

    getInfo() {
        return `${this.name} costs ${this.price}`;
    }
};

console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());
console.log(book4.getInfo());

for (const i in book3){
    console.log(book3.name);
    console.log(book3.price);
}


// Example 2: Intersection Types

type Personal = {
    name : string,
    age: number
};

type Contact = {
    email: string,
    phone: number
};

type Candidate = Personal & Contact & {
    getContactInfo:()=>string;
}

let cand: Candidate = {
    name: "Scott",
    age: 18,
    email: 'nkarthikraja46@gmail.com',
    phone: 234234343525,
    getContactInfo: function(){
        return `${this.name} can be contacted at ${this.email} or ${this.phone}`;

    }
}

console.log(cand.getContactInfo());

// 4) Using the classes (JS/TS)
// 4. Using Classes (JS ES6 / TS)

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) { // constructor will not return any value 
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails(): string {
        return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
    }
}

const person1 = new Person(
    "123456789",
    "Scott",
    "Tiger"
);

console.log(person1.getFullName());
console.log(person1.getDetails());