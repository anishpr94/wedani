import React, {useState} from 'react';

import WishesItem from './WishesItem';
import {wishlist} from './wishlist-data';

const INTERVAL_SLIDE = 35000;

function WishesContainer() {

  const renderWishlist = () => {
    return wishlist.map((w, index) => <WishesItem key={index} {...w} />);
  };
  return (
    <div className="wrap-testimony">
      {renderWishlist()}
    </div>
  );
}

export default React.memo(WishesContainer);
