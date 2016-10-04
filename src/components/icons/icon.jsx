import React, { Component, PropTypes } from 'react';

class Icon extends Component {

    render() {
        return (
            <i
                className={`fa fa-${this.props.glyph} ${this.props.className}`}
                onClick={this.props.handleClick}
            />
        );
    }
}

Icon.propTypes = {
    glyph: PropTypes.string.isRequired,
    className: PropTypes.string,
    handleClick: PropTypes.func
};

Icon.defaultProps = {
    className: '',
    handleClick: (event) => {}
};

export default Icon;
