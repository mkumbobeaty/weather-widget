import { WeatherResponse } from "../types"
import "./styles.css"


interface WeatherProps {
    currentWeather: WeatherResponse
}
const Weather = ( {currentWeather} : WeatherProps ) => {

    return (
        <div data-testid="weatherContent">
            <div className="header">
                <h4>{currentWeather?.city} {currentWeather?.sys?.country}</h4>
            </div>
            <div className="weather-content">
                <p className="temperature">{Math.round(currentWeather?.main?.temp)}°C</p>
                <img
                    alt="weather"
                    className="weather-icon"
                    src={`http://openweathermap.org/img/w/${currentWeather?.weather[0].icon}.png`}
                />
                <p className="weather-description">{currentWeather?.weather[0].description}</p>

            </div>

            <div className="bottom-detail">
                <div className="detail-column">
                    <span className="detail-label">Wind</span>
                    <p >{currentWeather?.wind?.speed} m/s</p>
                </div>
                <div className="detail-column">
                    <span className="detail-label">Humidity</span>
                    <p >{currentWeather?.main?.humidity}%</p>
                </div>
                <div className="detail-column">
                    <span className="detail-label">Pressure</span>
                    <p >{currentWeather?.main?.pressure} hPa</p>
                </div>
                <div className="detail-column">
                    <span className="detail-label">Weather</span>
                    <p >{currentWeather?.weather[0].main}</p>
                </div>
                <div className="detail-column">
                    <span className="detail-label">Feels like</span>
                    <p > {Math.round(currentWeather?.main?.feels_like)}°C
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Weather