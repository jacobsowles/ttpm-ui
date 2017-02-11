import React, { Component, PropTypes } from 'react';
require('./dropdown-menu-items.scss');

class DropdownMenuItems extends Component {
    render() {
        if (this.props.isVisible) {
            return (
                <div
                    className="tt-dropdown-menu-items"
                    style={{'right': this.props.pixelsFromRightEdge}}
                >
                    {this.props.children}
                </div>
            );
        }

        return null;
    }
}

DropdownMenuItems.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    pixelsFromRightEdge: PropTypes.number.isRequired
};

export default DropdownMenuItems;
