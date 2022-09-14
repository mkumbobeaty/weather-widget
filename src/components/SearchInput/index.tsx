import AsyncSelect from "react-select/async";

import { getCities } from '../../api/geodbApi';
import { getCurrentWeather } from "../../api/weatherApi";

const SearchCity = () => {

    const loadingOptions = async (inputValue: string) => {
        const fetchedData = await getCities(inputValue);
        const options = fetchedData?.data.map((city: any) => {
            return {
                value: `${city.latitude} ${city.longitude}`,
                label: city.name
            }
        })

        getCurrentWeather(-6.8, 39.283333333)
        return options
    }


    return (
        <div>
            <AsyncSelect
                defaultOptions
                placeholder="Search for city"
                loadOptions={loadingOptions} />
        </div>
    )
}

export default SearchCity;