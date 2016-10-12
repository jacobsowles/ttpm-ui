import React, { Component, PropTypes } from 'react';
require('./error-message.scss');

class ErrorMessage extends Component {

    render() {
        return (
            <span className={`error-message ${this.props.className}`}>
                {this.props.text}
            </span>
        );
    }
}

ErrorMessage.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
};

ErrorMessage.defaultProps = {
    text: '',
    className: ''
};

export default ErrorMessage;
