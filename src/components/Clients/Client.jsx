import React from 'react'
import './Client.css'
import logo1 from '../../assets/logo_1.jpg'
import logo2 from '../../assets/logo_2.jpg'
import logo3 from '../../assets/logo_3.jpg'
import logo4 from '../../assets/logo_4.jpg'
import logo5 from '../../assets/logo_5.jpg'
import logo6 from '../../assets/logo_6.jpg'

const Client = () => {
  return (
    <div id='client'>
      <div className="container">
        <h1>Clients</h1>

        <div className="flex">
            <div>
                <img src={logo1} alt="" />
            </div>
            <div>
                <img src={logo2} alt="" />
            </div>
            <div>
                <img src={logo3} alt="" />
            </div>
            <div>
                <img src={logo4} alt="" />
            </div>
            <div>
                <img src={logo5} alt="" />
            </div>
            <div>
                <img src={logo6} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Client
