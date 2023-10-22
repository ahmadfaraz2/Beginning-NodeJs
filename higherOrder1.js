// ----------------------Higher Order Funcitons-------------------------

// Since JavaScript allow us to assigns functions to variables, we can pass
// functions to other functions.

// Functions that take functions as arguments are called "higher-order Functions"


setTimeout(function () {
    console.log("2000 milliseconds have passed since this demo started.");
}, 2000);

// Here setTimeout is a higher-order function.


// If we run this, we will see console.log message after 2 seconds and then the
// program will exit.