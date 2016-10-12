import React, { Component, PropTypes } from 'react';
require('./alert.scss');

class Alert extends Component {

    render() {
        return (
            <div>
            {
                this.props.label == '' && this.props.text == ''
                    ? null
                    : (
                        <div className={`alert ${this.props.className}`}>
                            <strong>{this.props.label}</strong> {this.props.text}
                        </div>
                    )
            }
            </div>
        );
    }
}

Alert.propTypes = {
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
