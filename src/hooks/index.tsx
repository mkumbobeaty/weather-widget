import { useState, useEffect } from "react";
import { getCities } from "../api";

const useFetch = (inputValue: string) => {
  const [searchCity, setSearchCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCity() {
      const fetchedData = await getCities(inputValue);
      setSearchCity(fetchedData);
      setLoading(false);
    }

    fetchCity();
  }, [inputValue]);

  return { searchCity, loading };
};

export default useFetch;
