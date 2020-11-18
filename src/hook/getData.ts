import { useState, useEffect } from 'react';
import req from '../utils/request';

const useData = <T>(endpoint: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const body = await req(endpoint);
        setData(body);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    isLoading,
    data,
    errorMessage,
  };
};

export default useData;
