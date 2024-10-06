// Day 3 
// Control Structure 


// if-else Statement 
// Task 1 : Write a program to check if a numberis positive , negavite or zero and log the result to the console

let user = -1
let userNum = Number(user)
// console.log(typeof(userNum))


if (userNum <= 0) {
    console.log("The number is negative or zero")
} else {
    console.log("The number is positive")
}

// Task 2 : write a program to check if a personis eligible to vote and log the result to console
let userAge = Number(10)

if (userAge > 18) {
    console.log("You are an adult. You can vote")
} else {
    console.log("You are a child. You can't vote")
}


// Nested if-else statement 

// Task 3: write a program to find the largest of three numbers using nested if else statement

let num1 = 10
let num2 = 20
let num3 = 30


if (num1 > num2 && num1 > num3) {
    console.log("The largest number is: " + num1)
} else if (num2 > num1 && num2 > num3) {
    console.log("The largest number is: " + num2)
} else {
    console.log("The largest number is: " + num3)
}


// Switch Case 

// Task 4 : Write a programthat uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console 

let userInp = 6

switch (userInp) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;

    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;

    default:
        console.log("Invalid Number")
        break;
}

// Task 5 :  Write a program that uses a switch case to assign a grade ('A' , "B" , 'C' , "D" "E") based on a score and log the grade to the console

let grade = 60

switch (grade) {
    case (grade >= 85):
        console.log('A')
        break;
    case (grade >= 75):
        console.log('B')
        break;
    case (grade >= 60):
        console.log('C')
        break;
    case (grade >= 45):
        console.log('D')
        break;
    case (grade >= 30):
        console.log('E')
        break;

    case (grade < 30):
        console.log('Failed')
        break

    default:
        console.log("Invalid Grade ")
        break;
}


// Conditional (Ternary) Operator 

// task 6: Write a program that uses the ternary operator to check if a number is even or oddand log the result to the console

let num = 10
num % 2 == 0 ? console.log('Even') : console.log('Odd')

// Combining conditions 
// task 7 : Write a program to check if a year is leap year using multiple conditions(divisible by 4 , but not 100 unless also divisible by 400) and log the result to the console

let year = 2024

// ternary operator 
year % 4 == 0 && year % 100 != 0 || year % 400 === 0
    ? console.log('Leap Year') : console.log('Not a Leap Year')

// normal operator 
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log('Leap Year')
} else {
    console.log('Not a Leap Year')
}
