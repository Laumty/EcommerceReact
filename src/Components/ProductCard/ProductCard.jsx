import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample({title, price, text}) {
  return (
    <Card style={{ width: '20rem', marginTop:"1rem", marginBottom:"1rem"}}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;