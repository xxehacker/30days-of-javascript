
// Day 11: Promises and Async/Await
// Tasks/Activities:


// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
    function delayedMessage() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("This message is logged after a 2-second delay.");
            }, 2000);
        });
    }

    // delayedMessage().then((message) => {
    //     console.log(message);
    // });


// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

function delayedError() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("This is an error message after a 2-second delay."));
      }, 2000);
    });
  }
  
//   delayedError()
//     .catch((error) => {
//       console.error(error.message);
//     });
  

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order. 

function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetched data from server 1");
        resolve("Data from server 1");
      }, 1000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetched data from server 2");
        resolve("Data from server 2");
      }, 2000);
    });
  }
  
  function fetchData3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetched data from server 3");
        resolve("Data from server 3");
      }, 3000);
    });
  }
  
//   fetchData1()
//     .then((data1) => {
//       console.log(data1);
//       return fetchData2();
//     })
//     .then((data2) => {
//       console.log(data2);
//       return fetchData3();
//     })
//     .then((data3) => {
//       console.log(data3);
//       console.log("All data fetched");
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
  


// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.


async function logResolvedValue() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Resolved value after waiting");
      }, 2000);
    });
  
    try {
      const resolvedValue = await promise;
      console.log(resolvedValue);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
//   logResolvedValue();

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function handleRejectedPromise() {
    const promise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("This is an error message after a 2-second delay."));
      }, 2000);
    });
  
    try {
      const result = await promise;
      console.log(result); // This will not run if the promise is rejected
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
//   handleRejectedPromise();

// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example API URL

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Response data:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
//   fetchData();
  

// await. Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Promise 1 resolved");
//     }, 1000);
//   });
  
//   const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Promise 2 resolved");
//     }, 2000);
//   });
  
//   const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Promise 3 resolved");
//     }, 3000);
//   });
  
//   Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//       console.log(values); // Logs: ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
//     })
//     .catch((error) => {
//       console.error("One of the promises rejected:", error);
//     });
  
    // In this example, Promise.all waits for all three promises to resolve. Once they are all resolved, it logs their values as an array to the console. If any of the promises reject, the catch block will handle the error.

// • Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  });
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 2000);
  });
  
  const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved");
    }, 3000);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values); // Logs: ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
    })
    .catch((error) => {
      console.error("One of the promises rejected:", error);
    });
  
    // In this example, Promise.race waits for the first promise to resolve. Once the first promise resolves, it logs its value to the console. If any promise rejects before a resolution, the catch block will handle the error.