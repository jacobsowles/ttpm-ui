// npm modules
import React from 'React';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
