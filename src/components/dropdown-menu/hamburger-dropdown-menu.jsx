import React, { Component, PropTypes } from 'react';
import ActionIconDropdownMenu from './action-icon-dropdown-menu';

class HamburgerDropdownMenu extends Component {
    render() {
        return (
            <ActionIconDropdownMenu
                glyph="bars"
                {...this.props}
            >
                {this.props.children}
            </ActionIconDropdownMenu>
        );
    }
}

HamburgerDropdownMenu.defaultProps = {
    tooltip: ''
};

export default HamburgerDropdownMenu;
