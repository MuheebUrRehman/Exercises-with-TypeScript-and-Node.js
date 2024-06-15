function make_shirt(
  size: string = "large",
  printmessage: string = "i love typescript"
) {
  console.log(
    ` make a shirt with ${size} size and print ${printmessage} on it`
  );
}

make_shirt();

make_shirt("medium");

make_shirt("small", "i love python");
