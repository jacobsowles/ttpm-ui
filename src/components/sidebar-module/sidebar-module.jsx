import React from 'react';
import PropTypes from 'prop-types';

import SidebarModuleHeader from './sidebar-module-header';
import './sidebar-module.scss';

const SidebarModule = ({children, className, header, ...props}) => (
    <div className={`sidebar-module ${className}`.trim()} {...props}>
        {header && <SidebarModuleHeader>{header}</SidebarModuleHeader>}
        {children}
    </div>
);

SidebarModule.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    header: PropTypes.string
};

SidebarModule.defaultProps = {
    className: ''
};

module.exports = SidebarModule;
