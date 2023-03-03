import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample({title, precio, text}) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0014/1962/products/product_hkce_combined_itemview_360x360.png?v=1651265861" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{precio}</Card.Subtitle>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;