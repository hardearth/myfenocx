import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';
import useConfig from 'hooks/useConfig';
import dataJson from 'data/transactions';

const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

const IncomeAreaChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  function getMonthlyData(date) {
    let request = new Date(Date.parse(date));
    request = request.getMonth() + 1;
    return request;
  }

  function getYear(date) {
    let request = new Date(Date.parse(date));
    request = request.getFullYear();
    return request;
  }

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.dark, theme.palette.primary[900]],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary
            ]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: 11
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: 'dark'
      }
    }));
  }, [mode, primary, secondary, line, theme]);

  const [series, setSeries] = useState([
    {
      name: 'Deposits',
      data: [0, 86, 28, 115, 48, 210, 136]
    }
  ]);

  useEffect(() => {
    function getCount() {
      let now = new Date().getFullYear();
      let i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      dataJson.commissions.map((deposit) => {
        if (getYear(deposit.date) === now) {
          switch (getMonthlyData(deposit.date)) {
            case 1:
              i[0] = i[11] + deposit.amount;
              break;
            case 2:
              i[1] = i[11] + deposit.amount;
              break;
            case 3:
              i[2] = i[11] + deposit.amount;
              break;
            case 4:
              i[3] = i[11] + deposit.amount;
              break;
            case 5:
              i[4] = i[11] + deposit.amount;
              break;
            case 6:
              i[5] = i[11] + deposit.amount;
              break;
            case 7:
              i[6] = i[11] + deposit.amount;
              break;
            case 8:
              i[7] = i[11] + deposit.amount;
              break;
            case 9:
              i[8] = i[11] + deposit.amount;
              break;
            case 10:
              i[9] = i[11] + deposit.amount;
              break;
            case 11:
              i[10] = i[11] + deposit.amount;
              break;
            case 12:
              i[11] = i[11] + deposit.amount;
              break;
            default:
              break;
          }
        }
      });
      return i;
    }

    setSeries([
      {
        name: 'Deposits',
        data: getCount()
      }
    ]);
  }, []);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

export default IncomeAreaChart;
