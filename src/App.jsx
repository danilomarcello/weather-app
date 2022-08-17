import React, { useState, useEffect } from "react"

import axios from "axios"

import { SearchBar, Button, Card } from './components';


const App = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [city, setCity] = useState('são paulo')
  const [weather, setWeather] = useState([])

  const getWeather = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_WEATHER_APP_KEY}&units=metric`
    )
    setWeather(data)
  }

  useEffect(() => {
    getWeather()
  } , [city])

  const handleSearch = () => {
      setCity(inputSearch)
  }

  return (
    <div className="h-screen w-screen flex items-center bg-slate-100 flex-col font-pop">
      <div className="flex my-20 items-center flex-row">
      <SearchBar
    placeholder='Search for a city'
    onChange={(e)=> setInputSearch(e.target.value)}/>
      <Button onClick={handleSearch}/>
      </div>

      {weather.main && <Card weather={weather}/>}
    </div>
  )
}

export default App
