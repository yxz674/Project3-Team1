// Create an array of each country's numbers
var alabama = Object.values(data.alabama);
var alaska = Object.values(data.alaska);
var arizona = Object.values(data.arizona);
var arkansas = Object.values(data.arkansas);
var california = Object.values(data.california);
var colorado = Object.values(data.colorado);
var connecticut = Object.values(data.connecticut);
var delaware = Object.values(data.delaware);
var district_of_columbia = Object.values(data.district_of_columbia);
var florida = Object.values(data.florida);
var georgia = Object.values(data.georgia);
var hawaii = Object.values(data.hawaii);
var idaho = Object.values(data.idaho);
var illinois = Object.values(data.illinois);
var indiana = Object.values(data.indiana);
var iowa = Object.values(data.iowa);
var kansas = Object.values(data.kansas);
var kentucky = Object.values(data.kentucky);
var louisiana = Object.values(data.louisiana);
var maine = Object.values(data.maine);
var maryland = Object.values(data.maryland);
var massachusetts = Object.values(data.massachusetts);
var michigan = Object.values(data.michigan);
var minnesota = Object.values(data.minnesota);
var mississippi = Object.values(data.mississippi);
var missouri = Object.values(data.missouri);
var montana = Object.values(data.montana);
var nebraska = Object.values(data.nebraska);
var nevada = Object.values(data.nevada);
var new_hampshire = Object.values(data.new_hampshire);
var new_jersey = Object.values(data.new_jersey);
var new_mexico = Object.values(data.new_mexico);
var new_york = Object.values(data.new_york);
var north_carolina = Object.values(data.north_carolina);
var north_dakota = Object.values(data.north_dakota);
var ohio = Object.values(data.ohio);
var oklahoma = Object.values(data.oklahoma);
var oregon = Object.values(data.oregon);
var pennsylvania = Object.values(data.pennsylvania);
var rhode_island = Object.values(data.rhode_island);
var south_carolina = Object.values(data.south_carolina);
var south_dakota = Object.values(data.south_dakota);
var tennessee = Object.values(data.tennessee);
var texas = Object.values(data.texas);
var utah = Object.values(data.utah);
var vermont = Object.values(data.vermont);
var virginia = Object.values(data.virginia);
var washington = Object.values(data.washington);
var west_virginia = Object.values(data.west_virginia);
var wisconsin = Object.values(data.wisconsin);
var wyoming = Object.values(data.wyoming);


// Create an array of music provider labels
// var labelsABA = Object.keys(data.alabama);
// var labelsALA = Object.keys(data.alaska);
// var labelsARI = Object.keys(data.arizona);
var labelsOHIO = Object.keys(data.ohio);

// Display the default plot
function init() {
  var data = [{
    values: ohio,
    labels: labelsOHIO,
    type: "pie"
  }];

  var layout = {
    height: 500,
    width: 500
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'alabama') {
      data = alabama;
  }
  else if (dataset == 'alaska') {
      data = alaska;
  }
  else if (dataset == 'arizona') {
      data = arizona;
  }
  else if (dataset == 'arkansas') {
      data = arkansas;
  }
  else if (dataset == 'california') {
      data = california;
  }
  else if (dataset == 'colorado') {
      data = colorado;
  }
  else if (dataset == 'connecticut') {
      data = connecticut;
  }
  else if (dataset == 'delaware') {
      data = delaware;
  }
  else if (dataset == 'district_of_columbia') {
      data = district_of_columbia;
  }
  else if (dataset == 'florida') {
      data = florida;
  }
  else if (dataset == 'georgia') {
      data = georgia;
  }
  else if (dataset == 'hawaii') {
      data = hawaii;
  }
  else if (dataset == 'idaho') {
      data = idaho;
  }
  else if (dataset == 'illinois') {
      data = illinois;
  }
  else if (dataset == 'indiana') {
      data = indiana;
  }
  else if (dataset == 'iowa') {
      data = iowa;
  }
  else if (dataset == 'kansas') {
      data = kansas;
  }
  else if (dataset == 'kentucky') {
      data = kentucky;
  }
  else if (dataset == 'louisiana') {
      data = louisiana;
  }
  else if (dataset == 'arizona') {
      data = arizona;
  }
  else if (dataset == 'maine') {
      data = maine;
  }
  else if (dataset == 'maryland') {
      data = maryland;
  }
  else if (dataset == 'massachusetts') {
      data = massachusetts;
  }
  else if (dataset == 'michigan') {
      data = michigan;
  }
  else if (dataset == 'minnesota') {
      data = minnesota;
  }
  else if (dataset == 'mississippi') {
      data = mississippi;
  }
  else if (dataset == 'missouri') {
      data = missouri;
  }
  else if (dataset == 'montana') {
      data = montana;
  }
  else if (dataset == 'nebraska') {
      data = nebraska;
  }
  else if (dataset == 'nevada') {
      data = nevada;
  }
  else if (dataset == 'new_hampshire') {
      data = new_hampshire;
  }
  else if (dataset == 'new_jersey') {
      data = new_jersey;
  }
  else if (dataset == 'new_mexico') {
      data = new_mexico;
  }
  else if (dataset == 'new_york') {
      data = new_york;
  }
  else if (dataset == 'north_carolina') {
      data = north_carolina;
  }
  else if (dataset == 'north_dakota') {
      data = north_dakota;
  }
  else if (dataset == 'ohio') {
      data = ohio;
  }
  else if (dataset == 'oklahoma') {
      data = oklahoma;
  }
  else if (dataset == 'oregon') {
      data = oregon;
  }
  else if (dataset == 'pennsylvania') {
      data = pennsylvania;
  }
  else if (dataset == 'rhode_island') {
      data = rhode_island;
  }
  else if (dataset == 'south_carolina') {
      data = south_carolina;
  }
  else if (dataset == 'south_dakota') {
      data = south_dakota;
  }
  else if (dataset == 'tennessee') {
      data = tennessee;
  }
  else if (dataset == 'texas') {
      data = texas;
  }
  else if (dataset == 'utah') {
      data = utah;
  }
  else if (dataset == 'vermont') {
      data = vermont;
  }
  else if (dataset == 'virginia') {
      data = virginia;
  }
  else if (dataset == 'washington') {
      data = washington;
  }
  else if (dataset == 'west_virginia') {
      data = west_virginia;
  }
  else if (dataset == 'wisconsin') {
      data = wisconsin;
  }
  else if (dataset == 'wyoming') {
      data = wyoming;
  }

  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
