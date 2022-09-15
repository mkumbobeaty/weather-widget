import { useState, useEffect } from "react";
import { getCurrentWeather } from "../api/weatherApi";

const useFetch = (selectedCity: any) => {
    const [currentWeather, setCurrentWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        async function getWeather() {
            if (selectedCity !== null) {
                const [lat, lon] = selectedCity.value.split(" ");
                const fetchedData = await getCurrentWeather(lat, lon);
                setLoading(false)
                if (fetchedData?.response) setErrorMessage(fetchedData?.response?.data?.message)
                else {
                    return setCurrentWeather({ city: selectedCity?.label, ...fetchedData });
                }
            }
            else {
                const fetchedData = await getCurrentWeather(-6.776012, 39.178326);
                setLoading(false);
                return setCurrentWeather({ city: "Dar es Salaam", ...fetchedData });

            }
        }
        setLoading(true)
        getWeather()

        const interval: NodeJS.Timer = setInterval(() => {
            getWeather()
        }, 30000)

        return () => clearInterval(interval)
    }, [selectedCity]);


    return { currentWeather, loading, errorMessage };
};

export default useFetch;
