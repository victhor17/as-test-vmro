import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { presenceByProductLoaded } from '../features/presenceByProductSlice';
import presenceProductService from '../services/presenceProductService';
import { getpresenceByProductData } from '../constants/getpresenceByProductData';

const useGetPresenceByProduct = () => {
  const currentList = useSelector((state) => state.presenceByProduct);
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [presenceByProductData, setpresenceByProductData] = useState({});

  useEffect(() => {
    const getList = async () => {
      if (!currentList?.length) {
        try {
          const response = await presenceProductService();
          dispatch(presenceByProductLoaded(response.data));
          setpresenceByProductData(getpresenceByProductData(response.data));
        } catch (errorService) {
          setError(errorService);
        }
      }
    };
    setError(null);
    getList();
  }, [currentList?.length, dispatch]);

  return { error, presenceByProductData };
};

export default useGetPresenceByProduct;
