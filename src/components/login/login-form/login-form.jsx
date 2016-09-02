// npm modules
import React from 'react';

// styles
require('./login-form.scss');

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="login">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Get to work</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
