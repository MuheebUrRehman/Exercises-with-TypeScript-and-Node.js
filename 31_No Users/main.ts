let userNames = ["mahad", "ali", "zeeshan", "admin", "usman"];

userNames = [];

if (userNames.length === 0) {
  console.log("your array is empty We need to find some users!");
} else {
  userNames.forEach((oneuser) => {
    if (oneuser === "admin") {
      console.log(`hello ${oneuser}, would you like to see a status report?`);
    } else {
      console.log(`hello ${oneuser}, thank you for logging in again.`);
    }
  });
}
