import React from 'react';
import Alert from './alert';

require('./error-alert.scss');

class ErrorAlert extends React.Component {

    render() {
        return (
            <Alert
                className="error-alert"
                {...this.props}
            />
        );
    }
}

export default ErrorAlert;
