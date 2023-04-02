import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';

export default function CropP() {
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
                    <input type="number" placeholder="Enter nitrogen value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter phosphorous value"/>
                </div>
                <div>
                    <input type="number" placeholder="Enter potassium value"/>
                </div>
                <div>
                    <input type="text" placeholder="Enter the crop you want to grow"/>
                </div>
                <button>Recommend</button>
            </div>
        </div>
        <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  )
}
