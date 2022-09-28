import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// views
import Home from "./views/Home/Home";
import Admin from "./views/Admin/Admin";

// components
import Navbar from "./components/Navbar";

import { useState } from "react";
import Context from "./Context";

export default function App() {
  const [publicaciones, setPublicaciones] = useState([]);

  const globalState = { publicaciones, setPublicaciones };

  return (
    <div className="App text-light">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
