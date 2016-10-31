import React, { Component, PropTypes } from 'react';
require('./dropdown-menu-items.scss');

class DropdownMenuItems extends Component {
    render() {
        if (this.props.isVisible) {
            return (
                <div className="tt-dropdown-menu-items">
                    {this.props.children}
                </div>
            );
        }

        return null;
    }
}

DropdownMenuItems.PropTypes = {
    isVisible: PropTypes.bool.isRequired
};

export default DropdownMenuItems;
