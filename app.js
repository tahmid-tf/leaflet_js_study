var map = L.map("map").setView([51.505, -0.09], 13);

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const attribution =
  "© OpenStreetMap contributors ♥ Make a Donation. Website and API terms";

const tiles = L.tileLayer(tileUrl, {
  attribution,
});

tiles.addTo(map);
