import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';


const ItemDetail = ( {item: {title, price, img, desc}} ) => {
    return (
        <Card className='cardProduct' style={{ width: '15rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='cardTitle'>{title}</Card.Title>
          <Card.Text className='cardText'>{desc} ${price}</Card.Text>
          <ItemCount/>
          <Button variant="primary" className='buttonCarrito' >Agregar al carrito</Button>
        </Card.Body>
      </Card>
    )
}

export default ItemDetail;
