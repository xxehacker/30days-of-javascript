// Day 8: ES6+ Features
// Tasks/Activities:

// Template literals in JavaScript are a way to work with strings in a more flexible and readable manner. They are enclosed by backticks (` `) instead of single or double quotes

// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

// const name = 'John';
// const age = 30;

// const introduction = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(introduction);


// • Task 2: Create a multi-line string using template literals and log it to the console.
const intro = `Hello my name is mridupawan, i did my
bcom degree from arya vidyapeeth college
and now i am pursuing mca from assam downtown university.`
console.log(intro)



// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let array = [10,22]
let [first,second] = array;
console.log(first,second)

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let books = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925

}

let {title,author,year} = books;
console.log(title,author,year)

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.


    let arr = [1,2,3,4,5,6,7,8]
    let arr2 = [...arr,50,10,11,12,13,14]
    console.log(arr2)


// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args){
    let sum = 0;
    for(let i=0;i<args.length;i++){
        sum += args[i]
        }
    return sum
}
console.log(sum(1,2,3,4,5,6,7,8))


// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 2. Log the result of calling this function with and without the second parameter.

let xyz = (a,b = 2) =>{

    return a*b

}
console.log(xyz(10))


// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name = 'Alice';
const age = 28;

const person = {
  name, // Shorthand for name: name
  age,  // Shorthand for age: age
  greet() { 
    // Method shorthand
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  incrementAge(years = 1) { 
    // Method with default parameter
    this.age += years;
    console.log(`Age incremented. New age: ${this.age}`);
  }
};

console.log(person);
person.greet();
person.incrementAge(20);



// • Task 9: Create an object with computed property names based on variables and log the object to the console.

const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

const person1 = {
  [propName1]: 'John',
  [propName2]: 'Doe',
  [propName3]: 30
};

console.log(person1);
