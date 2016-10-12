import React from 'react';
import Message from './message';

require('./error-message.scss');

class ErrorMessage extends React.Component {

    render() {
        return (
            <Message
                {...this.props}
                className={`error-message ${this.props.className}`}
            />
        );
    }
}

export default ErrorMessage;
