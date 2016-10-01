import React, { Component, PropTypes } from 'react';
import Label from './label';

class OrangeLabel extends Component {

    render() {
        return (
            <Label
                className="orange-label"
                text={this.props.text}
            />
        );
    }
}

OrangeLabel.PropTypes = {
    text: PropTypes.string.isRequired
};

export default OrangeLabel;
