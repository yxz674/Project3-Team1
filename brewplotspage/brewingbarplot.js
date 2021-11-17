var dataObjects = [
    {
      label: "micro",
      data: [32,61,119,141,630,850,903,913,918,1108,1155,1162,1197,1312,1372,1426,1444,1485,1511,1581,1633,1726,1979,1991,2058,2119,2147,2169,2206,2285,2315,2539,2719,2731,2894,2924,3068,3197,3212,3247,3271,3327,3514,3533,3567,3719,3997,4011,4103,4117]
    },
    {
      label: "brewpub",
      data: [4,18,64,82,333,471,482,496,502,567,592,604,625,713,789,819,839,851,857,888,914,948,1147,1191,1193,1239,1256,1277,1297,1319,1335,1379,1490,1563,1571,1665,1670,1774,1930,1935,1964,1979,2005,2081,2090,2106,2161,2276,2286,2364,2376]
    },
    {
      label: "planning",
      data: [8,10,23,27,94,134,155,157,159,197,216,216,216,239,259,261,268,271,279,286,304,321,342,355,356,359,369,377,382,391,405,410,448,477,503,507,521,558,559,568,570,590,647,655,657,691,701,706,719,723]
    },
    {
    label: "contract",
    data: [2,3,6,7,38,47,52,52,54,60,62,62,63,74,76,77,77,78,80,82,88,96,99,104,105,106,108,108,111,112,116,117,139,144,144,151,155,158,164,164,165,166,167,173,175,175,180,184,184,201,202]
    },
    {
    label: "regional",
    data: [0,1,2,2,31,42,44,45,46,51,54,55,55,58,61,61,62,63,64,67,71,80,89,97,97,105,107,107,107,109,110,112,121,134,134,143,143,157,170,171,173,173,176,186,189,196,199,206,206,215,216]
    },
    {
    label: "propriertor",
    data: [0,0,0,0,13,17,17,17,17,21,22,22,23,28,29,29,30,30,30,31,33,35,35,37,40,40,40,40,40,40,41,51,54,54,55,55,57,59,60,60,61,63,64,64,64,64,66,67,69,69]
    },
    {
    label: "large",
    data: [0,2,2,18,25,25,26,26,30,33,33,34,38,38,38,38,38,38,38,39,39,39,39,39,40,40,40,40,41,42,42,46,50,50,52,52,58,58,58,58,58,58,62,62,62,67,70,70,75,75]
    },
    {
    label: "closed",
    data: [0,4,4,4,4,4,4,4,4,4,4,7,12,12,12,12,12,12,12,12,12,12,12,12,12,25,25,25,25,25,25,25,25,25,28,29,30,34,34,34,34,36,36,38,38,38,38,70,70,75,75]
    },
    {
    label: "nano",
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,5,5]
    },
    {
    label: "bar",
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    }
]
/* data */
var data = {
    labels: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],
    datasets: [  {
      label:  dataObjects[0].label,
      data: dataObjects[0].data,
      /* global setting */
      backgroundColor:'rgb(142,124,195)',
      borderColor:'rgb(142,124,195)',
      borderWidth: 2
    }]
};
  
var options = {
    legend: {
      display: true,
      fillStyle: "red",
      
      labels: {
        boxWidth: 0,
        fontSize: 2,
        fontColor: "grey",
      }
    },
    scales: {
      xAxes: [{
        stacked: false,
        scaleLabel: {
          display: true,
          labelString: '50 States'
        },
      }],
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Total Numbers'
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 10
        }
      }]
    },/*end scales */
    plugins: {
      // datalabels plugin
      /*https://chartjs-plugin-datalabels.netlify.com*/
      datalabels: {
        color: 'black',
        font:{
          size: 10
        }
      }
    }
};
  
var chart = new Chart('chart-0', {
    plugins: [ChartDataLabels], /*https://chartjs-plugin-datalabels.netlify.com*/
    type: 'bar',
    data: data,
    options: options
});
  
function changeData(index) {
    chart.data.datasets.forEach(function(dataset) {
      dataset.label = dataObjects[index].label;
      dataset.data = dataObjects[index].data;
      //dataset.backgroundColor = dataObjects[index].backgroundColor;
    });
    chart.update();
}
  
  /* add active class on click */
  // Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}
  