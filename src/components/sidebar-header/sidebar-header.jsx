import React, { Component, PropTypes } from 'react';
import './sidebar-header.scss';

class SidebarHeader extends React.Component {
    render() {
        const {children, className, ...props} = this.props;

        return (
            <header className={`sidebar-header ${className}`.trim()} {...props}>
                {children}
            </header>
        );
    }
}

SidebarHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

SidebarHeader.defaultProps = {
    className: ''
};

module.exports = SidebarHeader;
