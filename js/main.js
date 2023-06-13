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
        text: 'Piechart',
      },
      credits:{
        enabled:false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.point.name + '</b>: ' + this.point.y+"%";
        }
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