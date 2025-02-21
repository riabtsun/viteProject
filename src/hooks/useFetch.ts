import { useEffect, useState } from 'react';

const useFetch = <T>(url: string) => {
  const controller = new AbortController();
  const signal = controller.signal;

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const res = await fetch(url, { signal });

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();
      console.log('data is: ', data);
      setData(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading, isError };
};

export default useFetch;
