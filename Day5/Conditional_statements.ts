// // if condition

// if(condition){
//     //statements
// }


/*

if (condition)
{
    statements;

}

else
{
    statements;
}

*/

// Example 1: If age is greater than or equal to 10 : you print the message you are eligible to vote

let age_condition = 40;

if (age_condition >= 18){

    console.log('You are eligible to vote');

}

else{
    console.log('You are not eligible to vote')
}

// Example 2; Print number is even or odd

let number_even_odd = 3

if (number_even_odd %2 == 0){
    console.log('It is an even number');

}

else{
    console.log('It is an odd number');

}


//Example 3; Browser selection

let browser_selection: string = "Chrome";

if (browser_selection === "Chrome"){

    console.log("browser is chrome");

}
else if (browser_selection === "Firefox"){

    console.log("Browser is firefox");

}

else if (browser_selection === "Safari"){

    console.log("Browser is safari");

}

else{
    console.log('Other Browser');
}


//Switch case statement

let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

 