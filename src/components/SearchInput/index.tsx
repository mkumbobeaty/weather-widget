import { useState } from "react";
import AsyncSelect from "react-select/async";

import { getCities } from '../../api/geodbApi';

import "./styles.css"


interface SearchProps {
    onSearchChange: (data: any) => void,
} 

const loadingOptions = async (inputValue: string) => {
    const fetchedData = await getCities(inputValue);
    const options = fetchedData?.data.map((city: any) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: city.name
      }
    })

    return options
  }

const SearchCity = ({ onSearchChange}: SearchProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

      const onChangeSelectedOption = (selectedOption: any) => {
        setSelectedOption(selectedOption);
        onSearchChange(selectedOption);

      };
      
    return (
        <div className="search-container">
            <AsyncSelect
                defaultOptions
                placeholder="Search for city"
                loadOptions={loadingOptions}
                isClearable={true}
                value={selectedOption}
                onChange={onChangeSelectedOption}
                 />

        </div>
    )
}

export default SearchCity;