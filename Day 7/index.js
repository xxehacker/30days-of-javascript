// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.


    // let books = {
    //     title: "The Hobbit",
    //     author: "J.R.R. Tolkien",
    //     year: 1937
        
    // }
    // console.log(books);



// • Task 2: Access and log the title and author properties of the book object.

// let books = {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     year: 1937
    
// }
// console.log(books.title , books.author);


// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.


// let books = {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     year: 1937
    
// }
// // method creation
// books.print = function() {
//     return this.title + " by " + this.author;
// }

// console.log(books.print());

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

let books = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
    
}
books.print = function(yr){

    // update value 
    return this.year = yr 
}

// console.log(books.print(2000) , books);

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

// let library = {
//     name: "Biblioteka",
//     books: 
//     [
//         {title: "The Hobbit", author: "J.R.R. Tolkien", year:1937},
//         {title: "The Lord of the Rings", author: "J.R.R. Tolkien",year:1954}
//     ]

// }
// console.log(library);


// Task 6: Access and log the name of the library and the titles of all the books in the library.

let library = {
    name: "Biblioteka",
    books: 
    [
        {title: "The Hobbit", author: "J.R.R. Tolkien", year:1937},
        {title: "The Lord of the Rings", author: "J.D.F. Tolkien",year:1954}
    ]

}
// console.log(library.name , "|" , library.books[0].title , "|" , library.books[1].title);
// console.log(library.books[0].author ,"|" , library.books[1].author)


// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method. 

let books1 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    print: function(){
        return this.title + " " + this.author + " " + this.year
    }
}

console.log(books1.print())


// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.


let books2 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
}

for (let key in books2) {
    console.log(key, ":", books2[key]);
}


// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

let books3 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
}

console.log(Object.keys(books3));
console.log(Object.values(books3));