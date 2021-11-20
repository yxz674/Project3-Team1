
  
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

// creating multiple l.geoJSON layers for each brewery_state
// read in the data using d3
d3.json("data/usbreweries.geojson").then(function(data) {
    console.log(data);
  

  // create a variable to hold all breewery_type
  all = data.features;
  
    // create a variable to hold just the bar brewery_type
  bar = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "bar";
    }
  });
  console.log(bar);

  
  brewpub = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "brewpub";
    }
  });
  console.log(brewpub);

  closed = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "closed";
    }
  });

  contract = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "contract";
    }
  });

  large = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "large";
    }
  });

  micro = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "micro";
    }
  });

  nano = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "nano";
    }
  });

  planning = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "planning";
    }
  });

  proprietor = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "proprietor";
    }
  });

  regional = L.geoJSON(data, {
    filter: function(feature, layer) {
      return feature.properties.brewery_type == "regional";
    }
  });

});

// // Create an overlays object to add to the layer control.
var overlays = {
  "All": layers.all,
  "Bar": layers.bar,
  "Brewpub": layers.brewpub,
  "Closed": layers.closed,
  "Contract": layers.contract,
  "Large": layers.large,
  "Micro": layers.micro,
  "Nano": layers.nano,
  "Planning": layers.planning,
  "Proprietor": layers.proprietor,
  "Regional": layers.regional,
};

// Create a control for our layers, add our overlay layers to it.
L.control.layers(null, overlays, {
  collapsed: false
 }).addTo(myMap);

// add the overLay layers to the map
// var overlays = {
// layerControl.addOverLay(all, "All"),
// layerControl.addOverlay(bar, "Bar"),
// layerControl.addOverlay(brewpub, "Brewpub"),
// layerControl.addOverlay(closed, "Closed"),
// layerControl.addOverlay(contract, "Contract"),
// layerControl.addOverlay(large, "Large"),
// layerControl.addOverlay(micro, "Micro"),
// layerControl.addOverlay(nano, "Nano"),
// layerControl.addOverlay(planning, "Planning"),
// layerControl.addOverlay(proprietor, "Proprietor"),
// layerControl.addOverlay(regional, "Regional")
// };

// // Initialize all the LayerGroups that we'll use.
// var layers = {
//   Bar: new L.LayerGroup(),
//   Brewpub: new L.LayerGroup(),
//   Closed: new L.LayerGroup(),
//   Contract: new L.LayerGroup(),
//   Large: new L.LayerGroup(),
//   Micro: new L.LayerGroup(),
//   Nano: new L.LayerGroup(),
//   Planning: new L.LayerGroup(),
//   Proprietor: new L.LayerGroup(),
// };













// var overlayMaps = {
//   bar = new L.LayerGroup(),
//   brewpub = new L.LayerGroup(),
//   closed = new L.LayerGroup(),
//   contract = new L.LayerGroup(),
//   large = new L.LayerGroup(),
//   micro = new L.LayerGroup(),
//   nano = new L.LayerGroup(),
//   planning = new L.LayerGroup(),
//   proprietor = new L.LayerGroup(),
//   regional = new L.LayerGroup()
// };


// add the layer control to the map
// L.control.layers(bar, brewpub, closed, contract, 
//   large, micro, nano, planning, proprietor, regional, null, {collapsed: false}).addTo(myMap);




  // // add the overlay map to the map
  // L.control.layers(baseMaps, overlayMaps).addTo(myMap);

  // Add the layer control to the map
// L.control.layers(baseMaps, overlayMaps, {
//   collapsed: false
// }).addTo(myMap);














  // // Perform a GET request to the query URL/
  // d3.json("data/usbreweries.geojson").then(function (data) {
  // // Once we get a response, send the data.features object to the createFeatures function.
  // createFeatures(data.features);
  // console.log(data);
  // });

  // // create a function to read the geojson and create the markers
  // function createFeatures(breweriesData) {

    

  //   // create a GeoJSON layer containing the features array on the brewery data
  //   // Run the onEachFeature function once for each piece of data in the array
  //   var breweries = L.geoJSON(breweriesData, {
  //     onEachFeature: onEachFeature
  //   });

  //   // define a function to run once for each feature in the features array
  //   // give each feature a popup describing the name, city, and state
  //   function onEachFeature(feature, layer) {
  //     layer.bindPopup("<h3>" + feature.properties.name + "</h3><hr><p>" + feature.properties.city + ", " + feature.properties.state + "</p>");
  //   }

  //   // send the brewery data to the createMap function
  //   createMap(breweries);
  // }

  // // create a function to create the map
  // function createMap(breweries) {

  //   // add the brewery data to the map
  //   breweries.addTo(myMap);

  //   // create a layer control
  //   // Pass in our baseMaps and overlayMaps
  //   // Add the layer control to the map
  //   L.control.layers(baseMaps, overlayMaps, {
  //     collapsed: false
  //   }).addTo(myMap);
  // }











  // create a function to create the legend


    // // read the data and create one marker for each location
    // d3.json("data/usbreweries.json").then(function(response) {
    //     console.log(response);

    //     // d3.json(data).then(function(response) {
    //     var markers = L.markerClusterGroup();


    //     // loop through the data and create one marker for each location
    //     for (var i = 0; i < response.length; i++) {

    //       // set the variables for each location
    //       var location = response[i];
    //       var lat = location.latitude;
    //       var lon = location.longitude;
    //       var name = location.name;
    //       var address = location.address;
    //       var city = location.city;
    //       var state = location.state;
    //       var zip = location.zip;
    //       var phone = location.phone;
    //       var website = location.website;
    //       var type = location.type;


    //       // add a new marker to the cluster group and bind a pop-up
    //       markers.addLayer(L.marker([lat, lon])
    //       .bindPopup("<h3>" + name + "</h3> <hr> <h4>" + address + "</h4> <hr> <h4>" + city + ", " + state + " " + zip + "</h4> <hr> <h4>" + phone + "</h4> <hr> <h4>" + website + "</h4> <hr> <h4>" + type + "</h4>"));
    //     }
    //     // add the markers to the map
    //     myMap.addLayer(markers);


    //   });


         

        

          

        // // create the marker
        // markers.addLayer(L.marker([lat, lon])
        //   .bindPopup("<h3>" + name + "</h3>" + "<h4>" + city + ", " + state + "</h4>" + "<h4>" + address + " " + zip + "</h4>" + "<h4>" + phone + "</h4>" + "<h4>" + website + "</h4>"));
          
        // }


    //     // add our marker cluster layer to the map
    //     myMap.addLayer(markers);
      
    // });

  




    // // us d3 to read the json file and print to the console
// d3.json("data/usbreweries.json").then(function(data){ 
//   console.log(data);

//   // call the function to create the markers
//   createMarkers(data);

//   // create a function to create the circles
//   function createCircles(data) {
//     // loop through the data and create a circle for each brewery
//     for (var i = 0; i < data.length; i++) {
//       // create a new circle
//       var circle = L.circle([data[i].latitude, data[i].longitude], {
//         // set the radius of the circle
//         radius: data[i].count
//       })

//       // add the circle to the map
//       circle.addTo(myMap);
//     }
//   }


// });

// // create a function to create the markers
// function createMarkers(data) {
//     // loop through the data and create a marker for each brewery
//     for (var i = 0; i < data.length; i++) {
//       // create a new marker
//       var marker = L.marker([data[i].latitude, data[i].longitude])

//       // add the marker to the map
//       marker.addTo(myMap);
//     }
//   }

  


// data2 = d3.json("data/usbreweries.json")
// console.log(data2);








// Pass our map layers into our layer control.
// Add the layer control to the map.


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