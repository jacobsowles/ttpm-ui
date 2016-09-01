import React from 'React';
import { Link } from 'react-router';

class Greeting extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 content">
                    <h1>Fly, you fools.</h1>
                    <p><Link to="/get-it">Get it.</Link></p>
                </div>
            </div>
        );
    }
}

export default Greeting;
