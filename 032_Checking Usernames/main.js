// array of current users
var current_users = ["usman", "Ali", "areeba", "zain", "osama"];
// array of new users
var new_users = ["Hamza", "Ayesha", "ali", "mahad", "Areeba"];
// loop through new_users to check for user names availability
new_users.forEach(function (new_one_user) {
    // make a condition for user name already taken and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) {
        return current_one_user.toLowerCase() === new_one_user.toLowerCase();
    });
    //print diffrent messages using if else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this username is ".concat(new_one_user, " is available"));
    }
});
