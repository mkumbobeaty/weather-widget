
import React, { useState } from 'react';

import SearchCity from './components/SearchInput';
import WeatherWidget from './components/WeatherWidget';

import './App.css';


function App() {

  const [selectedCityData, setSelectedCityData] = useState(null)

  const onSearchChange = (selectedData: any) => {
    setSelectedCityData(selectedData)
  }

  return (
    <div className="container">
      <SearchCity onSearchChange={onSearchChange} />
      <WeatherWidget selectedCity={selectedCityData} />

    </div>
  );
}

export default App;
