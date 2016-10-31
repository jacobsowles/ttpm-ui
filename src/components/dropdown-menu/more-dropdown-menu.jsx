import React, { Component, PropTypes } from 'react';
import ActionIconDropdownMenu from '~/dropdown-menu/action-icon-dropdown-menu';

class MoreDropdownMenu extends Component {
    render() {
        return (
            <ActionIconDropdownMenu
                glyph="ellipsis-h"
                tooltip={this.props.tooltip}
            >
                {this.props.children}
            </ActionIconDropdownMenu>
        );
    }
}

MoreDropdownMenu.propTypes = {
    tooltip: PropTypes.string
};

MoreDropdownMenu.defaultProps = {
    tooltip: 'more'
};

export default MoreDropdownMenu;
