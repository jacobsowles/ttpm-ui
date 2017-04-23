import React from 'react';
import ReactDropdownMenu from 'react-dd-menu';

import './dropdown-menu.scss';

const DropdownMenu = props => {
    return (
        <ReactDropdownMenu className="dropdown-menu" {...props} />
    );
};

export default DropdownMenu;
