import React, { useState } from 'react';
import { getCities } from './api/geodbApi';
import './App.css';
import SearchCity from './components/SearchInput';
import WeatherWidget from './components/WeatherWidget';
import useFetch from './hooks';

function App() {

  const [searchCityData, setSearchCityData] = useState(null)

  const loadingOptions = async (inputValue: string) => {
    const fetchedData = await getCities(inputValue);
    const options = fetchedData?.data.map((city: any) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: city.name
      }
    })

    setSearchCityData(fetchedData)
    return options
  }

  const onSearchChange = (selectedData: any) => {
    console.log("selected", selectedData)
  }

const { currentWeather, loading } = useFetch(-6.776012, 39.178326, "mwanza");
  return (
    <div className="container">
      <WeatherWidget currentWeather={currentWeather} loading={loading} />
      <SearchCity loadingOptions={loadingOptions} onSearchChange={onSearchChange}/>
    </div>
  );
}

export default App;
