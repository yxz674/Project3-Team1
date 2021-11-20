
  
// Add a tile layer.
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Initialize all the LayerGroups that we'll use.
var layers = {
  all: new L.LayerGroup(),
  bar: new L.LayerGroup(),
  brewpub: new L.LayerGroup(),
  closed: new L.LayerGroup(),
  contract: new L.LayerGroup(),
  large: new L.LayerGroup(),
  micro: new L.LayerGroup(),
  nano: new L.LayerGroup(),
  planning: new L.LayerGroup(),
  proprietor: new L.LayerGroup(),
  regional: new L.LayerGroup(),
};

console.log(layers);

// Create a map object.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [
    layers.all,
    layers.bar,
    layers.brewpub,
    layers.closed,
    layers.contract,
    layers.large,
    layers.micro,
    layers.nano,
    layers.planning,
    layers.proprietor,
    layers.regional
  ]
});

// add our streetmap to the map
streetmap.addTo(myMap);



// get the data with d3
d3.json("data/usbreweries.geojson").then(function(data) {
    console.log(data);

  // create a new marker cluster group
  var markers = L.markerClusterGroup();

  // loop through data
  for (var i = 0; i < data.features.length; i++) {

    // set the data location property to a variable
    var location = data.features[i].geometry;

    // check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up 
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
        .bindPopup(data.features[i].properties.name + "<br>" + data.features[i].properties.street + "<br>" + data.features[i].properties.city + "<br>" + data.features[i].properties.state + "<br>" + data.features[i].properties.postal_code 
        + "<br>" + "Phone: " + data.features[i].properties.phone + "<br>" + "Website: " + data.features[i].properties.website_url));
    }
  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);
});























 