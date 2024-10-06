// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

function abc(num){
    if(num % 2 == 0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}
abc(10);

// • Task 2: Write a function to calculate the square of a number and return the result.

    function sqr(no){
        return no * no;
    }
    console.log(sqr(10))

// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

// In JavaScript, a function expression is a way to define a function within an expression. Function expressions can be stored in variables, passed as arguments to other functions, or even immediately invoked

const maxNum = function (num1, num2) {
    return Math.max(num1,num2)
  };

console.log(maxNum(50,20))


// • Task 4: Write a function expression to concatenate two strings and return the result.

const concate = function(str1,str2){
    return str1 + str2;
}
console.log(concate("Hello ","World"))



// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfNums = (num1,num2) =>{
    return (num1+ num2)
}
console.log(sumOfNums(10,20))

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const concateStr = (str1,char1) =>{
    if(str1.includes(char1)){
        return true;
    }else return false
   
}
console.log(concateStr("Hello World","e"))

// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const params = ( p1 , p2='javascript') =>{
    return  `${p1} Welcome to ${p2} series`
}
console.log(params('Hello'))

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age. 

const defaultDemo = ( p1 , p2='Mridu') =>{
    return  `${p1} to ${p2}`
}
console.log(defaultDemo('Greeting'))


// A higher-order function in JavaScript is a function that takes one or more functions as arguments, returns a function as a result, or both

// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const repeatFunction  = (func,times) =>{
    
    for(let i=1;i<=times;i++){
        func()
    }
};


function func(){
    console.log('Hello World')
}


repeatFunction(func, 3);

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.


const compose = (func1, func2) =>{
    return value => func2(func1(value));
} 

// Define two functions
// const add2 = x => x + 2;
const func1 = x => x + 2;

// const multiplyBy3 = x => x * 3;
const func2 = x => x * 3;

// Use `compose` to combine the functions
// const addThenMultiply = compose(add2, multiplyBy3);
const addThenMultiply = compose(func1, func2);


console.log(addThenMultiply(5)); // Output: 21 ( (5 + 2) * 3 )




