import React from 'react';
import './Listingitem.css';
import { Link } from 'react-router-dom';

function Listingitem() {
  return (
    <div className='listing-item'>
      <img
        className='listing-img'
        src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='img'
      />
      <div className='listing-details'>
        <div className='listing-categories'>
          Categories
          <span className='listing-category'>Buy</span>
          <span className='listing-category'>Sell</span>
        </div>
        <Link to='/detail/1'>
          <span className='listing-title'>Awesome property</span>
        </Link>
        <hr />
        <span className='listing-time'>2 days ago</span>
      </div>
      <p className='listing-description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

export default Listingitem;
