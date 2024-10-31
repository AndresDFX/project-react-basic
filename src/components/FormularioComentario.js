import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function FormularioComentario({onAgregarComentario}){

    const [nuevoComentario, setNuevoComentario] = useState("");
    // variable de estado, metodo para cambiar el valor de la variable de estado
    const navigate = useNavigate();


    const manejarCambio = (e) =>  {
        setNuevoComentario(e.target.value);
    }

    const manejarEnvio = (e) => {
        e.preventDefault();
        onAgregarComentario(nuevoComentario);
        navigate("/about");
    }

    return (
        <form onSubmit={manejarEnvio}>
            <input 
                type="text"
                value={nuevoComentario}
                onChange={manejarCambio}
                placeholder="Escribe un comentario"
            />

            <button type="submit">Agregar comentario</button>
            
        </form>
    )

}

export default FormularioComentario;