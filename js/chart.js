var options = {
  series: [{
  name: 'New Issues',
  type: 'column',
  data: [11, 10, 8, 11, 8, 10, 17]
}, {
  name: 'Closed Issues',
  type: 'line',
  data: [42,28,43,34,20,25,22],
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  width: [0, 2],

},
colors:["#738196" , "#738196"],
fill:{
colors:["#A4B1C3" , "#A4B1C3", "#A4B1C3"],
},
title: {
  text: 'Github Issues Summary'
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'],
xaxis: {
  type: 'day'
},
yaxis: [{
  title: {
    text: '',
  },

},
]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();