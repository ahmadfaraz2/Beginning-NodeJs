function foo() {
    return 123;
}

console.log(foo());


// The "return" keyword basically stored the return value in function name.
// Check the difference

function bar() {
    console.log("It just showed to the console.");
}

bar();



// undefined function
function bas() {
    // empty body
}

console.log(bas()); // undefined