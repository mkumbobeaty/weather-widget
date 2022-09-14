import Axios from "axios";

const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL || "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY || "0c207fc9698dcff2d81c270a5a710a75"

export const getCurrentWeather = (lat: number, lon:number) => {
  return Axios.get(WEATHER_API_URL, { params: {
      lat: lat,
      lon: lon,
      appid: WEATHER_KEY,
      units: "metric"
  } }).then((response) => response.data);
}
  

