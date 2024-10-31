import React from "react";
import Comentario from "./Comentario";


function ListaComentarios({comentario}){
    return (
        <div>
            <h2>Comentario publicado</h2>
            <Comentario texto={comentario}/>
        </div>
    );

}

export default ListaComentarios;