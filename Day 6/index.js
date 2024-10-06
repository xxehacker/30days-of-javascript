// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const arr = [1,2,3,4,5]
console.log(arr)
console.log(typeof(arr))


// • Task 2: Access the first and last elements of the array and log them to the console.

// const array = [1,2,3,4,5]
// console.log(array[0])

// const lastElement = array[array.length - 1];
// console.log(lastElement)



// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

const array = [10, 20, 30, 40, 50];
array.push(60);
console.log(array)

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.

const array1 = [10, 20, 30, 40, 50];
// array1.pop()
// console.log(array1)

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
const array2 = [10, 20, 30, 40, 50];
// remove the first Element from a array
array2.shift()
console.log(array2)

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

const array3 = [10, 20, 30, 40, 50];
array3.unshift()
console.log(array3)

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const array5 = [10, 20, 30, 40, 50];
const doubledArray = array5.map(number => number * 4);
console.log(doubledArray);

// Other use of map method 
const words = ['hello', 'world', 'javascript'];
const uppercasedWords = words.map(word => word.toUpperCase());

console.log(uppercasedWords);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const numbers = [10, 15, 20, 25, 30, 35];

const evenNumbers = numbers.filter(number => number % 2 === 0);

// Not working with map : output-> [ true, false, true, false, true, false ]
// const evennum = numbers.map(num => num % 2 === 0)

console.log(evenNumbers);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const numbers2 = [10, 20, 30, 40, 50];

const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Not working with map : output-> [ 20, 40, 60, 80, 100 ]
// const sum3 = numbers2.map(num => num + num )

console.log(sum);

// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.

const hello = [ 20, 40, 60, 80, 100 ]
for (let i = 0; i < hello.length; i++) {
    console.log(hello[i])
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.

const hello1 = [ 20, 40, 60, 80, 100 ]
hello1.forEach(element => console.log(element))


// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// Create a two-dimensional array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
// console.log(matrix);
  


// • Task 13: Access and log a specific element from the two-dimensional array.
// Create a two-dimensional array (matrix)
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];


  const element = matrix1[1][1];  
  
  console.log(element); 