import { useEffect, useState } from "react";

const useStoreData = (apiUrl) => {
  const [data, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Fake Store API: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, [apiUrl]);
  return { data, error, loading };
};

export default useStoreData;
