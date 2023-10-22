var foo1 = function namedFunction() { // here we should not use name, just wasted characters.
    console.log("foo1 executed!");
}
foo1();

// namedFunction(); // give error undefined


var foo2 = function () { // no function name given i.e anonymous function
    console.log("foo2 executed!");
}

foo2();