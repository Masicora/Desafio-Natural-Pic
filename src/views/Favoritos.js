import Context from "../Context";
import { useContext } from "react";

export default function Favoritos() {
  // CONSUMO DE ESTADO CON CONTEXT
  const { fotos } = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos.filter((foto) => foto.favorite).map((foto, i) => (
          <img src={foto.src} alt="" key={i} />
        ))}

      </div>
    </div>
  );
}
