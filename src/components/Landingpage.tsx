import React from 'react'
import Hero from './Hero'
import Menu from './Menu'
import Aboutus from './Aboutus'
import Footer from './Footer'

const Landingpage = () => {
  return (
    <div className='h-auto w-[100vw] overflow-hidden'>
        <Hero/>
        <Menu/>
        <Aboutus/>
        <Footer/>
    </div>
  )
}

export default Landingpage