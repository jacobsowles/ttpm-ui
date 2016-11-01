import React, { Component, PropTypes } from 'react';
import ActionIcon from '~/icons/action-icon';
import DropdownMenu from '~/dropdown-menu/dropdown-menu';
import DropdownMenuTrigger from '~/dropdown-menu/dropdown-menu-trigger';

class ActionIconDropdownMenu extends Component {

    render() {
        return (
            <DropdownMenu pixelsFromRightEdge={this.props.pixelsFromRightEdge}>
                <DropdownMenuTrigger>
                    <ActionIcon
                        glyph={this.props.glyph}
                        tooltip={this.props.tooltip}
                    />
                </DropdownMenuTrigger>

                {this.props.children}
            </DropdownMenu>
        );
    }
}

ActionIconDropdownMenu.propTypes = {
    glyph: PropTypes.string.isRequired,
    pixelsFromRightEdge: PropTypes.number,
    tooltip: PropTypes.string.isRequired
};

export default ActionIconDropdownMenu;
