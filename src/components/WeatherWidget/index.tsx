import useFetch from "../../hooks"
import Spinner from "../Spinner"
import Weather from "./weather"

import "./styles.css"

const WeatherWidget = ({ selectedCity }: any) => {

    const { currentWeather, loading, errorMessage } = useFetch(selectedCity)

    return (
        <div className="weather">
            <h3> Current weather </h3>
            <section className="current-weather" data-testid="current-weather">
                {loading ? <Spinner /> :
                    errorMessage ? <h5>{errorMessage}</h5> : 
                    <Weather currentWeather={currentWeather} />
                }

            </section>
        </div>
    )
}

export default WeatherWidget