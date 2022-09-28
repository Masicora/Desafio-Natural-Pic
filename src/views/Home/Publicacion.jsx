import { Card } from "react-bootstrap";

export default function Publicacion({ publicacion }) {
  const { titulo, foto, descripcion, color } = publicacion;
  console.log(publicacion);
  return (
    <Card style={{ background: color }} className="text-dark">
      <Card.Img variant="top" src={foto} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}
