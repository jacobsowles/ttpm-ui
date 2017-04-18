import React, { Component, PropTypes } from 'react';

import Logo from 'components/logo';
import './sidebar.scss';

const Sidebar = props => {
    return (
        <aside className="sidebar">
            <SidebarHeader />
            {props.children}
        </aside>
    );
};

Sidebar.propTypes = {
    children: function(props, propName, componentName) {
        const prop = props[propName];
        let result;

        React.Children.forEach(prop, function(child) {
            if (child.type.name !== 'SidebarModule') {
                result = new Error('`' + componentName + '` only accepts children of type `SidebarModule`.');
            }
        });

        return result;
    },

    className: PropTypes.string,
    header: PropTypes.node
};

Sidebar.defaultProps = {
    className: ''
};

// Private Components

const SidebarHeader = props => {
    return (
        <header className="sidebar-header">
            <Logo theme="light" />
        </header>
    );
};

SidebarHeader.propTypes = {
};

module.exports = Sidebar;
