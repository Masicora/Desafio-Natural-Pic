import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../Context";
import { useContext } from "react";

export default function Home() {
  const { fotos, setFotos } = useContext(Context);

  const Favorito = (x) => {
    const indice = fotos.findIndex((f) => f.x === x);
    fotos[indice].favorite = !fotos[indice].favorite;
    setFotos([...fotos]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto, i) => (
        <div
          key={i}
          onClick={() => Favorito(foto.id)}
          className="foto"
          style={{ backgroundImage: `url(${foto.src})` }}
        >

          <Heart filled={foto.favorite} />
          <p>{foto.description}</p>
        </div>
      ))}
    </div>
  );
}
