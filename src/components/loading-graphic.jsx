import React from 'react';

const styles = {
    loadingGraphic: {
        background: 'url("/assets/images/spinner.gif")',
        backgroundPosition: 'center',
        backgroundSize: '20px',
        backgroundRepeat: 'no-repeat',
        margin: '10px 0',
        height: '20px',
        width: '100%',
        float: 'left'
    }
};

class LoadingGraphic extends React.Component {

    render() {
        console.log('showing loading graphic...');
        return (
            <div
                className="loading-graphic"
                style={styles.loadingGraphic}
            />
        );
    }
}

export default LoadingGraphic;
