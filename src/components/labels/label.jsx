import React, { Component, PropTypes } from 'react';
require('./label.scss');

class Label extends Component {

    render() {
        return (
            <span className={`label ${this.props.className}`}>
                {this.props.text}
            </span>
        );
    }
}

Label.PropTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

Label.defaultProps = {
    className: ''
};

export default Label;
