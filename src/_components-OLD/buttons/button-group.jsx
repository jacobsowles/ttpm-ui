import React, { Component, PropTypes } from 'react';
require('./button-group.scss');

class ButtonGroup extends Component {

    render() {
        return (
            <div className="button-group">
                {this.props.children}
            </div>
        );
    }
}

export default ButtonGroup;
