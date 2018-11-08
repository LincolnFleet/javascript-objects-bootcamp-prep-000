var playlist = {'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes'}

function updatePlaylist(list, artistName, songTitle) {
  list.artistName = songTitle
  return list
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
