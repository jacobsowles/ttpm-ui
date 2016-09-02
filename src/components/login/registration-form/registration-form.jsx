// npm modules
import React from 'react';

// styles
require('./registration-form.scss');

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="register">
                <h2>Register</h2>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Join the fray</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
