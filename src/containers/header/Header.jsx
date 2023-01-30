import React from 'react'
import './header.css';
import headerGraphic from '../../assets/headerGraphic.svg';
import HeroImage from '../../assets/HeroImage.svg';
import Frame from '../../assets/Frame.svg';



const Header = () => {
  return (
    <div className='header section__padding'>
      <img src={HeroImage} className='header__image' alt="HeroImage" />

      <div className='header__stack'>
        <div className='header__content'>
          <h1>What is Pseudo?</h1>
          <br className='header__content-break'/>
          <p>OURNAME is a site created by three university students to show off their projects and skills.</p>
        </div>
        
        <div className='header__graphic'>
        <img src={headerGraphic} alt="" />
        </div>

        <div className='header__frame vibrate-1'>
        <img src={Frame} alt="frame" />
        </div>
      </div>

      
      
      
     
      

    </div>
  )
}

export default Header