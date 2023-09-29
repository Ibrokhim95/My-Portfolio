import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    console.log("toogle");
  }

  const changeNav = () => {
    if(window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  
  const navOver = () => {
    const nav = document.getElementById("nav")
    nav.style.background = "#fff"
    nav.style.cursor = "pointer"
    nav.style.boxShadow = '4px 0 20px -5px rgba(0, 0, 0, 0.1)'
  }


  const navOut = () => {
    const nav = document.getElementById("nav")
    nav.style.background = "#f8f9fa"
    nav.style.boxShadow = ""
  }

  return (
    <div id='nav' className='navbar' scrollNav={scrollNav} style={{
      background: scrollNav ? '#fff' : '#f8f9fa',
      boxShadow: scrollNav ? '4px 0 20px -5px rgba(0, 0, 0, 0.1)' : '',
    }}
    onMouseOver={(e) => navOver()} onMouseOut={(e) => navOut()}>
      <div className="navMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='navMenuItem'>Home</Link>
        <Link activeClass='active' to='services' spy={true} smooth={true} offset={50} duration={500} className='navMenuItem'>Services</Link>
        <Link  activeClass='active' to='about' spy={true} smooth={true} offset={10} duration={500} className='navMenuItem'>About</Link>
        <Link to='intro' smooth={true} className="logo">Me.</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} className='navMenuItem'>Portfolio</Link>
        <Link activeClass='active' to='client' spy={true} smooth={true} offset={-150} duration={500} className='navMenuItem'>Client</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='navMenuItem'>Contact</Link>
      </div>

      <div className="navbarMobile">
        <Link to='intro' smooth={true} spy={true} offset={-100} className="logo">Me.</Link>

        <FaBars onClick={() => toggle()} className='icon'/>
      </div>

      <div className="overlay" style={{
        height: isOpen ? "200vh" : "0"
      }}>
      </div>

        <div className="sidebar" style={{
        width: isOpen ? "300px" : "0",
        paddingInline: isOpen ? "20px" : "0",
      }}>
        <FaTimes onClick={() => toggle()} className='icon'/>

        <Link onClick={() => toggle()} activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='navMenuItem'>Home</Link>
        <Link onClick={() => toggle()} activeClass='active' to='services' spy={true} smooth={true} offset={50} duration={500} className='navMenuItem'>Services</Link>
        <Link onClick={() => toggle()} activeClass='active' to='about' spy={true} smooth={true} offset={150} duration={500} className='navMenuItem'>About</Link>
        <Link onClick={() => toggle()} activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} className='navMenuItem'>Portfolio</Link>
        <Link onClick={() => toggle()} activeClass='active' to='client' spy={true} smooth={true} offset={-150} duration={500} className='navMenuItem'>Client</Link>
        <Link onClick={() => toggle()} activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='navMenuItem'>Contact</Link>
          </div>
        </div>

  )
}


export default Navbar
