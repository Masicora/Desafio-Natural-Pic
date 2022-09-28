import { Container } from "react-bootstrap";
import { useContext } from "react";

import Context from "../../Context";

import Publicacion from "./Publicacion";

export default function Home() {
  const { publicaciones } = useContext(Context);

  return (
    <Container className="mt-5">
      <h1 className="pb-3">Publicaciones</h1>
      <div className="publicaciones row">
        {publicaciones.map((publicacion, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <Publicacion publicacion={publicacion} />
          </div>
        ))}
      </div>
    </Container>
  );
}
