function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction); // Access a variable from outer scope
    }

    // call the local function to demonstrate that it has access to arg
    bar();
}

outerFunction("Hello Ahmad!");



// -----------------------------Some explanation---------------------------

// Whenever we have a function defined inside another function, the inner function
// has access to the variables declared in the outer function.



// -------------------------------Defination--------------------------------

// In JavaScript, a closure is a function that has access to the
// variables and parameters of the outer (enclosing) function in
// which it was declared, even after that outer function has completed execution.