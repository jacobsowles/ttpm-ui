import React, { Component, PropTypes } from 'react';
require('./dropdown-menu-item.scss');

class DropdownMenuItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick();
        this.props.closeMenu();
    }

    render() {
        return (
            <div
                className="tt-dropdown-menu-item"
                onClick={this.handleClick}
            >
                {this.props.children}
            </div>
        );
    }
}

DropdownMenuItem.propTypes = {
    closeMenu: PropTypes.func,
    handleClick: PropTypes.func
};

export default DropdownMenuItem;
