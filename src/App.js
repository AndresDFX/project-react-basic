import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ComentarioDetalles from "./components/ComentarioDetalles";
import FormularioUsuario from "./components/FormularioUsuario";


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/about">Acerca de</Link>
          <Link to="/registro-usuario">Registro</Link>
        </nav>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comentario/:id" element={<ComentarioDetalles/>}/>
          <Route path="/registro-usuario" element={<FormularioUsuario/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
