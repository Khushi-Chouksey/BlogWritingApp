import React from 'react'
import LogoImage from '../assets/LogoImage.png';

function Logo({width = '100px'}) {
  return (
    // <div>
    //   <img src={LogoForApp} alt='Logo'/>
    // </div>

    <div className="flex items-center justify-center">
    <img src={LogoImage} alt="Logo" className="w-14 h-14" /> {/* Adjust size as needed */}
    {/* <span className="text-lg font-bold ml-2">Your Company Name</span> Adjust font size, weight, and margin as needed */}
  </div>
  )
}

export default Logo