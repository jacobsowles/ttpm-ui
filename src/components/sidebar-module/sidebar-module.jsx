import React from 'react';
import PropTypes from 'prop-types';

import SidebarModuleHeader from './sidebar-module-header';
import './sidebar-module.scss';

const SidebarModule = _props => {
    const {children, className, header, ...props} = _props;

    return (
        <div className={`sidebar-module ${className}`.trim()} {...props}>
            {
                header
                    ? <SidebarModuleHeader>{header}</SidebarModuleHeader>
                    : null
            }

            {children}
        </div>
    );
};

SidebarModule.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    header: PropTypes.string
};

SidebarModule.defaultProps = {
    className: ''
};

module.exports = SidebarModule;
