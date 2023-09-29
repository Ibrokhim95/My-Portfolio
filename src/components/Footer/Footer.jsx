import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="container">
            <div className="address">
                <h1>My Address</h1>
                <p>17 Sakhovat St. Akhsikent, Namangan, Uzbekistan</p>
            </div>

            <div className="follow">
                <h1>Follow Me</h1>
                <div className="links">
                    <a href="https://twitter.com/i_hamraev95" target={"_blank"} ><FaTwitter/></a>
                    <a href="https://www.facebook.com/profile.php?id=100068643047309" target={"_blank"} ><FaFacebookF/></a>
                    <a href="https://www.instagram.com/i.hamraev0095/" target={"_blank"} ><FaInstagram/></a>
                    <a href="https://t.me/Ibrohim_Hamraev95" target={"_blank"} ><FaTelegram/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
