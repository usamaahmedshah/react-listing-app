import React from 'react';
import './TopBar.css';
import { NavLink } from 'react-router-dom';

function TopBar() {
  return (
    <div className='topbar'>
      <div className='topbar-left'>
        <i className='topbar-social-icon fa-brands fa-instagram'></i>
        <i className='topbar-social-icon fa-brands fa-facebook'></i>
        <i className='topbar-social-icon fa-brands fa-linkedin'></i>
        <i className='topbar-social-icon fa-brands fa-twitter'></i>
      </div>
      <div className='topbar-center'>
        <ul className='topbar-list'>
          <li className='topbar-list-item'>
            <NavLink to='/'>HOME</NavLink>
          </li>
          <li className='topbar-list-item'>ABOUT</li>
          <li className='topbar-list-item'>CONTACT</li>
          <li className='topbar-list-item'>
            <NavLink to='/create'>CREATE PROPERTY</NavLink>
          </li>
          <li className='topbar-list-item'>LOGOUT</li>
        </ul>
      </div>
      <div className='topbar-right'>
        <img
          className='topbar-profile-pic'
          src='https://images.pexels.com/photos/3508236/pexels-photo-3508236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='topbar profile'
        />
        <i className='topbar-search fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
}

export default TopBar;
