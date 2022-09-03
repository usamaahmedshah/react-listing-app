import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header-section'>
      <div className='hero-text'>
        <span className='hero-text-title'>Marketplace</span>
        <span className='hero-text-subtitle'>Property Listing</span>
      </div>
      <img
        className='hero-img'
        src='https://images.pexels.com/photos/5686514/pexels-photo-5686514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='img-1'
      />
    </div>
  );
}

export default Header;
