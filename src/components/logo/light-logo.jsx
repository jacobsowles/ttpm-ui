import React from 'React';
import Logo from './logo';

require('./light-logo.scss');

class Light extends React.Component {
    render() {
        return (
            <Logo className="light" />
        );
    }
}

export default Light;
