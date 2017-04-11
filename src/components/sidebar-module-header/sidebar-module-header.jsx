import React, { Component, PropTypes } from 'react';
import './sidebar-module-header.scss';

class SidebarModuleHeader extends React.Component {
    render() {
        const {children, className, ...props} = this.props;

        return (
            <h6 className={`sidebar-module-header ${className}`.trim()} {...props}>
                {children}
            </h6>
        );
    }
}

SidebarModuleHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

SidebarModuleHeader.defaultProps = {
    className: ''
};

module.exports = SidebarModuleHeader;
