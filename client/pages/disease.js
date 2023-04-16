import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import { resolve } from 'styled-jsx/css';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css'

export default function Disease() {

    const[baseImage , setBaseImage] = useState("")

   
    const uploadImage = async (e) => {
        const file = e.target.files[0]
    const base64 = await convertbase64(file);
    console.log(base64);
    setBaseImage(base64);
    };


    const convertbase64 = (file) => {
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);

            fileReader.onerror = (error) => {
                reject(error);
            }    
            }
        })
    }
  return (
    <div>
        <Navbar/>
        <div>
            <h1>Provide image of plant you want to test. </h1>
            <h1> We will predict which diseade your plant is suffering from. </h1>
            <div>
                <div>
                    <input type="file" placeholder="Enter the crop image" onChange={(e) => {uploadImage(e)}} />
                </div>
                <button>Predict</button>
            </div>
        </div>
        <h2>
        <Button variant="primary" Link href='/' className={styles.butt} >Back</Button>
      </h2>
      <br></br>
       <img src={baseImage} height={200} width={200}/>
    </div>
  )
}
