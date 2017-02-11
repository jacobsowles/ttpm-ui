import React, { Component, PropTypes } from 'react';
import LoadingGraphic from './loading-graphic';

class LoadingWrapper extends Component {

    render() {
        return (
            <span className="loading-wrapper">

            {
                this.props.showLoadingGraphic
                    ? <LoadingGraphic className={this.props.isInline ? 'inline' : ''} />
                    : this.props.children
            }

            </span>
        );
    }
}

LoadingWrapper.propTypes = {
    isInline: PropTypes.bool,
    showLoadingGraphic: PropTypes.bool.isRequired
};

LoadingWrapper.defaultProps = {
    isInline: false
};

export default LoadingWrapper;
