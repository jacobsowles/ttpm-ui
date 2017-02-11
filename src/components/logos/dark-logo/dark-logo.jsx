import React from 'react';
import Logo from '../logo';

import './dark-logo.scss';

const DarkLogo = (props) => {
    return (
        <Logo
            theme="dark"
            {...props}
        />
    );
};

export default DarkLogo;
