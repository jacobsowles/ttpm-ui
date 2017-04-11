import React, { Component, PropTypes } from 'react';
import SidebarHeader from '../sidebar-header';

import './sidebar.scss';

class Sidebar extends Component {
    render() {
        const {children, className, header, ...props} = this.props;

        return (
            <aside className={`sidebar ${className}`.trim()} {...props}>
                {
                    header
                        ? <SidebarHeader>{header}</SidebarHeader>
                        : null
                }

                {children}
            </aside>
        );
    }
}

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

module.exports = Sidebar;
