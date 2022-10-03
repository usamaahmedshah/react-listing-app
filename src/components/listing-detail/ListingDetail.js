import React from 'react';
import './ListingDetail.css';

function ListingDetail() {
  return (
    <div className='listing-detail'>
      <div className='listing-detail-content'>
        <img
          className='listing-detail-img'
          src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='img'
        />
        <h1 className='listing-detail-title'>
          Awesome property
          <div className='listing-detail-action'>
            <i class='listing-detail-action-icon fa-solid fa-edit'></i>
            <i class='listing-detail-action-icon fa-solid fa-trash-alt'></i>
          </div>
        </h1>
        <div className='listing-detail-meta-info'>
          <span className='listing-detail-author'>
            Author - <strong>John Doe</strong>
          </span>
          <span className='listing-detail-time'>1 day ago</span>
        </div>
        <p className='listing-detail-description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
}

export default ListingDetail;
