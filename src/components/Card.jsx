import React from 'react'

import moment from 'moment'

const Card = ({ weather }) => {
  const temperature = Math.round(`${weather.main.temp}`)
  const max = Math.round(`${weather.main.temp_max}`)
  const min = Math.round(`${weather.main.temp_min}`)
  const feelsLike = Math.round(`${weather.main.feels_like}`)

  return (
<div className="card lg bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">
      {weather.name}, {weather.sys.country}
      <h2 className='card-subtitle text-gray-500'>{moment().format('LT')}</h2>
      <div className="badge badge-secondary h-6">
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>

      </div>
    </h2>
    <h4 className="text-4xl">{temperature}&deg;C</h4>
    <p className="text-xs text-gray-500">Feels like {feelsLike}&deg;C</p>
    <p className="text-xs text-gray-500">Max {max}&deg;C</p>
    <p className="text-xs text-gray-500">Min {min}&deg;C</p>
    <p className="text-xs text-gray-500">Humidity : {weather.main.humidity}%</p>

    <div className="card-actions justify-between">
      <div className="badge badge-outline">{moment().format('dddd')}</div> 
      <div className="badge badge-outline">{moment().format("MMM Do YY")}</div> 
      <div className="badge badge-outline capitalize">{weather.weather[0].description}</div>
    </div>
  </div>
</div>
  )
}

export { Card }