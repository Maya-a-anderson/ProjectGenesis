import React from 'react'
import './developers.css';
import Ctaspan from '../../Components/ctaspan/Ctaspan';
import Avatar from "../../assets/Avatar.svg"

const Developers = () => {
  return (
    <div className='developers section__padding'>
      <div className='developers__heading'>
        <h1>Meet The Developers</h1>
      </div>
      <br/>
      <div className='developers__cta'>
        <Ctaspan 
        FullName={"Rick Flair"} 
        Flair={"I got the drip, been in the business for 25 years."}
        Title={"Professional Drip Engineer"} 
        Avatar={Avatar}
        />
        <Ctaspan/>
        <Ctaspan/>
      </div>

    </div>
  )
}

export default Developers