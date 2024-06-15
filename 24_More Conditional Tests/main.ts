// variable
let apple = "apple";
let upperCase = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// checking the equality and inequality of string

console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");

//tests using lowercase function
console.log("\nis APPLE is equal to apple after converting to lowercase");
console.log(upperCase.toLowerCase() == "apple");

console.log("\nis APPLE is not equal to apple after converting to lowercase");
console.log(upperCase.toLowerCase() != "apple");

// numerical test
// equals to
console.log("\nis ten is equal to twenty");
console.log(ten == twenty);

// not equal to
console.log("\nis ten is not equal to twenty");
console.log(ten != twenty);

// greater then
console.log("\nis ten is greater then zero");
console.log(ten > 0);

// lesser then
console.log("\nis twenty is less then ten");
console.log(twenty < ten);

//greater then equal to
console.log("\nis ten greater than equal to 5");
console.log(ten >= 5);

// lesser then or equal to
console.log("\nis twenty lesser then equal to 10");
console.log(twenty <= 10);

//tests 'and' & 'or' operators

//using '&&' (and)
console.log("\ntwenty is not equals to 10 and and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equals to 10 and and twenty is greater then 30");
console.log(twenty != 10 && twenty > 30);

// using || (or)
console.log("\n20 is greater then 50 or 20 is equals to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is greater then 50 or 20 is not equals to 20");
console.log(20 > 50 || 20 != 20);

//check wether the item is include is array
console.log("\nis orange include in my fruits array");
console.log(fruits.includes("orange"));

//not include
console.log("\nis orange not include in my fruits array");
console.log(!fruits.includes("orange"));
