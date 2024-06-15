function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return album;
}
var album1 = make_album("muheeb", "title 1");
var album2 = make_album("hamza", "title 2");
var album3 = make_album("arshad", "title 3", 9);
console.log(album1);
console.log(album2);
console.log(album3);
