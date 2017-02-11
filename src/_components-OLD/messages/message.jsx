import React, { Component, PropTypes } from 'react';
require('./message.scss');

class Message extends Component {

    render() {
        return (
            <span
                id={this.props.id}
                className={`message ${this.props.className}`}
            >
                {this.props.text}
            </span>
        );
    }
}

Message.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string
};

Message.defaultProps = {
    text: '',
    id: '',
    className: ''
};

export default Message;
