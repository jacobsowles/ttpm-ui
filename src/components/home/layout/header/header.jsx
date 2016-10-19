// npm modules
import React from 'React';

// styles
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <header>
                {this.props.children}
            </header>
        );
    }
}

export default Header;
