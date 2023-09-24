import React from 'react'
import './About.css'
import img from '../../assets/elek.png'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div id='about'>
      <div className="container">
        <h1>About Me</h1>

        <div className='aboutGrid'>
            <div className='aboutFlex'>
                <div className='flexDiv'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
                </div>
                <div className="img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='gridDiv'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
                <Link to='contact' smooth={true} className="button">Contact Me</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
