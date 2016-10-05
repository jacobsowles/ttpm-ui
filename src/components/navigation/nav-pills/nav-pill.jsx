import React, { Component, PropTypes } from 'react';

class NavPill extends Component {

    render() {
        return (
            <li
                role="presentation"
                className={this.props.isActive ? 'active' : ''}
            >
                <a onClick={this.props.handleClick}>{this.props.text}</a>
            </li>
        );
    }
}

NavPill.propTypes = {
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default NavPill;
