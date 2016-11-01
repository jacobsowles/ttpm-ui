import React, { Component, PropTypes } from 'react';
require('./notification.scss');

class Notification extends Component {

    render() {
        return (
            <div className={`notification ${this.props.type == 'SUCCESS' ? 'success' : 'error'}`}>
                {this.props.text}
            </div>
        );
    }
}

Notification.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Notification;
