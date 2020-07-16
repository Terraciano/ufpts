const torrentSearchApi = require("torrent-search-api");

const searcher = async () => {
  const searchInput = document.getElementById("searchInput").value;

  torrentSearchApi.enableProvider("ThePirateBay");
  // torrentSearchApi.enableProvider("1337x");

  const torrents = await torrentSearchApi.search(searchInput, "", 50);
  console.log(torrents);
  return torrents;
};

module.exports = { searcher };
