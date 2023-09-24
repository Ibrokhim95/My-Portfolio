import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
    
    window.alert = function(timeout=null) {
        const alert = document.createElement('div')
        const alertButton = document.createElement('button')
        alertButton.innerText = 'OK'
        alert.classList.add('alert')
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_vw2ckuw', 'template_8xdd11m', form.current, 'SC8uIuA22GYKiP_cC')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                alert('Email Sent ! (Elektron pochta yuborildi !)')
            }, (error) => {
                console.log(error.text);
            })
    }
  return (
    <div id='contact'>
        <div className="container">
            <h1>Contact Form</h1>

            <form action="" ref={form} onSubmit={sendEmail}>
                <input type="text" name="your_name" id="" className="name" placeholder='Your Name'/>
                <input type="email" name="your_email" id="" className="email" placeholder='Your Email'/>
                <textarea name="message" id="" rows="5" className='msg' placeholder='Your Message'></textarea>
                <button type="submit" value='Send' className="button">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
