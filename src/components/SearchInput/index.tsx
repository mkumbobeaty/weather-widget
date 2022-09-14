import { useState } from "react";
import AsyncSelect from "react-select/async";

import { getCities } from '../../api/geodbApi';

interface searchProps {
    loadingOptions: (data: any) => void,
    onSearchChange: (data: any) => void,
} 

const SearchCity = ({loadingOptions, onSearchChange}: searchProps) => {
    const [search, setSearch] = useState<string | null>(null)

      const onChangeSelectedOption = (selectedOption: any) => {
        setSearch(selectedOption);
        onSearchChange(selectedOption);

      };
    return (
        <div>
            <AsyncSelect
                defaultOptions
                placeholder="Search for city"
                loadOptions={loadingOptions}
                isClearable={true}
                value={search}
                onChange={onChangeSelectedOption}
                 />

        </div>
    )
}

export default SearchCity;