import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer  from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Testimonial from './components/Testimonial'

interface Props {
  
}

const App = (props: Props) => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Resume/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
