function make_shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = "i love typescript"; }
    console.log(" make a shirt with ".concat(size, " size and print ").concat(printmessage, " on it"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love python");
