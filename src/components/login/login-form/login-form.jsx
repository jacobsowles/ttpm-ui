// npm modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import loginFormActions from './login-form-actions.js';

// utils
import { isLoggedIn } from '../../../auth';

// styles
require('./login-form.scss');

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // TODO: Validate form
        this.props.login(
            this.refs.loginEmail.value,
            this.refs.loginPassword.value
        );
    }

    componentWillUpdate(nextProps, nextState) {
        if (isLoggedIn()) {
            window.location = '/';
        }
    }

    render() {
        return (
            <div id="login">
                <h2>Login</h2>

                <div className="form-group">
                    <input type="email" className="form-control" ref="loginEmail" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" ref="loginPassword" placeholder="Password" />
                </div>

                <div className="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                </div>

                <button className="btn btn-primary" onClick={this.handleSubmit}>Get to work</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.loginForm.isLoading,
        error: state.loginForm.error
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: loginFormActions.login
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
