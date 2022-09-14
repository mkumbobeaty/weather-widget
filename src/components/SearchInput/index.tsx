import AsyncSelect from "react-select/async";

import { getCities } from '../../api';


const SearchCity = () => {

    const loadingOptions = async () => {
        const fetchedData = await getCities("");
        const options = fetchedData?.data.map((city: any) => {
            return {
                value: `${city.latitude} ${city.longitude}`,
                label: city.name
            }
        })
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