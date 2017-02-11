import React from 'react';
import Alert from './alert';

require('./warning-alert.scss');

class WarningAlert extends React.Component {

    render() {
        return (
            <Alert
                className="warning-alert"
                {...this.props}
            />
        );
    }
}

export default WarningAlert;
