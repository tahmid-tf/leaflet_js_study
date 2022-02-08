// --------------------- main frame ---------------------------

var map = L.map("map").setView([22.9074872, 79.07306671], 5);

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const attribution =
  "© OpenStreetMap contributors ♥ Make a Donation. Website and API terms";

const tiles = L.tileLayer(tileUrl, {
  attribution,
});

tiles.addTo(map);

// --------------------- main frame ---------------------------

// -------------------- Circle Layer ------------------------

const Clayer = L.circle([22.9074872, 79.07306671], {
  radius: 20000, // leaflet js -> vector layers -> usage example
  stroke: true,
  color: "red",
});

Clayer.addTo(map);

// -------------------- Circle Layer ------------------------

// ------------------- rectangle ------------------------------

var bounds = [
  [54.559322, -5.767822],
  [56.1210604, -3.02124],
];

const rectangle = L.rectangle(bounds);
rectangle.addTo(map);

// ------------------- rectangle ------------------------------

// ------------------- polygon --------------------------------

const bTriangleCoors = (latlngs = [
  [
    [25.774, -80.19],
    [18.466, -66.118],
    [32.321, -64.757],
  ],
]);

const polygon = L.polygon(bTriangleCoors);
polygon.addTo(map);

// ------------------- polygon --------------------------------

// ------------------- polyline --------------------------------

var latlngs = [
  [45.51, -122.68],
  [37.77, -122.43],
  [34.04, -118.2],
];

const polyline = L.polyline(latlngs, {
  color: "red",
});
polyline.addTo(map);

// ------------------- polyline --------------------------------

// ------------------- Circle Marker and marker with custom icon  --------------------------------

// const cMarker = L.circleMarker([18.920675417289807, 72.82952788802635], {
//   color: "red",
//   radius: 40,
// });
// cMarker.addTo(map);

const icon = L.icon({
  iconUrl: "chinese-new-year.png",
  iconSize: [40, 40],
});

const marker = L.marker([18.920675417289807, 72.82952788802635], {
  icon: icon,
});
marker.bindPopup("<h2>Pizza outlet</h2>");
marker.addTo(map);

// ------------------- Circle Marker and marker with custom icon --------------------------------
