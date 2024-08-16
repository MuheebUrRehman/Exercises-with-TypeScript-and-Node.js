// creating a guest list array
var guestList = ["ali", "hamza", "fatima", "ayesha"];
//making variable for those guest who cant come
var notComing = guestList[0];
// print the name of the guest who cant come
console.log(notComing, "nhi aasakhta");
// add or remove value from guest list array
guestList.splice(0, 1, "amir");
//message print for bigger table
console.log("good news! we have a bigger table for dinner");
//adding a new guest at the starting of array
guestList.unshift("ibrahim");
//adding a new guest at the ending of array
guestList.push("zain");
//get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest at the middle of array
guestList.splice(middleIndex, 0, "osama");
//print a msg
console.log("updated list");
//sending msg to our guest one by one
guestList.forEach(function (oneGuest) {
    return console.log("salam ".concat(oneGuest, ", would you like to dinner with me"));
});
// inform that only two friend can be invited
console.log("unfortunately i wont be able to arrange the table, so i can only invite two of you guys");
//using while loop to remove guests from the array until two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry, ".concat(removedGuest, " i can't invite you to dinner"));
}
// sending invitation to last two guests
console.log("invition to last two guests");
guestList.forEach(function (lastTwo) {
    return console.log("luckily ".concat(lastTwo, " you are still invited"));
});
//removing last to guest
guestList.pop();
guestList.pop();
console.log("empty list", guestList);
