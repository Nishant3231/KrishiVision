import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';

export default function About() {
    return (
        <div>
            <Navbar/>
            <div>
            <p>hello, this is our app</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et 
                malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                </div>
            <h2>
         <Link href="/">Back to home</Link>
         </h2>
        </div>
    )
}