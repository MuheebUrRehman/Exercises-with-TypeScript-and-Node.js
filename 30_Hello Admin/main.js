var userNames = ["mahad", "ali", "zeeshan", "admin", "usman"];
userNames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thank you for logging in again."));
    }
});
