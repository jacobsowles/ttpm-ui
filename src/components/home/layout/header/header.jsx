// npm modules
import React from 'React';

// styles
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                {this.props.children}
            </div>
        );
    }
}

export default Header;
