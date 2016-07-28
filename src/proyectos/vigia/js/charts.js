google.load('visualization', '1.0', {'packages':['corechart']});

var data = {};
var chart = {};
var options = {
  area: {
    curveType: 'function',
    backgroundColor: '#f5f5f5',
    colors: [
      '#006aa9',
      '#ca1767',
      '#e55535',
      '#ef9116',
      '#51a42b',
      // '#009c9a',
      // '#00a474',
      // '#fbc900',
      // '#e3494d',
      // '#df3671',
    ],
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
        color: '#f5f5f5',
      }
    },
    vAxis: {
      baselineColor: '#AAA',
      format: 'short',
      minValue: 0,
      gridlines: {
        color: '#E8E8E8'
      }
    },
    legend: {
      position: 'bottom'
    }
  },
  bar: {
    backgroundColor: '#f5f5f5',
    colors: [
      '#006aa9',
      '#ca1767',
      '#e55535',
      '#ef9116',
      '#51a42b',
    ],
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
        color: '#f5f5f5',
      }
    },
    vAxis: {
      baselineColor: '#AAA',
      format: 'short',
      minValue: 0,
      gridlines: {
        color: '#E8E8E8'
      }
    }
  },
  line: {
    backgroundColor: '#f5f5f5',
    colors: [
      '#006aa9',
      '#ca1767',
      '#e55535',
      '#ef9116',
      '#51a42b',
    ],
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
        color: '#f5f5f5',
      }
    },
    vAxis: {
      baselineColor: '#AAA',
      format: 'short',
      minValue: 0,
      gridlines: {
        color: '#E8E8E8'
      }
    }
  },
  pie: {
    backgroundColor: '#f5f5f5',
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
      left:'10%',
      top: '10%',
      width:'85%',
      height:'65%'
    },
    pieSliceTextStyle: {
      fontSize: 12
    }
  }
};







