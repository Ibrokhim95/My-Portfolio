import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import About from './components/About/About'
import Client from './components/Clients/Client'
import Contact from './components/Contact/Contact'
import Intro from './components/Intro/Intro'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Swipe from './components/Swipe/Swipe'

const App = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
  setTimeout(() => {
    setIsLoading(false)
  }, 1000)    

  }, [])
  
  if(isLoading) {
    return <Loader/>
  }

  return (
    <div>
      <Navbar/>
      <Intro/>
      <Services/>
      <About/>
      <Portfolio/>
      <Swipe/>
      <Client/>
      <Contact/>
    </div>
  )
}

export default App
