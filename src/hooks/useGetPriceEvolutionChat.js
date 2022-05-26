import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import priceEvolutionChartService from '../services/priceEvolutionChartService';
import { priceEvolutionChartSliceLoadded } from '../features/priceEvolutionChartSlice';
import { getEvolutionChartData } from '../constants/getEvolutionChartData';

const useGetPriceEvolutionChat = () => {
  const currentList = useSelector((state) => state.priceEvolutionChart);
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [evolutionChartData, setEvolutionChartData] = useState({});

  useEffect(() => {
    const getList = async () => {
      if (!currentList?.length) {
        try {
          const response = await priceEvolutionChartService();
          dispatch(priceEvolutionChartSliceLoadded(response.data));
          setEvolutionChartData(getEvolutionChartData(response.data));
        } catch (errorService) {
          setError(errorService);
        }
      }
    };
    setError(null);
    getList();
  }, [currentList?.length, dispatch]);

  return { error, evolutionChartData };
};

export default useGetPriceEvolutionChat;
