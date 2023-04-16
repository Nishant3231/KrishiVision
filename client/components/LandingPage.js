import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
 

function LandingPageCards() {
  return (  
    <div className={styles.main} >
      
     <CardGroup className={styles.cardgrpdiv}>
      <Card className={styles.indicard}>
        <Card.Img variant="top" src="/FertilizerImg.jpg" width={200}
      height={300} className={styles.indiimg} alt="Card image" />
        <Card.Body>
          <Card.Title>Fertilizer Suggestion</Card.Title>
          <Card.Text>
          This page will take you to model that will suggest you which fertilizer to use based on your provided information.
          </Card.Text>
          <Button variant="primary" className={styles.butt} Link href='/fertilizer' >Click here</Button>
        </Card.Body>
      </Card>
      <Card className={styles.indicard}>
        <Card.Img variant="top" src="/CropImg.jpg" width={200}
      height={300} className={styles.indiimg} alt="Card image"/>
        <Card.Body>
          <Card.Title>Crop Recommemdation</Card.Title>
          <Card.Text>
          This page will take you to model that will suggest you which Crop to grow based on your provided information.
          </Card.Text>
          <Button variant="primary" Link href='/crop' className={styles.butt} >Click here</Button>
        </Card.Body>
      </Card>
      <Card className={styles.indicard}>
        <Card.Img variant="top" src="/diseaseImg.jpg" width={200}
      height={300} className={styles.indiimg} alt="Card image"/>
        <Card.Body>
          <Card.Title>Disease Prediction</Card.Title>
          <Card.Text>
          This page will take you to model that will predict the crop disease based on your provided information.
          </Card.Text>
          <Button variant="primary" Link href='/disease' className={styles.butt} >Click here</Button>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}
export default LandingPageCards;
