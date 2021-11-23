var dataObjects = [
    {
      label: "micro",
      data: [32,29,58,22,489,220,53,10,5,190,47,7,35,115,60,54,18,41,26,70,52,93,143,110,12,67,61,28,37,79,30,224,180,12,163,30,144,129,16,35,25,56,187,19,34,152,278,14,92,14]
    },
    {
      label: "brewpub",
      data: [4,14,46,18,251,138,11,14,6,65,2,12,21,88,76,30,20,12,6,31,26,34,199,44,2,46,17,21,20,22,16,44,111,73,8,94,5,104,156,5,29,15,26,76,9,16,55,115,10,78,12]
    },
    {
      label: "planning",
      data: [8,2,13,4,67,40,21,2,2,38,19,0,23,20,2,7,3,9,7,18,17,21,13,1,3,10,8,0,9,14,5,38,29,0,26,4,14,37,1,9,2,20,57,82,34,10,5,13,4]
    },
    {
    label: "contract",
    data: [1,1,4,1,31,9,5,0,2,6,2,0,1,11,2,1,0,1,2,2,6,8,3,5,1,1,2,0,3,1,4,1,22,5,0,7,4,3,6,0,1,1,1,6,2,0,5,4,0,17,1]
    },
    {
    label: "regional",
    data: [0,1,2,0,29,11,2,1,1,5,3,1,0,3,3,0,1,1,1,3,4,9,9,9,0,8,2,0,0,2,1,2,9,13,0,9,0,14,13,1,2,0,3,10,3,7,3,7,0,9,1]
    },
    {
    label: "propriertor",
    data: [0,0,0,0,13,4,0,0,0,41,0,1,5,1,0,1,0,0,1,2,2,0,2,0,3,0,0,0,0,0,1,10,3,0,1,0,2,2,1,0,1,2,1,0,0,0,2,1,2,0]
    },
    {
    label: "large",
    data: [0,0,2,0,16,7,0,1,0,4,3,0,1,4,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,4,4,0,2,0,6,0,0,0,0,0,4,0,0,5,3,0,5,0]
    },
    {
    label: "closed",
    data: [0,4,0,0,0,0,0,0,0,0,0,3,5,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,3,1,1,4,0,0,0,2,0,2,0,0,0,51,0,0,0]
    },
    {
    label: "nano",
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0]
    },
    {
    label: "bar",
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
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
  