const searchList = require("./search");
const search = require("./search");
const customTitlebar = require("custom-electron-titlebar");
const domManipulation = require("./domManipulation");
const { shell } = require("electron");
new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex("#2d3436"),
  icon: "./favicon.ico",
});

const renderSearch = async () => {
  const busq = await search.searcher();
  for (let i = 0; i < busq.length; i++) {
    const torrent = busq[i];
    domManipulation.createBootstrapCard(
      torrent.title,
      torrent.size,
      torrent.peers,
      torrent.seeds
    );
    document
      .getElementsByClassName("btn btn-success")
      [i].addEventListener("click", () => {
        shell.openExternal(torrent.magnet);
      });
  }
};

module.exports = { renderSearch };
