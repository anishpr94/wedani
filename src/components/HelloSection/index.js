import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-dinda-2.jpg';
import Groom from '@assets/images/p-indra.jpg';

import { styWrapper } from './styles';
import BasicTable from "./table";

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? '03 Oktober 2020, HARRIS Hotel Sentraland, Semarang' : 'Sabtu, 03 Oktober 2020';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
         <BasicTable/>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
