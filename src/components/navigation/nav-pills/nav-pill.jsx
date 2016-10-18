import React, { Component, PropTypes } from 'react';

class NavPill extends Component {

    render() {
        return (
            <li
                role="presentation"
                className={this.props.isActive ? 'active' : ''}
            >
                {
                    this.props.isEnabled
                        ? <a onClick={this.props.handleClick}>{this.props.text}</a>
                        : <p>{this.props.text}</p>
                }
            </li>
        );
    }
}

NavPill.propTypes = {
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    isEnabled: PropTypes.bool,
    handleClick: PropTypes.func.isRequired
};

NavPill.defaultProps = {
    isEnabled: true
};

export default NavPill;
