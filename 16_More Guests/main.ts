// creating a guest list array
let guestList = ["ali", "hamza", "fatima", "ayesha"];

//making variable for those guest who cant come
let notComing = guestList[0];

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
let middleIndex: number = Math.floor(guestList.length / 2);

//adding a new guest at the middle of array
guestList.splice(middleIndex, 0, "osama");

//print a msg
console.log("updated list");

//sending message to our guest one by one
guestList.forEach((oneGuest) =>
  console.log(`salam ${oneGuest}, would you like to dinner with me`)
);
