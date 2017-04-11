import React, { Component, PropTypes } from 'react';
import SidebarModuleHeader from '../sidebar-module-header';

import './sidebar-module.scss';

class SidebarModule extends React.Component {
    render() {
        const {children, className, header, ...props} = this.props;

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
    }
}

SidebarModule.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    header: PropTypes.string
};

SidebarModule.defaultProps = {
    className: ''
};

module.exports = SidebarModule;
