
import { useEffect, useState } from "react";


export function useFetch(fetchFn, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);         

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const fetchedData = await fetchFn();
        setData(fetchedData);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

  return { data, isFetching, setData, error };
}
