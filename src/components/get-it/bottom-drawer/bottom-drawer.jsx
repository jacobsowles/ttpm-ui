// npm modules
import React from 'react';

const styles = {
    active: {
        display: 'inherit'
    },
    inactive: {
        display: 'none'
    }
};

class BottomDrawer extends React.Component {

    constructor() {
        super();

        this.state = {
            active: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const stateStyle = this.state.active ? styles.active : styles.inactive;

        return (
            <div id="bottom-drawer">
                <div className="drawer" style={stateStyle}>
                    <img src="https://pbs.twimg.com/profile_images/588437976742502400/qwi6wY5t.jpg" width="200" style={{ marginRight: '20px' }} />
                    <img src="https://pbs.twimg.com/profile_images/588437976742502400/qwi6wY5t.jpg" width="200" style={{ marginRight: '20px' }} />
                    <img src="https://pbs.twimg.com/profile_images/588437976742502400/qwi6wY5t.jpg" width="200" style={{ marginRight: '20px' }} />
                    <img src="https://pbs.twimg.com/profile_images/588437976742502400/qwi6wY5t.jpg" width="200" style={{ marginRight: '20px' }} />
                    <img src="https://pbs.twimg.com/profile_images/588437976742502400/qwi6wY5t.jpg" width="200" />
                </div>
                <div className="toggle-bar">
                    <a className="toggle" onClick={this.handleClick}>
                        <span className="toggle-button">☰</span>
                        Analytics
                    </a>
                </div>
            </div>
        );
    }
}

export default BottomDrawer;
