import { useContext } from "react";
import WeatherContext from "../context/WeatherProvider";

const UseWeather = () => {
    return (
        useContext(WeatherContext)
    );
};

export default UseWeather;