// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.

let changeme = document.getElementById('changeme')
let infoparagraph = document.getElementById('info')
changeme.addEventListener('click', function () {
    infoparagraph.textContent = 'You clicked the button!'
})


// • Task 2: Add a double-click event listener to an image that toggles its visibility.

let image = document.getElementsByClassName('img2')
console.log('Image element:', image);
let changeButton = document.getElementById('change')
// console.log('Change button:', changeButton);
changeButton.addEventListener('click', function () {

    if (image) {
        image[0].style.visibility = 'hidden';
    } else {
        console.error('Image element not found.');
    }
})


// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.

let main = document.getElementsByClassName('main')
console.log('Main element:', main);
main[0].addEventListener('mouseover', function () {
    main[0].style.backgroundColor = 'red';
})




// • Task 4: Add a mouseout event listener to an element that resets its background color.

main[0].addEventListener('mouseout', function () {
    main[0].style.backgroundColor = 'white';
})

// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.


// document.getElementById('myInput').addEventListener('keydown', function (event) {
//     console.log('Key pressed:', event.key);
// });


// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

document.getElementById('myInput').addEventListener('keyup', function (event) {
    document.getElementById('myP').innerHTML = event.target.value;
});

// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console. 

document.getElementById('myForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the form data
    let formData = new FormData(event.target);

    // Log each form field's name and value to the console
    for (const [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
    }

});



// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

    // code: index2.html 

// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

    // code: index3.html 
    
// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
 
// code: index4.html 