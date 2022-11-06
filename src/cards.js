import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default function BasicExample() {


  return (
    <Card style={{ width: '18rem',border:'0px' }}>
      
      <Card.Body class={'justify-content-center'}>
        <Card.Title ><h3>Best Of Eelectronics</h3></Card.Title><br />
        <Button variant="primary" >View All</Button>
        <Card.Img variant="bottom" src="https://cdn.pixabay.com/photo/2017/05/21/17/21/headphones-2331787__340.jpg" />
      </Card.Body>
    </Card>
  );
  
}


