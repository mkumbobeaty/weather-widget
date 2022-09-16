
import { useState } from 'react';

import SearchCity from './components/SearchInput';
import WeatherWidget from './components/WeatherWidget';
import ThemeMode from './components/Theme';

import './App.css';

function App() {

  const [selectedCityData, setSelectedCityData] = useState(null)

  const onSearchChange = (selectedData: any) => {
    setSelectedCityData(selectedData)
  }

  return (
    <div className="container">
      <h2>Weather Widget Component</h2>
      <ThemeMode />
      <WeatherWidget selectedCity={selectedCityData} />
      <SearchCity onSearchChange={onSearchChange} />
    </div>
  );
}

export default App;
