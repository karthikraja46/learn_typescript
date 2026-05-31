// / Inheritance:
// //A class can reuse the properties and methods of another class.
// // Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class (parent).
// // Inheritance allows you to reuse the functionality of an existing class without rewriting it.

// / Method Overriding:
// // A subclass/child calss can provide a specific implementation of a method that is already defined in its superclass.

// A ---- properties + methods (parent class/ BaseClass/ Super class)
// B ---- properties_methods(child class/ subclass/ derived class)

class Car {
    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start() {
        console.log("Car is started....");
    }

    stop() {
        console.log("Car is stopped....");
    }

    displayInformation() {
        console.log(
            `Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`
        );
    }
}

// Child Class
class Honda extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model); // Call parent constructor
        this.year = year;
    }

    // Method Overriding
    start() {
        console.log("Honda started...");
    }

    yom() {
        console.log(`Year: ${this.year}`);
    }
}

const h1 = new Honda("Honda City", "White", "ZX", 2025);

h1.start();                // Honda started...
h1.stop();                 // Inherited from Car
h1.displayInformation();   // Inherited from Car
h1.yom();