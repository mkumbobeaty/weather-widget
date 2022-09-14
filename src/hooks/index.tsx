import { useState, useEffect } from "react";
import { getCurrentWeather } from "../api/weatherApi";

const useFetch = (selectedCity: any) => {
    const [currentWeather, setCurrentWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getWeather() {
            if (selectedCity !== null) {
                const [lat, lon] = selectedCity.value.split(" ");
                const fetchedData = await getCurrentWeather(lat, lon);

                return setCurrentWeather({ city: selectedCity?.label, ...fetchedData });
            }
            else {
                const fetchedData = await getCurrentWeather(-6.776012, 39.178326);
                return setCurrentWeather({ city: "Dar es Salaam", ...fetchedData });
            }
        }

        getWeather()
        setLoading(false);
    }, [selectedCity]);

    return { currentWeather, loading };
};

export default useFetch;
