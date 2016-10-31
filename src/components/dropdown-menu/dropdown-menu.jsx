import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import DropdownMenuTrigger from './dropdown-menu-trigger';
import DropdownMenuItems from './dropdown-menu-items';
import DropdownMenuItem from './dropdown-menu-item';

require('./dropdown-menu.scss');

class DropdownMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.closeMenu = this.closeMenu.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTriggerToggle = this.handleTriggerToggle.bind(this);
        this.renderMenuItems = this.renderMenuItems.bind(this);
        this.renderTrigger = this.renderTrigger.bind(this);
        this.verifyChildType = this.verifyChildType.bind(this);
    }

    closeMenu() {
        this.setState({
            active: false
        });
    }

    handleKeyDown(e) {
        if (e.key == 'Escape') {
            this.closeMenu();
        }
    }

    handleTriggerToggle() {
        this.setState({
            active: !this.state.active
        });
    }

    renderMenuItems() {
        const items = [];

        React.Children.forEach(this.props.children, (child, key) => {
            if (child.type === DropdownMenuItem && this.verifyChildType(child)) {
                items.push(React.cloneElement(child, {
                    key: key,
                    closeMenu: this.closeMenu
                }));
            }
        });

        return items;
    }

    renderTrigger() {
        let trigger;

        React.Children.forEach(this.props.children, (child) => {
            if (child.type === DropdownMenuTrigger && this.verifyChildType(child)) {
                trigger = React.cloneElement(child, {
                    ref: 'trigger',
                    handleClick: this.handleTriggerToggle
                });
            }
        });

        return trigger;
    }

    verifyChildType(child) {
        const ok = child.type === DropdownMenuTrigger || child.type === DropdownMenuItem;

        if (!ok) {
            throw 'DropdownMenu only accepts two types of children: DropdownMenuTrigger and DropdownMenuItem';
        }

        return ok;
    }

    render() {
        return (
            <div
                className="tt-dropdown-menu"
                onKeyDown={this.handleKeyDown}
                onBlur={this.handleBlur}
            >
                {this.renderTrigger()}

                <DropdownMenuItems
                    ref="options"
                    isVisible={this.state.active}
                >
                    {this.renderMenuItems()}
                </DropdownMenuItems>
            </div>
        );
    }
}

export default DropdownMenu;
