import React, { Component, PropTypes } from 'react';
import ToggleSwitch from '~/toggle-switch/toggle-switch';

class StatusFilterCollection extends Component {
    render() {
        return (
            <div className="status-filter-collection">
                <ToggleSwitch>completed</ToggleSwitch>
                <ToggleSwitch>blocked</ToggleSwitch>
                <ToggleSwitch>delegated</ToggleSwitch>
            </div>
        );
    }
}

StatusFilterCollection.propTypes = {
};

export default StatusFilterCollection;
