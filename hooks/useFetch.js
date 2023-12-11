import { useEffect, useState } from "react";

const useFetch = (url = "", ...options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchDatas = async () => {
      try {
        setIsLoading(true);
        const { signal } = abortController;
        const resp = await fetch(url, {
          ...options,
          signal: signal
        });

        const json = await resp.json();
        setResponse(json);
      } catch(err) {
        console.error(err)
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDatas();

    return () => {
      if (abortController.abort) {
        abortController.abort();
      }
    }
  }, []);

  return [
    response,
    error,
    isLoading
  ]
}

export default useFetch;