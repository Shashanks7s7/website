// function showTable(tableId) {
//   var tables = document.getElementsByTagName("table");
//   for (var i = 0; i < tables.length; i++) {
//     tables[i].classList.remove("hidden");
//     tables[i].style.marginTop = "20px";
//   }

//   var table = document.getElementById(tableId);
//   if (table) {
//     table.classList.remove("hidden");
//   }
// }
document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('chartContainer', {
      chart: {
        type: 'pie',
        backgroundColor:'transparent'
      },
      title: {
        text: '',
      },
      credits:{
        enabled:false
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            style:{
            color:'red'
            }
          },
          showInLegend: true,
          
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.point.name + '</b>: ' + this.point.y+"%";
        }
      },
      legend: {
        itemStyle: {
          color: 'white' // Set the legend item color to blue
        },
        labelFormatter: function () {
          return '<span style="text-decoration: none;">' + this.name + '</span>'; // Disable click event and underline on legend items
        },
        useHTML: true
      },
      series: [{
        name: 'Categories',
        colorByPoint: true,
        data: [{
          name: 'Seed',
          y: 10
        }, {
          name: 'Private',
          y: 10
        }, {
          name: 'Team & Advisors',
          y: 10
        }, {
          name: 'Public',
          y: 5
        },
        {
            name: 'Operations And Tresury',
            y: 25
          },
          {
            name: 'Supliers And Users',
            y: 20
          },
          {
            name: 'Community And Marketing',
            y: 20
          }
    
    ]
      }]
    });
  });