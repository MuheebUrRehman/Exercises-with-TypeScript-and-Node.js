function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with following items");
    items.forEach(function (singleitem) { return console.log("-" + singleitem); });
    console.log("\n now enjoy yout sandwich");
}
makeSandwich("bread", "chicken", "ketchup");
makeSandwich("bread", "chicken");
makeSandwich("bread", "chicken", "ketchup", "mayo", "lattice", "cucumber", "tomato");
