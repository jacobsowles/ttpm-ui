// npm modules
import React from 'React';

// styles
require('./logo.scss');

class Logo extends React.Component {
    render() {
        return (
            <div id="logo">
                <a href="/" title="Home">
                    <img src="/assets/images/tt-logo.png" alt="Logo" height="35" />
                    <span id="logo-text">PROJECT MANAGER</span>
                </a>
            </div>
        );
    }
}

export default Logo;
