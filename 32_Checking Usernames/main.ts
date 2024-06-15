// array of current users
let current_users = ["usman", "Ali", "areeba", "zain", "osama"];

// array of new users
let new_users = ["Hamza", "Ayesha", "ali", "mahad", "Areeba"];

// loop through new_users to check for user names availability
new_users.forEach((new_one_user) => {
  // make a condition for user name already taken and save in our_condition variable
  let our_condition = current_users.some(
    (current_one_user) =>
      current_one_user.toLowerCase() === new_one_user.toLowerCase()
  );

  //print diffrent messages using if else statement
  if (our_condition) {
    console.log(`sorry ${new_one_user} is already taken`);
  } else {
    console.log(`this username is ${new_one_user} is available`);
  }
});
