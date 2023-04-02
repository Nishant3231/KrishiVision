import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
 

function LandingPageCards() {
  return (  
     <CardGroup>
      <Card style={{ width: 500 }}>
        <Card.Img variant="top" src="/FertilizerImg.jpg" width={200}
      height={300} alt="Card image" />
        <Card.Body>
          <Card.Title>Fertilizer Suggestion</Card.Title>
          <Card.Text>
          This page will take you to model that will suggest you which fertilizer to use based on your provided information.
          </Card.Text>
          <Button variant="primary" Link href='/fertilizer' >Click here</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/CropImg.jpg" width={200}
      height={300} alt="Card image"/>
        <Card.Body>
          <Card.Title>Crop Prediction</Card.Title>
          <Card.Text>
          This page will take you to model that will suggest you which Crop to grow based on your provided information.
          </Card.Text>
          <Button variant="primary" Link href='/crop' >Click here</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/diseaseImg.jpg" width={200}
      height={300} alt="Card image"/>
        <Card.Body>
          <Card.Title>Disease Prediction</Card.Title>
          <Card.Text>
          This page will take you to model that will predict the crop disease based on your provided information.
          </Card.Text>
          <Button variant="primary" Link href='/disease' >Click here</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
export default LandingPageCards;
