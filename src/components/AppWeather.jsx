import React from 'react';
import Formulario from "./Formulario";
import Results from "./Results";
import useWeather from "../hooks/useWeather";

const AppWeather = () => {
    const { resultado, noResultado } = useWeather()

    return (
        <main className={'dos-columnas'}>
            <Formulario />
            {resultado?.name ? <Results /> : noResultado ? <p>{noResultado}</p> :
                <p>EL clima se va a mostrar aqui</p>}
        </main>
    );
};

export default AppWeather;