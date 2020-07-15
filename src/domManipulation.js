const { remote } = require("electron");
const search = require("./search");
const render = require("./render");
const torrentContainer = document.getElementById("torrentContainer");

document.getElementById("searchBtn").addEventListener("click", async () => {
  document.getElementById("searchBtn").innerText = "Searching";
  await render.renderSearch();
  document.getElementById("searchBtn").innerText = "Search";
});

const createBootstrapCard = (title, size, peers, seeds) => {
  const seedPeersContainer = document.createElement("div");
  Object.assign(seedPeersContainer, {
    className: "buttonContainer",
  });
  const buttonContainer = document.createElement("div");
  Object.assign(buttonContainer, {
    className: "btn-group mr2",
  });
  let container = document.createElement("div");
  Object.assign(container, {
    className: "card",
    style: "width:18rem",
  });
  let cardContainer = document.createElement("div");
  Object.assign(cardContainer, {
    className: "card-body",
  });
  let torrentTitle = document.createElement("h5");
  Object.assign(torrentTitle, {
    className: "card-title",
    innerText: title,
  });
  let torrentSize = document.createElement("h6");
  Object.assign(torrentSize, {
    className: "card-text",
    innerText: size,
  });
  let torrentPeers = document.createElement("p");
  Object.assign(torrentPeers, {
    className: "card-text, text-danger",
    innerText: `${peers} peer/s`,
  });
  let torrentSeeds = document.createElement("p");
  Object.assign(torrentSeeds, {
    className: "card-text, text-success",
    innerText: `${seeds} seed/s`,
  });
  let downloadTorrent = document.createElement("button");
  Object.assign(downloadTorrent, {
    className: "btn btn-primary",
    innerText: "Download Torrent",
    id: "downloadTorrentBtn",
  });
  let downloadMagnet = document.createElement("button");
  Object.assign(downloadMagnet, {
    className: "btn btn-success",
    innerText: "Download Magnet",
    id: "downloadMagnetBtn",
  });
  cardContainer.appendChild(torrentSize);
  cardContainer.appendChild(torrentTitle);
  seedPeersContainer.appendChild(torrentSeeds);
  seedPeersContainer.appendChild(torrentPeers);
  cardContainer.appendChild(seedPeersContainer);
  cardContainer.appendChild(buttonContainer);
  buttonContainer.appendChild(downloadTorrent);
  buttonContainer.appendChild(downloadMagnet);
  container.appendChild(cardContainer);
  torrentContainer.appendChild(container);
};

module.exports = { createBootstrapCard };
