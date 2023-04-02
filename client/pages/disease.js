import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';

export default function Disease() {
  return (
    <div>
        <Navbar/>
        <div>
            <h1>Provide image of plant you want to test. </h1>
            <h1> We will predict which diseade your plant is suffering from. </h1>
            <div>
                <div>
                    <input type="number" placeholder="Enter nitrogen value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter phosphorous value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter potassium value"/>
                </div>
                <div>
                    <input type="image" placeholder="Enter the crop image"/>
                </div>
                <button>Predict</button>
            </div>
        </div>
        <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  )
}
