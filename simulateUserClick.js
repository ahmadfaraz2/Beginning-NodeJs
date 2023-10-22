function longRunningOperation(callBack) {
    // simulate a 3 second operation
    setTimeout(callBack, 3000);
}

function userClicked() {
    console.log("Starting a long operation");
    longRunningOperation(function () {
        console.log("Ending a long running operation.");
    });
}

// simulate a user action
userClicked();