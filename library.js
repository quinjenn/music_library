const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// Challenge 1
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {};
for (const playlistId in library.playlists) {
  const playlist = library.playlists[playlistId];
  console.log(`${playlist.name} - ${playlist.id}`);
}
printPlaylists();

// Challenge 2
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {};
for (const trackId in library.tracks) {
  const track = library.tracks[trackId];
  console.log(
    `${track.name} by ${track.artist} from the album ${track.album} - ${track.id}`
  );
}

printTracks();

// Challenge 3
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  let playlist = library.playlists[playlistId];
  console.log(
    `p${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`
  );
  playlist.tracks.forEach((trackId, index) => {
    let track = library.tracks[trackId];
    console.log(
      `t${track.id}: ${track.name} by ${track.artist} (${track.album})`
    );
  });
};
printPlaylist("p01");

// Challenge 4
// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  let playlist = library.playlists[playlistId];
  let trackExist = library.tracks[trackId];

  if (trackExist) {
    if (playlist) {
      playlist.tracks.push(trackId);
      console.log(`Track with ID ${trackId} added to playlist ${playlistId}`);
    } else {
      console.log("The provided playlistId does not exist in library");
    }
  } else {
    console.log("The provided trackId does not exist in library");
  }
};
addTrackToPlaylist("t03", "p02");

// Challenge 5
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// Challenge 6
// adds a track to the library
const addTrack = function (name, artist, album) {
  const id = generateUid();
  library.tracks[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album,
  };
  console.log(`Track ${name} by ${artist} added to library with ID ${id}`);
};

addTrack("Model View Controller", "James Dempsey", "WWDC 2003");

// Challenge 7
// adds a playlist to the library
const addPlaylist = function (name) {
  const id = generateUid();
  library.playlists[id] = {
    id: id,
    name: name,
    tracks: [],
  };
  console.log(`Playlist ${name} added to library with ID ${id}`);
};

addPlaylist("Other Playlist");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function (query) {};
