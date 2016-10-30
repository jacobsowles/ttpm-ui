import React, { Component, PropTypes } from 'react';
require('./action-icon.scss');

class ActionIcon extends Component {
    render() {
        return (
            <i
                className={`
                    tt-icon
                    tt-action-icon
                    fa fa-${this.props.glyph}
                    ${this.props.isInactive ? 'inactive' : ''}
                    ${this.props.className}
                `}
                data-toggle="tooltip"
                title={this.props.tooltip}
                onClick={this.props.handleClick}
            />
        );
    }
}

ActionIcon.propTypes = {
    className: PropTypes.string,
    glyph: PropTypes.string.isRequired,
    tooltip: PropTypes.string,

    handleClick: PropTypes.func
};

ActionIcon.defaultProps = {
    className: '',
    tooltip: '',

    handleClick: (event) => {}
};

export default ActionIcon;
