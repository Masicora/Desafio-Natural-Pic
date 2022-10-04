import Context from "../Context";
import { useContext } from "react";

export default function Favoritos() {
  const { fotos, setFotos } = useContext(Context);

  const borrar = (id) => {
    const indice = fotos.findIndex((f) => f.id === id);
    fotos.splice(indice, 1);
    setFotos([...fotos]);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos
          .filter((foto) => foto.favorite)
          .map((foto, i) => (
            <img src={foto.src} alt="" onClick={() => borrar(foto.id)} key={i} />
          ))}

      </div>
    </div>
  );
}
