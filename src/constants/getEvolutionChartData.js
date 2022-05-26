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
      text: 'Price evolution',
      align: 'left',
    },
    colors: ['#D6215B', '#7530B2', '#FFB448'],
    xaxis: {
      categories: getDatesArray(EvolutionCharArray),
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
