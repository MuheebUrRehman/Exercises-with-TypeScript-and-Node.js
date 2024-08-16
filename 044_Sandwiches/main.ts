function makeSandwich(...items: string[]) {
  console.log("\n making a sandwich with following items");

  items.forEach((singleitem) => console.log("-" + singleitem));

  console.log("\n now enjoy yout sandwich");
}

makeSandwich("bread", "chicken", "ketchup");
makeSandwich("bread", "chicken");
makeSandwich(
  "bread",
  "chicken",
  "ketchup",
  "mayo",
  "lattice",
  "cucumber",
  "tomato"
);
