import React, { Component, PropTypes } from 'react';
require('./toggle-switch.scss');

class ToggleSwitch extends Component {
    render() {
        return (
            <div className="toggle-switch">
                <label className="switch">
                    <input type="checkbox" />
                    <div className="slider round"></div>
                </label>

                {this.props.children}
            </div>
        );
    }
}

ToggleSwitch.propTypes = {
};

export default ToggleSwitch;
