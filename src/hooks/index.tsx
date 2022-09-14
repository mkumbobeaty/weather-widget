import { useState, useEffect } from "react";
import { getCurrentWeather } from "../api/weatherApi";

const useFetch = (lat: number, log: number, searchCityData: any ) => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWeather() {
    if(searchCityData) {
      const fetchedData = await getCurrentWeather(lat, log);

     return setCurrentWeather({city: "Dar es Salaam",  ...fetchedData});
    }
    else {
        const fetchedData = await getCurrentWeather(lat, log);
        return setCurrentWeather({city: "Dar es Salaam",  ...fetchedData});
    }
    }

    getWeather()
    setLoading(false);
  }, [lat, log]);

  return { currentWeather, loading };
};

export default useFetch;
