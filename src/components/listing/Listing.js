import React from 'react';
import Listingitem from '../listing-item/Listingitem';
import './Listing.css';

function Listing() {
  return (
    <div className='listing-section'>
      <Listingitem />
      <Listingitem />
      <Listingitem />
      <Listingitem />
      <Listingitem />
      <Listingitem />
    </div>
  );
}

export default Listing;
