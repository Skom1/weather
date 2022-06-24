import {useState} from "react";
import React from 'react';
import useWeather from "../hooks/useWeather";

const Formulario = () => {

    const [alerta, setAlerta] = useState('')
    const { search, datosBusqueda, consultarClima } = useWeather()
    const { ciudad, pais } = search
    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(search).includes('')){
            setAlerta("Todos los campos son obligatorios")
            return
        }
        setAlerta('')
        consultarClima(search)
    }
    return (
        <div className={"contenedor"}>
            {alerta && <p>{alerta}</p>}
            <form
                onSubmit={handleSubmit}
            >
                <div className={"campo"}>
                    <label htmlFor={"ciudad"}>Ciudad</label>
                    <input
                        type={"text"}
                        id={"ciudad"}
                        name={"ciudad"}
                        onChange={datosBusqueda}
                        value={ciudad}

                    />
                </div>
                <div className={"campo"}>
                    <label htmlFor={"pais"}>Pais</label>
                    <select
                        id={"pais"}
                        name={"pais"}
                        onChange={datosBusqueda}
                        value={pais}
                    >
                        <option value={""}>Selecciona un pais</option>
                        <option value={"US"}>Estados Unidos</option>
                        <option value={"MX"}>Mexico</option>
                        <option value={"AR"}>Argentina</option>
                        <option value={"CL"}>Chile</option>
                    </select>
                </div>
                <input
                    type={"submit"}
                    value={"Consultar clima"}
                />
            </form>
        </div>
    );
};

export default Formulario;