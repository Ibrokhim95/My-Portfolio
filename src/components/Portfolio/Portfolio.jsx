import React from 'react'
import './Portfolio.css'
import cart from '../../assets/React cart.jpg'
import task from '../../assets/Task manaer.jpg'

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className="container">
        <h1>My Portfolio</h1>

        <div className="portfolioCards">
          <div className="portfolioCard">
            <div className="img">
              <img src={cart} alt="" />
            </div>
            <a className='a' href="https://react-cart-store.netlify.app/" target={'_blank'}>React Cart</a>
          </div>
          <div className="portfolioCard">
            <div className="img">
              <img src={task} alt="" />
            </div>

            <a className='a' href="https://task-manager-by-ikh.netlify.app/" target={'_blank'}>Task Manager</a>
          </div>
          <div className="portfolioCard">
            <div className="img">
              <img src={cart} alt="" />
            </div>
            <a className='a' href="https://react-cart-store.netlify.app/" target={'_blank'}>React Cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
