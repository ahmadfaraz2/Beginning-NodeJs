function outerFunction(arg) {
    var variableInOuterFunction = arg;
    return function () {
        console.log(variableInOuterFunction);
    }
}

var innerFunction = outerFunction("Hello, Ahmad!");

// outerFunction("Hello, Faraz!"); // return nothing
// console.log(innerFunction); // return "Function (anonymous)"

innerFunction(); // return "Hello, Ahmad!"



//  Seriously this thing is out of my mind now.


// ---------------------------Conclusion-----------------------

// So the variable we initialize "innerFunction" become the
// function name for the return value of the "outerFunction".