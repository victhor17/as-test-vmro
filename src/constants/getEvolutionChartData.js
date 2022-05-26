import moment from 'moment';

export const getEvolutionChartData = (EvolutionCharArray) => {
  return {
    chart: {
      type: 'area',
    },
    series: getSeries(EvolutionCharArray),
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Price Evolution',
      align: 'left',
    },
    colors: ['#D6215B', '#7530B2', '#FFB448'],
    xaxis: {
      categories: getDatesArray(EvolutionCharArray),
    },grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
  };
};

const getSeries = (EvolutionCharArray = []) => {
  var seriesArray = EvolutionCharArray.reduce((accArr, current) => {
    if (!accArr.some((item) => item.sku === current.sku)) {
      accArr.push(current);
    }
    return accArr;
  }, []);

  seriesArray = seriesArray?.map((item, index) => {
    return {
      name: item.name,
      data: EvolutionCharArray.filter((filterItem) => {
        return item.sku === filterItem.sku;
      }).map((map) => {
        return map.price;
      }),
    };
  });
  return seriesArray;
};

const getDatesArray = (data) => {
  return data?.map((item) => {
    return moment(item.dateExtraction).format('DD MMM');
  });
};
