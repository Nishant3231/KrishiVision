import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function CropP() {

    const[myData, setMyData] = useState("");
    const data = {};
    const recommend = () => {
        axios.post("http://localhost:5000/predict/crop-recommendation" , data)
        .then((res)=> setMyData(res.data.prediction))
        .catch(err => console.log(err))
    }

    const handleChange= (e) =>{
        data[e.target.name] = e.target.value
    }

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
                    <input type="number" name="k" placeholder="Enter potassiun value" onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type="number" name="n" placeholder="Enter nitrogen value" onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type="number" name="p" placeholder="Enter phosphorus value" onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type="number" name="humidity" placeholder="Enter humidity value" onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type="number" name="ph" placeholder="Enter pH value" onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type="number" name="rainfall" placeholder="Enter rainfall value" onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type="number" name="temp" placeholder="Enter temperature value" onChange={e => handleChange(e)}/>
                </div>
                <button className='close' onClick={recommend}>Recommend</button>
            </div>
        </div>
        <div>{myData}</div>
        <h2>
        <Button variant="primary" Link href='/' className={styles.butt} >Back</Button>
      </h2>
    </div>
  )
}
