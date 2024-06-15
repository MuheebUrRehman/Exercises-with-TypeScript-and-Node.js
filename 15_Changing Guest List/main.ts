let guestList = ["ali", "hamza", "fatima", "ayesha"];

let notComing = guestList[0];

console.log(notComing, "nhi aasakhta");

guestList.splice(0, 1, "amir");

guestList.forEach((guest) =>
  console.log(`hello ${guest}, would like to do dinner with me?`)
);
