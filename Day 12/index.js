// Day 12: Error Handling Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. 

function intentionallyThrowError() {
    throw new Error("This is an intentional error!");
}

function main() {
    try {
        intentionallyThrowError();
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

main()

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
    }
    return numerator / denominator;
}

function main() {
    const num1 = 10;
    const num2 = 0;

    try {
        const result = divideNumbers(num1, num2);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

main();


// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow. 

function parseJSON(jsonString) {
    try {
        console.log("Attempting to parse JSON.");
        let data = JSON.parse(jsonString);
        console.log("Parsed JSON successfully:", data);
    } catch (error) {
        console.log(`Error parsing JSON: ${error.message}`);
    } finally {
        console.log("Finished JSON parsing attempt.");
    }
}

// Example JSON strings
let validJsonString = '{"name": "John", "age": 30}';
let invalidJsonString = '{"name": "John", "age": 30'; // Missing closing brace

console.log("Parsing valid JSON:");
parseJSON(validJsonString);

console.log("\nParsing invalid JSON:");
parseJSON(invalidJsonString);



// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

// Define a custom error class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function exampleFunction() {
    try {
        throw new CustomError("This is a custom error.");
    } catch (error) {
        console.log(`Caught error: ${error.name} - ${error.message}`);
    }
}

exampleFunction();



// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try- catch block.


function validateInput(input) {
    if (!input || input.trim() === "") {
        const error = new Error("Input cannot be empty.");
        error.name = "ValidationError";
        throw error;
    }
    console.log("Input is valid.");
}

function main() {
    const userInput = ""; 

    try {
        validateInput(userInput);
    } catch (error) {
        if (error.name === "ValidationError") {
            console.log(`Validation Error: ${error.message}`);
        } else {
            console.log(`Unexpected Error: ${error.message}`);
        }
    }
}

main();

// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

function createRandomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve("Promise resolved successfully.");
        } else {
            reject("Promise rejected.");
        }
    });
}

createRandomPromise()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });




// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.


function createRandomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve("Promise resolved successfully.");
        } else {
            reject("Promise rejected.");
        }
    });
}

async function handlePromise() {
    try {
        // Await the result of the promise
        const result = await createRandomPromise();
        console.log(result);
    } catch (error) {
        // Handle and log the error if rejected
        console.error(`Caught an error: ${error}`);
    }
}
handlePromise();



//  Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

const invalidUrl = "https://invalid.url/endpoint";

fetch(invalidUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
    })
    .catch(error => {
        console.error(`Error fetching data: ${error.message}`);
    });



// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    const invalidUrl = "https://invalid.url/endpoint";

    try {
        const response = await fetch(invalidUrl);
        
        if (!response.ok) {
            // If the response status is not OK, throw an error
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

fetchData();



// using arrow function 
const hello = async () =>{

    try {
        const response = await fetch("api.github.com/users/xxehacker")
        const data  =  await response.json()
        console.log(data);
        
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}