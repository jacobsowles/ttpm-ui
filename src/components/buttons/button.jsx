import React, { Component, PropTypes } from 'react';
require('./button.scss');

class Button extends Component {

    render() {
        return (
            <button
                className={`btn ${this.props.className ? this.props.className : 'btn-primary'}`}
                value={this.props.value}
                disabled={this.props.isDisabled}
                onClick={(event) => this.props.handleClick(event)}
            >
                {this.props.text}
            </button>
        );
    }
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    isDisabled: PropTypes.bool,
    handleClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    value: '',
    isDisabled: false
};

export default Button;
