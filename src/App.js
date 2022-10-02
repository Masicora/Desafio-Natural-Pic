// FRANCISCO, ESTE DESAFÍO ME HA SUPERADO POR LA COMPLEJIDAD QUE POSEE. LO QUE SÍ, HE CUMPLIDO CON CREAR EL CONTEXTO, PROVEERLO Y LLAMARLO DESDE ALGUNOS COMPONENTES. LA PÁGINA NO FUNCIONA. QUIZÁ SERÍA BUENO QUE COMPARTIERAS TU CÓDIGO EL DÍA MIÉRCOLES Y NOS ENSEÑARAS QUÉ HICISTE EN CADA COMPONENTE PARA QUE PODAMOS APRENDER. GRACIAS.



import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [fotos, setFotos] = useState([]);

  // ESTA PARTE FALTA RESOLVER PERO ME HE RENDIDO
  async function getFotos() {
    const endpoint = "./fotos.json";
    const response = await fetch(endpoint);
    const photos = await response.photos;
    setFotos(photos);
  };

  useEffect(() => { getFotos(); }, []);

  return (
    <div className="App">
      <Context.Provider value={{ fotos, setFotos }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}
