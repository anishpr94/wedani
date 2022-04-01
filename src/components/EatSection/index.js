import React from 'react';
import EatContainer from './WishesContainer';

function EatSection() {
  return (
    <div id="fh5co-testimonial">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Food worth trying!</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <EatContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EatSection;
