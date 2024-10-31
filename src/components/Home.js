import React, { useState } from "react";
import Saludo from "./Saludo";
import Despedida from "./Despedida";
import FormularioComentario from "./FormularioComentario";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
function Home() {
  const [comentario, setComentario] = useState("");

  const agregarComentario = (nuevoComentario) => {
    setComentario(nuevoComentario);
  };

  return (
    <Router>
    <div>
      <h1>¡Bienvenido a la aplicación de comentarios!</h1>
      <Saludo />
      <p>Parrafo separador</p>
      <Despedida />

      <FormularioComentario onAgregarComentario={agregarComentario} />

      {comentario && (
        <div>
          <h3>Comentario Publicado</h3>
          <p>{comentario}</p>
        </div>
      )}

      <Routes>
        <Route path="/about" element={About}></Route>
      </Routes>
      
    </div>
    </Router>
  );
}

export default Home;