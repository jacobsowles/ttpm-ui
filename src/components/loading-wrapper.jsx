import React, { Component, PropTypes } from 'react';
import LoadingGraphic from './loading-graphic';

class LoadingWrapper extends Component {

    render() {
        return (
            <div className="loading-wrapper">
                {
                    this.props.showLoadingGraphic
                        ? <LoadingGraphic />
                        : this.props.children
                }
            </div>
        );
    }
}

LoadingWrapper.propTypes = {
    showLoadingGraphic: PropTypes.bool.isRequired
};

export default LoadingWrapper;
