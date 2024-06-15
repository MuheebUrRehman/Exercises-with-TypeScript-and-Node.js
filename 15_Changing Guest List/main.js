var guestList = ["ali", "hamza", "fatima", "ayesha"];
var notComing = guestList[0];
console.log(notComing, "nhi aasakhta");
guestList.splice(0, 1, "amir");
guestList.forEach(function (guest) {
    return console.log("hello ".concat(guest, ", would like to do dinner with me?"));
});
