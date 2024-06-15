function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
var magician_names = ["harry potter", "hamzah", "usman"];
var copy_magicians_names = magician_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
show_magicians(magician_names);
show_magicians(copy_great_magicians);
