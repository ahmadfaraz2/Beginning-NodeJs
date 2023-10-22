function longRunningOperation(callBack) {
    // simulate a 3 seconds operation
    setTimeout(callBack, 3000);
}

function webRequest(request) {
    console.log("Starting a long operation for request: ", request.id);
    longRunningOperation(function () {
        console.log("Ending a long operation for request: ", request.id);
    });
}

// simulate a web request
webRequest({ id: 1 });

// simulate a second web request
webRequest({ id: 2 });


// -----------------------------------------------------------

// Basically I don't what's going on but I hope in future it make sense
// If you told me it is just how Node.js handle requests from web server.