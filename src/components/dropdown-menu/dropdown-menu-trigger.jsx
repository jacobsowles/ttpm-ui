import React, { Component, PropTypes } from 'react';
require('./dropdown-menu-trigger.scss');

class DropdownMenuTrigger extends Component {
    render() {
        return (
            <div
                className="tt-dropdown-menu-trigger"
                onClick={this.props.handleClick}
            >
                {this.props.children}
            </div>
        );
    }
}

DropdownMenuTrigger.PropTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    handleClick: PropTypes.func.isRequired
};

DropdownMenuTrigger.defaultProps = {
    id: '',
    className: ''
};

export default DropdownMenuTrigger;
