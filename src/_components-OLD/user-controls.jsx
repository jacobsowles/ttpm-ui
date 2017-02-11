import React from 'react';
import { connect } from 'react-redux';

import DropdownMenuItem from '~/dropdown-menu/dropdown-menu-item';
import SettingsDropdownMenu from '~/dropdown-menu/settings-dropdown-menu';

import userActions from '@/actions/user-actions.js';

class UserControls extends React.Component {

    render() {
        return (
            <SettingsDropdownMenu pixelsFromRightEdge={4}>
                <DropdownMenuItem>
                    <strong>{localStorage.getItem('username')}</strong>
                </DropdownMenuItem>

                <DropdownMenuItem handleClick={this.props.handleLogout}>
                    Log out
                </DropdownMenuItem>
            </SettingsDropdownMenu>
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
