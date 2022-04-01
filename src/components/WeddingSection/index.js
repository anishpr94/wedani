import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Akad Nikah" time="08.00 WIB (Live di Instagram)" date="Sabtu, 03 Oktober 2020" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">The wedding</span>
              <h2 className="main-font main-font__wedding">24th April 2022</h2>
              <div className="event-wrap">
                <h2 className="main-font main-font__wedding">Location</h2>
              <iframe title="hi"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.1874789500757!2d74.73475571482592!3d13.338611090615892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb7708e8b0c9%3A0x1cbe072fc357c9a6!2sShamili!5e0!3m2!1sen!2sin!4v1648792452019!5m2!1sen!2sin"
     style={{border:0, height:500, width:500}} allowFullScreen="" loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"/>
              </div>
            </div>
          </div>
          <div className="row">
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Akad Nikah"
                  time="Akan dilaksanakan pagi hari "
                  date="Sabtu, 03 Oktober 2020"
                  description="Orange Ballroom <br/>HARRIS Hotel Sentraland, Semarang"
                />
                <WeddingInfoBox
                  title="Syukuran Pernikahan"
                  time="Sesuai jadwal undangan di e-ticket "
                  date="Sabtu, 03 Oktober 2020"
                  description="Orange Ballroom <br/>HARRIS Hotel Sentraland, Semarang"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
