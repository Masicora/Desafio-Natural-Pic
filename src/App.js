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

  async function getFotos() {
    const endpoint = "./fotos.json";
    const respuesta = await fetch(endpoint);
    let { fotosjson } = await respuesta.json();

    fotosjson = fotosjson.map((foto) => ({
      src: foto.src.tiny,
      id: foto.id,
      favorite: false,
      description: foto.alt,

    }));

    setFotos(fotosjson);
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
