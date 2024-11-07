import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ComentarioDetalles from "./components/ComentarioDetalles";
import FormularioUsuario from "./components/FormularioUsuario";
import Peticiones from "./components/Peticiones";
import { ThemeProvider } from "./context/ThemeContext";
import BotonTema from "./components/BotonTema";
import './App.css';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <BotonTema/>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/about">Acerca de</Link>
            <Link to="/registro-usuario">Registro</Link>
            <Link to="/usuarios">Usuarios</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/comentario/:id" element={<ComentarioDetalles/>}/>
            <Route path="/registro-usuario" element={<FormularioUsuario/>} />
            <Route path="/usuarios" element={<Peticiones/>}/>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
