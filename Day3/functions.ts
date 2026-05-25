// Function is basically like group of statements or it is a block of a code which does some operation like add sub or etc

function sum(): number {
    const a = 10;
    const b = 10;

    const sum_add = a + b;

    return sum_add;
}

console.log(sum());


// 2) Example
function show(): void{
    console.log("welcome");
}

show();

// 3) Example

function add_sum(x: number, y:number): number{
    return (x+y);
}

const res = add_sum(10, 30);
console.log(res);

