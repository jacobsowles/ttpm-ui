import React from 'react';
import PropTypes from 'prop-types';

import './sidebar-module-header.scss';

const SidebarModuleHeader = _props => {
    const {children, className, ...props} = _props;

    return (
        <h6 className={`sidebar-module-header ${className}`.trim()} {...props}>
            {children}
        </h6>
    );
};

SidebarModuleHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

SidebarModuleHeader.defaultProps = {
    className: ''
};

module.exports = SidebarModuleHeader;
