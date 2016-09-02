// npm modules
import React from 'React';

// styles
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <a href="/" id="logo" title="Home">
                    <img src="/assets/images/tt-logo.png" alt="Logo" height="50" />
                    <span id="logo-text">PROJECT MANAGER</span>
                </a>
            </div>
        );
    }
}

export default Header;
