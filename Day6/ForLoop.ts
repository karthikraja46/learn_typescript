// For loop : A for loop is typically used when the the number of iterations are known

/* Syntax

for (initializaition; condition; incr/decre)
{
    statements;
}

*/

//Example 1: print 1....10

for(let i = 1; i<=10; i++){
    console.log('printing the values from 1 to 10',i);

}

// Example 2: print even numbers between 1 to 10

for (let i = 1; i<=10; i++){
    if (i %2 == 0){
        console.log('the even numbers are', i);
    }

    else{
        console.log('Odd numbers are', i);
        
    }
}

//Example 4: 

console.log('new method');

let i: number;

for (i =1; i<=5; i++){
    console.log(i)
}

console.log(i)
