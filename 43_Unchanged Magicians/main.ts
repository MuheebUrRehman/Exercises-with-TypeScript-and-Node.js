function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

function make_great(magicians: string[]) {
  return magicians.map((name) => `the great ${name}`);
}

let magician_names = ["harry potter", "hamzah", "usman"];

let copy_magicians_names = magician_names.slice();

let copy_great_magicians = make_great(copy_magicians_names);

show_magicians(magician_names);

show_magicians(copy_great_magicians);
