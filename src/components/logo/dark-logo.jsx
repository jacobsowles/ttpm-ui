import React from 'React';
import Logo from './logo';

require('./dark-logo.scss');

class DarkLogo extends React.Component {
    render() {
        return (
            <Logo className="dark" />
        );
    }
}

export default DarkLogo;
