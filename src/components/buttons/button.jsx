import React from 'react';

class Button extends React.Component {

    render() {
        return (
            <button
                className={`btn ${this.props.className}`}
                onClick={this.props.handleClick}
            >
                {this.props.text}
            </button>
        );
    }
}

Button.PropTypes = {
    text: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    handleClick: React.PropTypes.func.isRequired
};

Button.defaultProps = {
    className: ''
};

export default Button;
