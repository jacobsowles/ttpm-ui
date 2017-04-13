import React from 'react';
import './display-wrapper.scss';

const DisplayWrapper = (props) => {
    return (
        <div className="display-wrapper">
            {props.children}
        </div>
    );
};

export default DisplayWrapper;
