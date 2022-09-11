import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from "./ItemCount";




const Product = ({ title, img, price, desc}) => {
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
  
  );
};
export default Product;