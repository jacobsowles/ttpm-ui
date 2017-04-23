import React from 'react';
import './page-title.scss';

const PageTitle = props => {
    return (
        <h1 className="page-title">
            {props.children}
        </h1>
    );
};

export default PageTitle;
