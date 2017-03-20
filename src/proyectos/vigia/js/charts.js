google.charts.load('current', {'packages':['corechart']});

var data = {};
var chart = {};

var ponchoColors = [
  '#006aa9',

  '#ffce00',
  '#51a42b',
  '#009dda',
  '#873299',
  '#bd1e61',
  '#ea1d76',
  '#ff4338',
  '#cfde00',
  
  '#ca1767',
  '#e55535',
  '#ef9116',
  '#82bc00',
]

var options = {
  area: {
    curveType: 'function',
    backgroundColor: '#f9f9f9',
    colors: ponchoColors,
    lineWidth: 2,
    areaOpacity: 0.2,
    fontName: 'Roboto',
    fontSize: 14,
    isStacked: true,
    chartArea: {
      left:'10%',
      top: '10%',
      width:'80%',
      height:'65%'
    },
    hAxis: {
      gridlines: {
        color: '#fff',
      }
    },
    vAxis: {
      baselineColor: '#BBB',
      format: 'short',
      minValue: 0,
      gridlines: {
        color: '#ECECEC'
      }
    },
    legend: {
      position: 'bottom'
    }
  },

  bar: {
    backgroundColor: '#f9f9f9',
    colors: ponchoColors,
    fontName: 'Roboto',
    fontSize: 14,
    chartArea: {
      left:'10%',
      top: '10%',
      width:'85%',
      height:'65%'
    },
    legend: {
      position: 'bottom'
    },
    hAxis: {
      gridlines: {
        color: '#fff',
      }
    },
    vAxis: {
      baselineColor: '#BBB',
      format: 'short',
      minValue: 0,
      gridlines: {
        color: '#ECECEC'
      }
    }
  },

  line: {
    backgroundColor: '#f9f9f9',
    colors: ponchoColors,
    lineWidth: 2,
    fontName: 'Roboto',
    fontSize: 14,
    chartArea: {
      left:'10%',
      top: '10%',
      width:'80%',
      height:'65%'
    },
    legend: {
      position: 'bottom'
    },
    hAxis: {
      gridlines: {
        color: '#fff',
      }
    },
    vAxis: {
      baselineColor: '#BBB',
      format: 'short',
      minValue: 0,
      gridlines: {
        color: '#ECECEC'
      }
    },
    interpolateNulls: true
  },

  pie: {
    backgroundColor: '#f9f9f9',
    colors: [
      '#006aa9',
      '#007EC7',
      '#008EE1',
      '#009EFA',
      '#14A9FF',
      '#2EB3FF',
      '#47BCFF',
      '#61C5FF'
    ],
    fontName: 'Roboto',
    fontSize: 14,
    chartArea: {
      left:'0%',
      top: '10%',
      width:'95%',
      height:'65%'
    },
    pieSliceTextStyle: {
      fontSize: 12
    }
  },

  combo: {
    backgroundColor: '#f9f9f9',
    colors: ponchoColors,
    fontName: 'Roboto',
    fontSize: 14,
    chartArea: {
      left:'10%',
      top: '10%',
      width:'85%',
      height:'65%'
    },
    legend: {
      position: 'bottom'
    },
    hAxis: {
      gridlines: {
        color: '#fff',
      }
    },
    vAxis: {
      baselineColor: '#BBB',
      format: 'short',
      minValue: 0,
      gridlines: {
        color: '#ECECEC'
      }
    },
    seriesType: 'bars',
    series: {0: {type: 'line'}},
    curveType: 'function'
  }
};






