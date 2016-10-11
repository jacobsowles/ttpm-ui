import React, { Component, PropTypes } from 'React';
require('./logo.scss');

class Logo extends Component {
    render() {
        return (
            <a
                href="/"
                title="Home"
                className={`logo ${this.props.className}`}
            >
                Productivity Manager
            </a>
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
