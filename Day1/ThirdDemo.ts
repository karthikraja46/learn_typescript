let y = 40;

y = 50;
console.log(y); // Output: 50

y = 'Hello';
console.log(y); // Error due to type safety in TypeScript

//type safety in TypeScript
let z: number = 60;
console.log(z); // Output: 60

z = 70; // Valid assignment
console.log(z); // Output: 70

// z = 'World'; // Error: Type 'string' is not assignable to type 'number'



