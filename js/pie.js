var options = {
    series: [15, 20, 38, 27],
    chart: {
    type: 'polarArea',
  },
  stroke: {
    colors: ['#fff'],
    colors:['#93C5FD','#77A0CE','#5C7B9E','#40566F'],

  },
  title: {
    text: 'Task Distribution'
  },
  fill: {
    opacity: 0.7,
    colors:['#93C5FD','#77A0CE','#5C7B9E','#40566F'],
  },
  labels:['API','Backend','Frontend','Issues'],
  colors:['#93C5FD','#77A0CE','#5C7B9E','#40566F'],
  legend: {
        position: 'bottom'
      },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
     
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#pie"), options);
  chart.render();