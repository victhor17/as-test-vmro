import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsLoaded } from '../features/productsSlice';
import productsService from '../services/productsService';


const useGetProducts = () => {
  const currentList = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(currentList);

  const [error, setError] = useState(null);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getList = async () => {
      console.log(currentList?.length);
      if (!currentList?.length) {
        try {
          const response = await productsService();
          console.log(response.data);
          dispatch(productsLoaded(response.data));
          setProductsData(response.data);
        } catch (errorService) {
          setError(errorService);
        }
      }
    };
    setError(null);
    getList();
  }, [currentList?.length, dispatch]);

  return { error, productsData };
};

export default useGetProducts;
