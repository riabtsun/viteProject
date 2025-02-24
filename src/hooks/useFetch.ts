import { useEffect, useState } from 'react';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const res = await fetch(url, { signal });

        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();

        setData(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
  const getData = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      console.log(isLoading, isError);
      const res = await fetch(url, { signal });
      }
    };
      const data = await res.json();
      setData(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
