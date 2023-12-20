import { useEffect, useState } from "react";

const useFetch = (url = "", method = "GET", ...options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchDatas = async () => {
      try {
        setIsLoading(true);
        const { signal } = abortController;

        const opts = {signal, method, ...options};
        const resp = await fetch(url, opts);
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