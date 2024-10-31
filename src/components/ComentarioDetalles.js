import React from "react";
import  {useParams} from "react-router-dom";

function ComentarioDetalles(){
    const {id} = useParams();

    return (
        <div>
            <h2>Mostrando comentario</h2>
            <p>Mostrando detalles del comentario {id}</p>
        </div>
    );
}

export default ComentarioDetalles;