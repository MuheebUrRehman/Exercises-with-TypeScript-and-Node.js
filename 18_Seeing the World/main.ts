//Store the locations in a array
var countriesToVisits: string[] = [
  "Canada",
  "Belgium",
  "Egypt",
  "Australia",
  "Denmark",
];

//Print your array in its original order.
console.log("original order:", countriesToVisits);

//Print your array in alphabetical order
console.log("alphabetical order:", [...countriesToVisits].sort());

//Show that your array is still in its original order by printing it.
console.log("still in original order", countriesToVisits);

//Print your array in reverse alphabetical order
console.log("reverse order:", [...countriesToVisits].reverse());

//Show that your array is still in its original order by printing it again.
console.log("still in original order", countriesToVisits);

// Reverse the order of your list.
console.log("original array reverse:", countriesToVisits.reverse());

//Reverse the order of your list again
console.log("back to original order:", countriesToVisits.reverse());

//Sort your array so it’s stored in alphabetical order.
console.log("sort in alphabetical order:", countriesToVisits.sort());

// Reverse the order again of your list.
console.log("original array reverse again:", countriesToVisits.reverse());
