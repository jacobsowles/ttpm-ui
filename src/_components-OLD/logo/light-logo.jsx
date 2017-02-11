import React from 'React';
import Logo from './logo';

class Light extends React.Component {
    render() {
        return (
            <Logo
                theme="light"
                {...this.props}
            />
        );
    }
}

export default Light;
