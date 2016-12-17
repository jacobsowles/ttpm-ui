import React from 'React';
import Logo from './logo';

class DarkLogo extends React.Component {
    render() {
        return (
            <Logo
                theme="dark"
                {...this.props}
            />
        );
    }
}

export default DarkLogo;
