import "./styles.css"

interface WeatherWidgetProps {
    currentWeather: any,
    loading: boolean
} 

const WeatherWidget = ({currentWeather, loading}: WeatherWidgetProps) => {

    return (
        <div className="weather" >
            <h3> Current weather</h3>
            <section className="current-weather">
                <div className="top">
                    <div>
                        <p className="city">{currentWeather?.city}</p>
                        <p className="weather-description">{currentWeather?.weather[0].description}</p>
                    </div>
                    <img
                        alt="weather"
                        className="weather-icon"
                        src={`icons/${currentWeather?.weather[0].icon}.png`}
                    />
                </div>
                <div className="bottom">
                    <p className="temperature">{Math.round(currentWeather?.main.temp)}°C</p>
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label">Details</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Feels like</span>
                            <span className="parameter-value">
                                {Math.round(currentWeather?.main?.feels_like)}°C
                            </span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Wind</span>
                            <span className="parameter-value">{currentWeather?.wind?.speed} m/s</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Humidity</span>
                            <span className="parameter-value">{currentWeather?.main?.humidity}%</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Pressure</span>
                            <span className="parameter-value">{currentWeather?.main?.pressure} hPa</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WeatherWidget