// Operators 

// 1. Arithmetic Operators

// Task 1 : Write a program to add,subtract,mul,divide,reminder two numbers and log the ressult to the console
let num1 = 10
let num2 = 20
console.log(num1 + num2 , num1 - num2)
console.log(num1 * num2 , num1 / num2 , num1 % num2)

// 2. Assignment Operators

// Task 2 : Use the += and -= operator to add a number to a variable and log the result to the console
let num3 = 10
num3 += 10
console.log(num3)

let num4 = 10
num4 -= 10
console.log(num4)


// 3. Comparison Operators

// Task 3 : Write a program to compare two numbers using > and < and => and <= and == and === and log the result to the console

let n1 = 20
let n2 = 10
console.log(n1>n2)
console.log(n1<n2)
console.log(n1>=n2)
console.log(n1<=n2)
console.log(n1==n2)
console.log(n1===n2)

// 4. Logical Operators

// Task 4 : write a program that uses the && , || , ! operators to combine two conditioms amd log the result to the console


let number1 = 10
let number2 = 20
let number3 = 5

// and 
// T = T == T
// T = F = F 
if (number1 < number2 && number1 > number3){
    console.log("Number1 is greater than number2 and number3")
}

// or 
// T = T == T
// T = F = T
if (number1 < number2 || number1 < number3){
    console.log("Number1 is greater than number2 or Number1 is Less than number3")
}

// not equal 
if (number1 != number2){
    console.log(true)
}else{
    console.log(false)
}

// 5. Conditional (Ternary) Operator

let r1 = 100
let r2 = 200
// condition ? true : false
let result = r1 < r2 ? console.log('R2 is greater') : console.log('R1 is greater')
console.log(result)