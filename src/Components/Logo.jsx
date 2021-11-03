import React from 'react';
import LogoImg from '../assets/LogoImg.svg';
import './LogoImg.css'

function Logo() {
    return (
      <div className="d-flex justify-content-center">
        <img className="logo-img" src={ LogoImg } alt="logo"/>
      </div>
    )
}

export default Logo;