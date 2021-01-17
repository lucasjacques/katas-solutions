function songDecoder(song){
  let result = song.replace(/WUB/g, ' ').
  			   replace(/(\s)+/g, ' ').
  			   trim();
  return result;
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));