import React from 'react';
import { useState, createContext } from "react";
import axios from 'axios'
import app from "../App";

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

    const [search, setSearch] = useState({
        ciudad: '',
        pais: ''
    })
    const [resultado, setResultado] = useState({})
    const [noResultado, setNoResultado] = useState(false)

    const datosBusqueda = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        setNoResultado(false)
        try {
            const { ciudad, pais } = datos
            const appId = import.meta.env.VITE_API_KEY
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},
            ${pais}&limit=1&appid=${appId}`
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            const urlClima = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const { data: clima } = await axios(urlClima)
            setResultado(clima)
        } catch (e) {
            setNoResultado("No hay resultados")
            console.log(e)
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                search,
                datosBusqueda,
                consultarClima,
                resultado,
                noResultado
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};



export {WeatherProvider}

export default WeatherContext;