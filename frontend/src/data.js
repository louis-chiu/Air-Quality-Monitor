import moment from 'moment';
export const tvocSensorList = [
  '00137A100002033A',
  '00137A100002033B',
  '00137A100002033C',
  '00137A100002033D',
  '00137A100002033E',
  '00137A100002033F',
  '00137A1000020340',
  '00137A1000020341',
];
export const pm25SensorList = [
  '00137A1000020342',
  '00137A1000020343',
  '00137A1000020344',
  '00137A1000020345',
  '00137A1000020346',
  '00137A1000020347',
  '00137A1000020348',
  '00137A1000020349',
];

export const order = [
  '43號 2F',
  '後港活動中心',
  'Stairwell 1F',
  '45號 2F',
  '45號 2F 側面',
  '45號 2F 背面',
  'Main Entry 1',
  'Main Entry 2',
];

export const colorLineList = [
  ['rgb(240, 0, 52)', 'rgb(240, 0, 52)', 'rgb(200, 50, 50)'],
  ['rgb(20, 83, 110)', 'rgba(20, 83, 110,.5)', 'rgb(10,50,80)'],
  ['rgb(25, 150, 150)', 'rgba(25, 150, 150,.5)', 'rgb(25,150,150)'],
  ['rgb(0, 255, 100)', 'rgba(0, 255, 100,.5)', 'rgb(50, 205, 50)'],
  ['rgb(148, 0, 253)', 'rgba(148, 0, 253,.5)', 'rgb(120, 0, 200)'],
  ['rgb(255, 136, 0)', 'rgba(255, 136, 0,.5)', 'rgb(205, 100, 0)'],
  ['rgb(247, 122, 122)', 'rgba(247, 122, 122,.5)', 'rgb(210, 100, 100)'],
  ['rgb(50, 133, 241)', 'rgba(50, 133, 241,.5)', 'rgb(50, 110, 200)'],
];

export const colorList = [
  '#ff6384',
  '#1391c7a6',
  '#0abfae',
  '#50e990b9',
  '#9919f59d',
  '#ffa300',
  '#ffb4b4',
  '#b3d4ff',
];

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
    subtitle: {
      display: true,
    },
  },
  scales: {
    x: {
      type: 'time',
      max: moment(Date.now()),
      time: {
        displayFormats: {
          minute: 'HH:mm',
          hour: 'MMM D, HH:mm',
        },
      },
    },
    y: {
      type: 'linear',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
