import React, { Component, PropTypes } from 'react';
import ActionIconDropdownMenu from './action-icon-dropdown-menu';

class MoreDropdownMenu extends Component {
    render() {
        return (
            <ActionIconDropdownMenu
                glyph="ellipsis-h"
                title={this.props.title}
                {...this.props}
            >
                {this.props.children}
            </ActionIconDropdownMenu>
        );
    }
}

MoreDropdownMenu.defaultProps = {
    title: 'more'
};

export default MoreDropdownMenu;
