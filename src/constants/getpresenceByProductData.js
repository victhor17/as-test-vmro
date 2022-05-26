export const getpresenceByProductData = (presenceData) => {
  return {
    chart: {
      type: 'pie',
    },
    series: getSeries(presenceData),
    labels: getLabels(presenceData),
    colors: ['#D6215B', '#7530B2', '#FFB448', '#006FFF', '#23B794'],
    title: {
      text: 'Presence Share by Product',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
  };
};

const getSeries = (data) => {
  return data?.map((item) => {
    return item.presenceShare;
  });
};

const getLabels = (data) => {
  return data.map((item) => {
    return item.name;
  });
};
