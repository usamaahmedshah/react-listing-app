import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Detail.css';
import ListingDetail from '../../components/listing-detail/ListingDetail';

function Detail() {
  return (
    <div className='detail-page'>
      <ListingDetail />
      <Sidebar />
    </div>
  );
}

export default Detail;
