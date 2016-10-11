import React, { Component, PropTypes } from 'react';
require('./alert.scss');

class Alert extends Component {

    render() {
        return (
            <div className={`alert ${this.props.className}`}>
                <strong>{this.props.label}</strong> {this.props.text}
            </div>
        );
    }
}

Alert.PropTypes = {
    label: PropTypes.string,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

Alert.defaultProps = {
    label: '',
    text: '',
    className: ''
};

export default Alert;
