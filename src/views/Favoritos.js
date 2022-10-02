import Context from "../Context";
import { useContext } from "react";

export default function Favoritos() {
  const { fotos } = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">

      </div>
    </div>
  );
}
