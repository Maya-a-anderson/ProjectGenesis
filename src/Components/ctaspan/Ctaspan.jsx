import React from 'react'
import "./ctaspan.css"


const Ctaspan = ({FullName,Flair,Title,Avatar}) => {
  return (
    /*Background*/
    <div className='ctaspan__wrapper'>
        <div className='ctaspan__avatar'>
            <img src={Avatar} alt="" />
        </div>

        {/* info section about developer  */}
        <div className='ctaspan__content'>
            <div className='ctaspan__content-name'>
                {FullName}
            </div>
            <div className='ctaspan__content-flair'>
                {Flair}
            </div>
            <div className='ctaspan__content-title'>
                {Title}
            </div>
        </div>

        {/* button which transfers user to developers portfolio */}
        <div className='ctaspan__button'>
            <button className='ctaspan__button-custom'> Get To Know Me</button>
        </div>

    </div>
  )
}

export default Ctaspan