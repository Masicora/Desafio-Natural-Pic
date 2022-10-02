import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";

  return (
    <div className="App">
      <Context.Provider>

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
