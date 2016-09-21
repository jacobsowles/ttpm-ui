// npm modules
import React from 'react';
import { connect } from 'react-redux';

// actions
import userActions from '../../../actions/user-actions.js';

// styles
require('./user-controls.scss');

class UserControls extends React.Component {

    render() {
        return (
            <div id="user-controls">
                {localStorage.getItem('username')} |&nbsp;
                <a onClick={() => this.props.handleLogout()}>Log out</a>
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
