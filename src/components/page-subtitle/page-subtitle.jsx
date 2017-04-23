import React from 'react';
import './page-subtitle.scss';

const PageSubtitle = props => {
    return (
        <p className="page-subtitle">
            {props.children}
        </p>
    );
};

export default PageSubtitle;
