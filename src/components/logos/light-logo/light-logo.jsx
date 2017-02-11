import React from 'React';
import Logo from '../logo';

import './light-logo.scss';

const LightLogo = ({props}) => {
    return (
        <Logo
            theme="light"
            {...props}
        />
    );
};

export default LightLogo;
