import React, { Component, PropTypes } from 'react';
import ActionIconDropdownMenu from './action-icon-dropdown-menu';

class SettingsDropdownMenu extends Component {
    render() {
        return (
            <ActionIconDropdownMenu
                glyph="gear"
                title={this.props.title}
                {...this.props}
            >
                {this.props.children}
            </ActionIconDropdownMenu>
        );
    }
}

SettingsDropdownMenu.defaultProps = {
    title: 'settings'
};

export default SettingsDropdownMenu;
