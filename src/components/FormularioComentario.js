import React, { useState } from "react";


function FormularioComentario({onAgregarComentario}){

    const [nuevoComentario, setNuevoComentario] = useState("");
    // variable de estado, metodo para cambiar el valor de la variable de estado

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevoComentario.trim() !== ""){
            onAgregarComentario(nuevoComentario);
            //setNuevoComentario("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
                placeholder="Escribe un comentario"
            />

            <button type="submit">Agregar comentario</button>
            
        </form>
    )

}

export default FormularioComentario;