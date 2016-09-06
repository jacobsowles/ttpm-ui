// npm modules
import React from 'react';

// styles
require('./loading-graphic.scss');

class LoadingGraphic extends React.Component {

    render() {
        return (
            <div
                className="loading-graphic"
                style={{
                    display: this.props.showLoadingGraphic ? 'inherit' : 'none'
                }}>
            </div>
        );
    }
}

LoadingGraphic.propTypes = {
    showLoadingGraphic: React.PropTypes.bool.isRequired
};

export default LoadingGraphic;
