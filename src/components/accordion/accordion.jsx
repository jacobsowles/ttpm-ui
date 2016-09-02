// npm modules
import React from 'react';

// styles
require('./accordion.scss');

class Accordion extends React.Component {

    render() {
        return (
            <div className="accordion">
                {this.props.children}
            </div>
        );
    }
}

export default Accordion;
