import React, { Component, PropTypes } from 'react';
require('./loading-graphic.scss');

class LoadingGraphic extends Component {

    render() {
        return (
            <div className={`loading-graphic ${this.props.className}`} />
        );
    }
}

LoadingGraphic.propTypes = {
    className: PropTypes.string
};

LoadingGraphic.defaultProps = {
    className: ''
};

export default LoadingGraphic;
