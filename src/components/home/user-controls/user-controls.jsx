import React from 'react';
import { connect } from 'react-redux';
import DropdownMenuItem from '~/dropdown-menu/dropdown-menu-item';
import HamburgerDropdownMenu from '~/dropdown-menu/hamburger-dropdown-menu';

import userActions from '@/actions/user-actions.js';

require('./user-controls.scss');

class UserControls extends React.Component {

    render() {
        return (
            <div className="user-controls">
                <HamburgerDropdownMenu pixelsFromRightEdge={4}>
                    <DropdownMenuItem>
                        <strong>{localStorage.getItem('username')}</strong>
                    </DropdownMenuItem>

                    <DropdownMenuItem handleClick={this.props.handleLogout}>
                        Log out
                    </DropdownMenuItem>
                </HamburgerDropdownMenu>
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
