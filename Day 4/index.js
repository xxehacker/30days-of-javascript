// Day 4 
// Loop

// Task 1 : write a program to print numbers from 1 to 10 using a for loop

// let num  = 10

// for (let index = 1; index <= num; index++) {
//     console.log(index)
// }

// Task 2 : write a program to print the multiplication table of 5 usinga for loop

// let num1  = 10

// for (let index = 1; index <= num1; index++) {
//     console.log(`${index} * 5 = ${index*5}`)
// }

// Task 3 :  write a program to calculate the sum of numbers from 1 to 10 uisng a while loop


let sum = 0
let num2 = 10
let index = 1


while (num2>=index) {

    sum = sum + index
    index = index + 1
    
}
// console.log(sum)


// Task 4 :  write a program to print numbers from 10 to 1 using a while loop


let num3 = 10

while(num3>0){
    // console.log(num3)
    num3 = num3 - 1
}


// Do while loop 
// Task 5 : write a program to print numbers from 1 to 5 using a do while loop.


let num4 = 0;

do {
    num4 = num4 + 1;
    // console.log(num4);
} while (num4 < 5);


// Task 6 : write a loop to calculate the factorial of a number using a do while loop

function factorial(n) {
    let result = 1;
    let i = n;

    do {
        result *= i;
        i--;
    } while (i > 0);

    return result;
}

// Example usage:
let number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);


// Nested loop 
// Task 7 : write a program to print a pattern using nested for loops

let numberOfRows = 5;

for (let i = 1; i <= numberOfRows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

