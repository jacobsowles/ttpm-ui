import React, { Component, PropTypes } from 'react';
import ActionIconDropdownMenu from './action-icon-dropdown-menu';

class SettingsDropdownMenu extends Component {
    render() {
        return (
            <ActionIconDropdownMenu
                glyph="gear"
                {...this.props}
            >
                {this.props.children}
            </ActionIconDropdownMenu>
        );
    }
}

SettingsDropdownMenu.defaultProps = {
    tooltip: 'settings'
};

export default SettingsDropdownMenu;
