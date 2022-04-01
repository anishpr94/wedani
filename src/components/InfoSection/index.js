import React from 'react';
import InfoContainer from './WishesContainer';

function InfoSection() {
  return (
    <div id="fh5co-testimonial">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Places to visit</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <InfoContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
