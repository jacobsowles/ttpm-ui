import React from 'react';
import './page-header.scss';

const PageHeader = props => {
    return (
        <div className="page-header">
            {props.children}
        </div>
    );
};

export default PageHeader;
