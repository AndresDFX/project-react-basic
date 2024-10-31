import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ComentarioDetalles from "./components/ComentarioDetalles";


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/about">Acerca de</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comentario/:id" element={<ComentarioDetalles/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
