import React, { Component, PropTypes } from 'react';
require('./icon.scss');

class Icon extends Component {
    render() {
        return (
            <i
                className={`
                    tt-icon
                    fa fa-${this.props.glyph}
                    ${this.props.className}
                `}
                data-toggle="tooltip"
                title={this.props.tooltip}
            />
        );
    }
}

Icon.propTypes = {
    className: PropTypes.string,
    glyph: PropTypes.string.isRequired,
    tooltip: PropTypes.string
};

Icon.defaultProps = {
    className: '',
    tooltip: ''
};

export default Icon;
