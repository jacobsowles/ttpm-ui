import React from 'react';
import { connect } from 'react-redux';
import Modal from '~/modal/modal';

import Analytics from '~/home/analytics/analytics';
import DropdownMenuItem from '~/dropdown-menu/dropdown-menu-item';
import HamburgerDropdownMenu from '~/dropdown-menu/hamburger-dropdown-menu';
import Icon from '~/icons/icon';

import userActions from '@/actions/user-actions.js';

require('./user-controls.scss');

class UserControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            analyticsIsOpen: false
        };

        this.closeAnalytics = this.closeAnalytics.bind(this);
        this.openAnalytics = this.openAnalytics.bind(this);
    }

    closeAnalytics() {
        this.setState({
            analyticsIsOpen: false
        });
    }

    openAnalytics() {
        this.setState({
            analyticsIsOpen: true
        });
    }

    render() {
        return (
            <div className="user-controls">
                <HamburgerDropdownMenu pixelsFromRightEdge={4}>
                    <DropdownMenuItem>
                        <strong>{localStorage.getItem('username')}</strong>
                    </DropdownMenuItem>

                    <DropdownMenuItem handleClick={this.openAnalytics}>
                        <Icon glyph="area-chart" />
                        Analytics
                    </DropdownMenuItem>

                    <DropdownMenuItem handleClick={this.props.handleLogout}>
                        <Icon glyph="sign-out" />
                        Log out
                    </DropdownMenuItem>
                </HamburgerDropdownMenu>

                <Modal
                    isOpen={this.state.analyticsIsOpen}
                    handleClose={this.closeAnalytics}
                >
                    <Analytics />
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogout: function() {
            dispatch(userActions.logout()).then(() => {
                location.href = '/';
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserControls);
