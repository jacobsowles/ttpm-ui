// npm modules
import React from 'react';

// styles
const styles = {
    loadingGraphic: {
        background: 'url("/assets/images/spinner.gif")',
        backgroundPosition: 'center',
        backgroundSize: '20px',
        backgroundRepeat: 'no-repeat',
        margin: '10px 0',
        height: '20px'
    }
};

class LoadingGraphic extends React.Component {

    render() {
        return (
            <div
                className="loading-graphic"
                style={{
                    ...styles.loadingGraphic,
                    display: this.props.showLoadingGraphic ? 'inherit' : 'none'
                }}
            >
            </div>
        );
    }
}

LoadingGraphic.propTypes = {
    showLoadingGraphic: React.PropTypes.bool.isRequired
};

export default LoadingGraphic;
