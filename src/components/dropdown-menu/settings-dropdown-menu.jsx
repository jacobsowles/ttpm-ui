import React, { Component, PropTypes } from 'react';
import ActionIconDropdownMenu from '~/dropdown-menu/action-icon-dropdown-menu';

class SettingsDropdownMenu extends Component {
    render() {
        return (
            <ActionIconDropdownMenu
                glyph="gear"
                tooltip={this.props.tooltip}
            >
                {this.props.children}
            </ActionIconDropdownMenu>
        );
    }
}

SettingsDropdownMenu.propTypes = {
    tooltip: PropTypes.string
};

SettingsDropdownMenu.defaultProps = {
    tooltip: 'settings'
};

export default SettingsDropdownMenu;
