import React, { Component, PropTypes } from 'react';

class Button extends Component {

    render() {
        return (
            <button
                className={`btn ${this.props.className}`}
                value={this.props.value}
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
    handleClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    className: '',
    value: ''
};

export default Button;
