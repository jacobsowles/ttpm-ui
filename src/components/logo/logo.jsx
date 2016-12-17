import React, { Component, PropTypes } from 'React';

class Logo extends Component {
    render() {
        return (
            <div className={`logo logo--${this.props.theme}`}>
                <figure />
                <a href="/" title="Home">&ensp;Productivity Manager</a>
            </div>
        );
    }
}

Logo.propTypes = {
    theme: PropTypes.string
};

Logo.defaultProps = {
    theme: 'light'
};

export default Logo;
