import React, { Component, PropTypes } from 'React';
require('./logo.scss');

class Logo extends Component {
    render() {
        return (
            <div
                className={`logo ${this.props.className}`}
            >
                <span
                    id="logo"
                >
                </span>
                <a
                    href="/"
                    title="Home"
                >
                &ensp;Productivity Manager
                </a>
            </div>
        );
    }
}

Logo.propTypes = {
    className: PropTypes.string
};

Logo.defaultProps = {
    className: 'light'
};

export default Logo;
