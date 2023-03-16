import React from 'react'
import Navbar from '../components/Navbar'

export default function Fertilizer() {
  return (
    <div>
        <Navbar/>
        <div>
            <h1>Provide soil info and plant you want to grow. </h1>
            <h1> We will recommend you which fertilizer you should use. </h1>
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
    </div>
  )
}
