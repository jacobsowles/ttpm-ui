// npm modules
import React from 'react';

// styles
require('./toggler.scss');

class Toggler extends React.Component {

    render() {
        return (
            <div className={`toggler toggler-${this.props.isVisible ? 'visible' : 'hidden'}`}>
                {this.props.children}
            </div>
        );
    }
}

Toggler.propTypes = {
    isVisible: React.PropTypes.bool.isRequired
};

export default Toggler;
