import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Carousal/>
      </div>
      <div className='m-3'>
      <Card/>
      </div>
      <div className='contact1' style={{"width" : "70vw"}}>
        <Contact/>
      </div>
      <Footer />
    </div>
  )
}
