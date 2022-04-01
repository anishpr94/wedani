import React from 'react';

import {ItemExampleDescriptions} from './WishesItem';

const INTERVAL_SLIDE = 35000;

function EatContainer() {
  return (
    <div className="wrap-testimony">
      <ItemExampleDescriptions/>
    </div>
  );
}

export default React.memo(EatContainer);
