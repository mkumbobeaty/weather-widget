import { useState } from "react";
import AsyncSelect from "react-select/async";

import { getCities } from '../../api/geodbApi';

import "./styles.css"

interface SearchProps {
  onSearchChange: (data: any) => void,
}

const SearchCity = ({ onSearchChange }: SearchProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [defaultOptions, setDefaultOptions] = useState<string[]>([])

  const loadingOptions = async (inputValue: string) => {
    const fetchedData = await getCities(inputValue);
    const options = fetchedData?.data.map((city: any) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: city.name
      }
    })
    setDefaultOptions(options)
    return options
  }

  const onChangeSelectedOption = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    onSearchChange(selectedOption);

  };

  return (
    <div className="search-container" data-testid="searchInput" >
      <AsyncSelect
        defaultOptions={defaultOptions}
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