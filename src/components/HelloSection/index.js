import React, { Fragment } from 'React';
import { string } from 'prop-types';
import TableExamplePagination from "./table";


function HelloSection({ guestName }) {
    return (
        <Fragment>
            <div id="fh5co-couple">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2 className="main-font">{`Contact Details`}</h2>
                            <TableExamplePagination/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

HelloSection.propTypes = {
    guestName: string.isRequired,
};

export default HelloSection;
