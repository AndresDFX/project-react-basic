import React from "react";
import { useTheme } from "../context/ThemeContext";

function BotonTema(){
    
    const {temaOscuro, toggleTema} = useTheme();


    return (
    <div style={{backgroundColor: temaOscuro ? '#333' : '#fff', color: temaOscuro ? '#fff': '#000', padding: '10px', textAlign: 'center'}}>
        <p> Tema actual: {temaOscuro ?  'Oscuro' : 'Claro'}</p>
        <button onClick={toggleTema}>
            Cambiar a {temaOscuro ? 'Claro': 'Oscuro'}
        </button>

    </div>
    );
}

export default BotonTema;