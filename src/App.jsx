import AppWeather from "./components/AppWeather";
import { useState } from 'react'
import { WeatherProvider } from "./context/WeatherProvider";

function App() {
  return(
      <WeatherProvider>
        <header>
          <h1>Buscador de Climas</h1>
        </header>
        <AppWeather />
      </WeatherProvider>
  )
}

export default App
