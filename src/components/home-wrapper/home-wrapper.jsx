import React from 'react';
import './home-wrapper.scss';

const HomeWrapper = props => {
    return (
        <div className="home-wrapper">
            {props.children}
        </div>
    );
};

export default HomeWrapper;
