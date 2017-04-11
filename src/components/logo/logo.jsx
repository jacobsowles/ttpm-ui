import React from 'react';
import './logo.scss';

const Logo = (props) => {
    let { theme, ..._props } = props;
    theme = !theme ? 'light' : theme;

    return (
        <div
            className={`logo logo--${theme}`}
            {..._props}
        >
            <figure />
            <a href="/" title="Home">&ensp;productivity manager</a>
        </div>
    );
};

export default Logo;
