<<<<<<< Updated upstream
// Create a map object.
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
=======
>>>>>>> Stashed changes
// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
<<<<<<< Updated upstream
}).addTo(myMap);
=======
});

// initialize all the LayerGroups that we'll use
var layers = {
  Bar: new L.LayerGroup(),
  Brewpub: new L.LayerGroup(),
  Closed: new L.LayerGroup(),
  Contract: new L.LayerGroup(),
  Large: new L.LayerGroup(),
  Micro: new L.LayerGroup(),
  Nano: new L.LayerGroup(),
  Planning: new L.LayerGroup(),
  Proprietor: new L.LayerGroup(),
  Regional: new L.LayerGroup()
};

// create the map with our layers
var myMap = L.map('map', {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [
    layers.Bar,
    layers.Brewpub,
    layers.Closed,
    layers.Contract,
    layers.Large,
    layers.Micro,
    layers.Nano,
    layers.Planning,
    layers.Proprietor,
    layers.Regional
  ]
});

// add our "streemap" tile layer to the map
streetmap.addTo(myMap);
>>>>>>> Stashed changes

  // add a minimal zoom to prevent users from zooming out too far
  // map._layersMinZoom=5;

  


// create an overlays object to add to the layer control
var overlays = {
  "Bar": layers.Bar,
  "Brewpub": layers.Brewpub,
  "Closed": layers.Closed,
  "Contract": layers.Contract,
  "Large": layers.Large,
  "Micro": layers.Micro,
  "Nano": layers.Nano,
  "Planning": layers.Planning,
  "Proprietor": layers.Proprietor,
  "Regional": layers.Regional
};

// create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(myMap);

// create a legend to display information about the map
var info = L.control({
  position: "bottomleft"
});

// when the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// add the info legend to the map
info.addTo(myMap);

// initialize an object containing icons for each layer group
var icons = {
  Bar: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  }),
  Brewpub: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "blue",
    shape: "circle"
  }),
  Closed: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  Contract: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  Large: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "purple",
    shape: "circle"
  }),
  Micro: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "yellow",
    shape: "circle"
  }),
  Nano: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "black",
    shape: "circle"
  }),
  Planning: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "grey",
    shape: "circle"
  }),
  Proprietor: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "brown",
    shape: "circle"
  }),
  Regional: L.ExtraMarkers.icon({
    icon: "fa-beer",
    iconColor: "white",
    markerColor: "pink",
    shape: "circle"
  })
};



// read the data from geoJson file using d3
d3.json("data/usbreweries.geojson").then(function(data) {
  console.log(data);

 // initialzize brewerytype, which will be used as a key to access the approprriate layers
  // icons for each brewery
  var brewerytype;

  

  // loop through the data
  for (var i = 0; i < data.features.length; i++) {

    // create a new brewery object with the properties from the data
    var brewery = Object.assign({}, data.features[i]);
      console.log(data.features[i]);

    if (brewery.brewery_type === "bar") {
      brewerytype = "Bar";
    }
    else if (brewery.brewery_type === "brewpub") {
      brewerytype = "Brewpub";
    }
    else if (brewery.brewery_type === "closed") {
      brewerytype = "Closed"; 
    }
    else if (brewery.brewery_type === "contract") {
      brewerytype = "Contract";
    }
    else if (brewery.brewery_type === "large") {
      brewerytype = "Large";
    }
    else if (brewery.brewery_type === "micro") {
      brewerytype = "Micro";
    }
    else if (brewery.brewery_type === "nano") {
      brewerytype = "Nano";
    }
    else if (brewery.brewery_type === "planning") {
      brewerytype = "Planning";
    }
    else if (brewery.brewery_type === "proprietor") {
      brewerytype = "Proprietor";
    }
    else if (brewery.brewery_type === "regional") {
      brewerytype = "Regional";
    }

    myMap.addLayer(layers[brewerytype]);
    
    // create a new marker with the appropriate icon and coordinates
    var newmarker = L.marker([brewery.geometry.coordinates[1], brewery.geometry.coordinates[0]], 
      {icon: icons[brewerytype]
    });

<<<<<<< Updated upstream
// creating multiple l.geoJSON layers for each brewery_state
// read in the data using d3
d3.json("data/usbreweries.geojson").then(function(data) {
  

  // create a variable to hold just the bar brewery_type
  var bar = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "bar";
    }
  });

  
  var brewpub = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "brewpub";
    }
  });

  var closed = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "closed";
    }
  });

  var contract = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "contract";
    }
  });

  var large = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "large";
    }
  });

  var micro = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "micro";
    }
  });

  var nano = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "nano";
    }
  });

  var planning = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "planning";
    }
  });

  var proprietor = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "proprietor";
    }
  });

  var regional = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "regional";
    }
  });
});

// add the overLay layers to the map

// layerControl.addOverlay(bar, "Bar");
// layerControl.addOverlay(brewpub, "Brewpub");
// layerControl.addOverlay(closed, "Closed");
// layerControl.addOverlay(contract, "Contract");
// layerControl.addOverlay(large, "Large");
// layerControl.addOverlay(micro, "Micro");
// layerControl.addOverlay(nano, "Nano");
// layerControl.addOverlay(planning, "Planning");
// layerControl.addOverlay(proprietor, "Proprietor");
// layerControl.addOverlay(regional, "Regional");
=======
    

    // create a layer control
    L.control.layers(null, layers).addTo(myMap);

    

     // add the new marker to the appropriate layer
    newmarker.addTo(layers[brewerytype]);
  

    // bind a popup to the marker that will  display on click
  //   newmarker.bindPopup(data.features[i].properties.name + "<br>" + data.features[i].properties.street + "<br>" + data.features[i].properties.city + "<br>" + data.features[i].properties.state + "<br>" + data.features[i].properties.postal_code 
  //           + "<br>" + "Phone: " + data.features[i].properties.phone + "<br>" + "Website: " + data.features[i].properties.website_url);
  // }

    newmarker.addLayer(L.marker([brewery.latitude, brewery.longitude], {
      icon: brewery.icon
    }).data.features[i].properties.name + "<br>" + data.features[i].properties.street + "<br>" + data.features[i].properties.city + "<br>" + data.features[i].properties.state + "<br>" + data.features[i].properties.postal_code 
    + "<br>" + "Phone: " + data.features[i].properties.phone + "<br>" + "Website: " + data.features[i].properties.website_url);
  }
});

  // create a layer control
  L.control.layers(null, layers).addTo(myMap);








    // add the new marker to the brewery object
    // brewery.marker = marker;

    // // add the brewery object to the breweries array
    // breweries.push(brewery);

  
    
    

   

    // add the brewery to the appropriate layer group

    // brewery.layer.addLayer(L.marker([brewery.latitude, brewery.longitude], {
    //   icon: brewery.icon
    // }).data.features[i].properties.name + "<br>" + data.features[i].properties.street + "<br>" + data.features[i].properties.city + "<br>" + data.features[i].properties.state + "<br>" + data.features[i].properties.postal_code 
    // + "<br>" + "Phone: " + data.features[i].properties.phone + "<br>" + "Website: " + data.features[i].properties.website_url);



  // // add the layer control to the map
  // L.control.layers(null, overlays).addTo(myMap);

  // call the updateLegend function
//   updateLegend(brewerytype);
// });









  

//   // add a minimal zoom to prevent users from zooming out too far
//   // map._layersMinZoom=5;



  

// // get the data with d3
// d3.json("data/usbreweries.geojson").then(function(data) {
//     console.log(data);

//   // create a new marker cluster group
//   var markers = L.markerClusterGroup();

//   // loop through data
//   for (var i = 0; i < data.features.length; i++) {

//     // set the data location property to a variable
//     var location = data.features[i].geometry;

//     // check for location property
//     if (location) {

//       // Add a new marker to the cluster group and bind a pop-up 
//       markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
//         .bindPopup(data.features[i].properties.name + "<br>" + data.features[i].properties.street + "<br>" + data.features[i].properties.city + "<br>" + data.features[i].properties.state + "<br>" + data.features[i].properties.postal_code 
//         + "<br>" + "Phone: " + data.features[i].properties.phone + "<br>" + "Website: " + data.features[i].properties.website_url));
//     }
//   }

//   // Add our marker cluster layer to the map
//   myMap.addLayer(markers);
// });

// // creating multiple l.geoJSON layers for each brewery_state
// // read in the data using d3
// d3.json("data/usbreweries.geojson").then(function(data) {
  

//   // create a variable to hold just the bar brewery_type
//   var bar = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "bar";
//     }
//   });

  
//   var brewpub = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "brewpub";
//     }
//   });

//   var closed = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "closed";
//     }
//   });

//   var contract = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "contract";
//     }
//   });
>>>>>>> Stashed changes

//   var large = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "large";
//     }
//   });

//   var micro = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "micro";
//     }
//   });

//   var nano = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "nano";
//     }
//   });

//   var planning = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "planning";
//     }
//   });

<<<<<<< Updated upstream
  var bar = new L.LayerGroup();
  var brewpub = new L.LayerGroup();
  var closed = new L.LayerGroup();
  var contract = new L.LayerGroup();
  var large = new L.LayerGroup();
  var micro = new L.LayerGroup();
  var nano = new L.LayerGroup();
  var planning = new L.LayerGroup();
  var proprietor = new L.LayerGroup();
  var regional = new L.LayerGroup();


// add the layer control to the map
L.control.layers(bar, brewpub, closed, contract, 
  large, micro, nano, planning, proprietor, regional, null, {collapsed: false}).addTo(myMap);
=======
//   var proprietor = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "proprietor";
//     }
//   });

//   var regional = L.geoJSON(data, {
//     filter: function(feature, layer) {
//       return feature.properties.brewery_type == "regional";
//     }
//   });
// });

// // add the overLay layers to the map

// // layerControl.addOverlay(bar, "Bar");
// // layerControl.addOverlay(brewpub, "Brewpub");
// // layerControl.addOverlay(closed, "Closed");
// // layerControl.addOverlay(contract, "Contract");
// // layerControl.addOverlay(large, "Large");
// // layerControl.addOverlay(micro, "Micro");
// // layerControl.addOverlay(nano, "Nano");
// // layerControl.addOverlay(planning, "Planning");
// // layerControl.addOverlay(proprietor, "Proprietor");
// // layerControl.addOverlay(regional, "Regional");





//   var bar = new L.LayerGroup();
//   var brewpub = new L.LayerGroup();
//   var closed = new L.LayerGroup();
//   var contract = new L.LayerGroup();
//   var large = new L.LayerGroup();
//   var micro = new L.LayerGroup();
//   var nano = new L.LayerGroup();
//   var planning = new L.LayerGroup();
//   var proprietor = new L.LayerGroup();
//   var regional = new L.LayerGroup();


// // add the layer control to the map
// L.control.layers(bar, brewpub, closed, contract, 
//   large, micro, nano, planning, proprietor, regional, null, {collapsed: false}).addTo(myMap);
>>>>>>> Stashed changes




//   // // add the overlay map to the map
//   // L.control.layers(baseMaps, overlayMaps).addTo(myMap);

<<<<<<< Updated upstream
  // Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
=======
//   // Add the layer control to the map
// L.control.layers(baseMaps, overlayMaps, {
//   collapsed: false
// }).addTo(myMap);
>>>>>>> Stashed changes














//   // // Perform a GET request to the query URL/
//   // d3.json("data/usbreweries.geojson").then(function (data) {
//   // // Once we get a response, send the data.features object to the createFeatures function.
//   // createFeatures(data.features);
//   // console.log(data);
//   // });

//   // // create a function to read the geojson and create the markers
//   // function createFeatures(breweriesData) {

    

//   //   // create a GeoJSON layer containing the features array on the brewery data
//   //   // Run the onEachFeature function once for each piece of data in the array
//   //   var breweries = L.geoJSON(breweriesData, {
//   //     onEachFeature: onEachFeature
//   //   });

//   //   // define a function to run once for each feature in the features array
//   //   // give each feature a popup describing the name, city, and state
//   //   function onEachFeature(feature, layer) {
//   //     layer.bindPopup("<h3>" + feature.properties.name + "</h3><hr><p>" + feature.properties.city + ", " + feature.properties.state + "</p>");
//   //   }

//   //   // send the brewery data to the createMap function
//   //   createMap(breweries);
//   // }

//   // // create a function to create the map
//   // function createMap(breweries) {

//   //   // add the brewery data to the map
//   //   breweries.addTo(myMap);

//   //   // create a layer control
//   //   // Pass in our baseMaps and overlayMaps
//   //   // Add the layer control to the map
//   //   L.control.layers(baseMaps, overlayMaps, {
//   //     collapsed: false
//   //   }).addTo(myMap);
//   // }











//   // create a function to create the legend


//     // // read the data and create one marker for each location
//     // d3.json("data/usbreweries.json").then(function(response) {
//     //     console.log(response);

//     //     // d3.json(data).then(function(response) {
//     //     var markers = L.markerClusterGroup();


//     //     // loop through the data and create one marker for each location
//     //     for (var i = 0; i < response.length; i++) {

//     //       // set the variables for each location
//     //       var location = response[i];
//     //       var lat = location.latitude;
//     //       var lon = location.longitude;
//     //       var name = location.name;
//     //       var address = location.address;
//     //       var city = location.city;
//     //       var state = location.state;
//     //       var zip = location.zip;
//     //       var phone = location.phone;
//     //       var website = location.website;
//     //       var type = location.type;


//     //       // add a new marker to the cluster group and bind a pop-up
//     //       markers.addLayer(L.marker([lat, lon])
//     //       .bindPopup("<h3>" + name + "</h3> <hr> <h4>" + address + "</h4> <hr> <h4>" + city + ", " + state + " " + zip + "</h4> <hr> <h4>" + phone + "</h4> <hr> <h4>" + website + "</h4> <hr> <h4>" + type + "</h4>"));
//     //     }
//     //     // add the markers to the map
//     //     myMap.addLayer(markers);


//     //   });


         

        

          

//         // // create the marker
//         // markers.addLayer(L.marker([lat, lon])
//         //   .bindPopup("<h3>" + name + "</h3>" + "<h4>" + city + ", " + state + "</h4>" + "<h4>" + address + " " + zip + "</h4>" + "<h4>" + phone + "</h4>" + "<h4>" + website + "</h4>"));
          
//         // }


//     //     // add our marker cluster layer to the map
//     //     myMap.addLayer(markers);
      
//     // });

  




//     // // us d3 to read the json file and print to the console
// // d3.json("data/usbreweries.json").then(function(data){ 
// //   console.log(data);

// //   // call the function to create the markers
// //   createMarkers(data);

// //   // create a function to create the circles
// //   function createCircles(data) {
// //     // loop through the data and create a circle for each brewery
// //     for (var i = 0; i < data.length; i++) {
// //       // create a new circle
// //       var circle = L.circle([data[i].latitude, data[i].longitude], {
// //         // set the radius of the circle
// //         radius: data[i].count
// //       })

// //       // add the circle to the map
// //       circle.addTo(myMap);
// //     }
// //   }


// // });

// // // create a function to create the markers
// // function createMarkers(data) {
// //     // loop through the data and create a marker for each brewery
// //     for (var i = 0; i < data.length; i++) {
// //       // create a new marker
// //       var marker = L.marker([data[i].latitude, data[i].longitude])

// //       // add the marker to the map
// //       marker.addTo(myMap);
// //     }
// //   }

  


// // data2 = d3.json("data/usbreweries.json")
// // console.log(data2);








// // Pass our map layers into our layer control.
// // Add the layer control to the map.


//       var brew = data[i];
//       var lat = brew.latitude;
//       var lon = brew.longitude;
//       var name = brew.name;
//       var city = brew.city;
//       var state = brew.state;
//       var address = brew.street;
//       var zip = brew.postal_code;
//       var phone = brew.phone;
//       var website = brew.website_url;
//       var marker = L.marker([lat, lon]).addTo(myMap);
//       marker.bindPopup("<h3>" + name + "</h3> <hr> <h4>" + city + ", " + state + "</h4> <hr> <p>" + address + "</p> <hr> <p>Phone: " + phone + "</p> <hr> <p>Website: " + website + "</p>");
//     }
//   }









    








  
  
 
  
  

  // // Get the data with d3.
  // d3.json("data/usbreweries.json").then(function(data) {
  
  //   // Create a new marker cluster group.
  //   var markers = L.markerClusterGroup();
  
  //   // Loop through the data.
  //   for (var i = 0; i < response.length; i++) {
  
  //     // Set the data location property to a variable.
  //     var location = response[i].location;
  
  //     // Check for the location property.
  //     if (location) {
  
  //       // Add a new marker to the cluster group, and bind a popup.
  //       markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
  //         .bindPopup(response[i].descriptor));
  //     }
  
  //   }
  
  //   // Add our marker cluster layer to the map.
  //   myMap.addLayer(markers);
  
  // });



  // create function to make top ten charts for user-selected brewery/rating/beer attributes
  // week 14, day 2, activity 9