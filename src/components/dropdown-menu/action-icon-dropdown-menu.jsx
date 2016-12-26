import React, { Component, PropTypes } from 'react';
import { Icon } from 'react-building-blocks';
import DropdownMenu from '~/dropdown-menu/dropdown-menu';
import DropdownMenuTrigger from '~/dropdown-menu/dropdown-menu-trigger';

class ActionIconDropdownMenu extends Component {
    render() {
        return (
            <DropdownMenu pixelsFromRightEdge={this.props.pixelsFromRightEdge}>
                <DropdownMenuTrigger>
                    <Icon
                        glyph={this.props.glyph}
                        title={this.props.title}
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
    title: PropTypes.string.isRequired
};

export default ActionIconDropdownMenu;
