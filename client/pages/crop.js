import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function CropP() {

    const[myData, setmydata] = useState([]);

    useEffect(() => {
        axios.get("")
        .then((res)=> setmydata(res.data));
    })
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <h1>Provide soil info. </h1>
            <h1> We will recommend you which crop you should grow. </h1>
            <div>
                <div>
                    <input type="number" placeholder="Enter potassiun value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter nitrogen value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter phosphorus value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter humidity value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter pH value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter rainfall value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter temperature value"/>
                </div>
                <button className='close'>Recommend</button>
            </div>
        </div>
        <h2>
        <Button variant="primary" Link href='/' className={styles.butt} >Back</Button>
      </h2>
    </div>
  )
}
