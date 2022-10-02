import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../Context";
import { useContext } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

export default function Home() {
  const { fotos } = useContext(Context);

  // AQUÍ VI PARTE DE LO QUE SALÍA EN LA AYUDANTÍA PERO ME HE RENDIDO. 
  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto, i) => (
        <div
          onClick={() => setFavorito(foto.id)}
          className="foto"
          style={{ backgroundImage: `url(${foto.src})` }}
          key={i}>

          <Heart filled={foto.favorito} />
          <p>{foto.descripcion}</p>
        </div>
      ))}
    </div>
  );
}
