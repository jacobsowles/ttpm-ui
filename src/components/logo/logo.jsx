import React from 'react';
import './logo.scss';

const Logo = _props => {
    let { theme, ...props } = _props;
    theme = !theme ? 'light' : theme;

    return (
        <div className={`logo logo--${theme}`} {...props}>
            <figure />
            <a href="/" title="Home">&ensp;productivity manager</a>
        </div>
    );
};

export default Logo;
