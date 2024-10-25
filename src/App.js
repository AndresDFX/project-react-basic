import React, {useState} from "react";
import Saludo from "./components/Saludo";
import Despedida from "./components/Despedida";
import FormularioComentario from "./components/FormularioComentario";


function App(){

  const [comentario, setComentario] = useState("");

  const agregarComentario = (nuevoComentario) => {
    setComentario(nuevoComentario);
  }


  return (
    <div className="App">

      <h1>BIENVENIDO A LA APLICACION DE COMENTARIOS</h1>
      <Saludo/>
      <p>Parrafo separador</p>
      <Despedida/>

      <FormularioComentario onAgregarComentario={agregarComentario}/>

      {comentario && (
          <div>
            <h3>Comentario Publicado</h3>
            <p>{comentario}</p>
          </div> 
      )}

    </div>
  );
}

export default App;
