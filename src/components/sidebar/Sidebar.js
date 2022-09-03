import React from 'react';
import './Sidebar.css';

function SideBar() {
  return (
    <div className='sidebar-section'>
      <div className='sidebar-subsection'>
        <span className='sidebar-title'>about me</span>
        <img
          className='sidebar-img'
          alt='sidebar-img'
          src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className='sidebar-subsection'>
        <span className='sidebar-title'>categories</span>
        <ul className='sidebar-categories'>
          <li className='sidebar-category'>Buy</li>
          <li className='sidebar-category'>Sell</li>
          <li className='sidebar-category'>Rent</li>
          <li className='sidebar-category'>Hostel</li>
          <li className='sidebar-category'>B & B</li>
          <li className='sidebar-category'>Hotels</li>
        </ul>
      </div>
      <div className='sidebar-subsection'>
        <span className='sidebar-title'>Follow us</span>
        <div className='sidebar-social-icons'>
          <i className='sidebar-social-icon fa-brands fa-instagram'></i>
          <i className='sidebar-social-icon fa-brands fa-facebook'></i>
          <i className='sidebar-social-icon fa-brands fa-linkedin'></i>
          <i className='sidebar-social-icon fa-brands fa-twitter'></i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
