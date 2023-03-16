import Head from 'next/head'
import Image from 'next/image'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
    </div>
  )
}
