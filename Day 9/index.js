// Day 9: DOM Manipulation

// Tasks/Activities:
// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.

    // let name = document.getElementById('name');
    // let info = document.getElementById('info');

    // console.log(name.innerHTML = 'Mridupawan')
    // console.log(info.innerHTML = 'Full Stack Developer and Cyber Security Analyst')

// • Task 2: Select an HTML element by its class and change its background color.

let card = document.getElementsByClassName('card');
console.log(card[0].style.backgroundColor = 'red')


// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.

    
    let body = document.getElementsByTagName("body")
    let main = document.getElementsByClassName('main')
//   console.log(body)
    let div = document.createElement('div')
    div.innerHTML = 'This is a new div element'
    div.className = 'card'
    main[0].appendChild(div)
    

// • Task 4: Create a new li element and add it to an existing ul list.


    let ul = document.getElementsByTagName('ul')
    let li = document.createElement('li')
    li.innerHTML = 'Contact'
    li.classList = 'thirdli'
    ul[0].appendChild(li)



// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.

    let thirdli = document.getElementsByClassName('thirdli')
    thirdli[0].remove()

// • Task 6: Remove the last child of a specific HTML element.


        let mainsec = document.getElementsByClassName('main')
        mainsec[0].lastChild.remove()




// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag). 

    let img2 = document.getElementsByClassName('img2')
    img2[0].src = 'https://www.w3schools.com/spaces/languages.png'
    img2[0].alt = 'Languages'
    img2[0].title = 'Languages'
    img2[0].style.width = '250px'
    img2[0].style.height = '250px'


// • Task 8: Add and remove a CSS class to/from an HTML element.


function colorchanger(){
    let button = document.getElementsByClassName('colorchanger')
    button[0].classList.toggle('highlight')
}




// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.

let info = document.getElementById('info')
let changeme = document.getElementById('changeme')
changeme.addEventListener('click', function(){
    info.innerHTML = 'Hacker and full stack developer'
    
})


// • Task 10: Add a mouseover event listener to an element that changes its border color.

let card1 = document.getElementById('card1')
let changeme2 = document.getElementById('changeme')
changeme2.addEventListener('click', function(){
    card1.style.border = 'solid yellow'
    
})
