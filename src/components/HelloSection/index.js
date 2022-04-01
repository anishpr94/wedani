import React, {Fragment} from 'React';
import TableExamplePagination from "./table";


function HelloSection()  {
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

export default HelloSection;
