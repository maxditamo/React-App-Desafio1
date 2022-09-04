import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


function BasicExample() {
  return (
    <Card className='cardProduct' style={{ width: '15rem' }}>
      <Card.Img variant="top" src="./img/bananaBar.jpg" />
      <Card.Body>
        <Card.Title className='cardTitle'>Banana Bar</Card.Title>
        <Card.Text className='cardText'>
          Barra de cereales combinada con banana, genjibre y un dulce aroma de castañas de caju.
        </Card.Text>
        <ItemCount/>
        <Button variant="primary" className='buttonCarrito' >Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;