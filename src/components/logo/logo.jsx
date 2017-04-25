import React from 'react';
import './logo.scss';

const Logo = ({ theme, ...props }) => (
    <div className={`logo logo--${theme}`} {...props}>
        <figure />
        <a href="/" title="Home">&ensp;productivity manager</a>
    </div>
);

Logo.defaultProps = {
    theme: 'light'
};

export default Logo;
