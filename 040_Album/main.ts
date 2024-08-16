function make_album(artist_name: string, album_title, tracks?: number) {
  let album: { artist: string; title: string; track?: number } = {
    artist: artist_name,
    title: album_title,
  };
  if (tracks !== undefined) {
    album.track = tracks;
  }
  return album;
}

let album1 = make_album("muheeb", "title 1");
let album2 = make_album("hamza", "title 2");
let album3 = make_album("arshad", "title 3", 9);

console.log(album1);
console.log(album2);
console.log(album3);
