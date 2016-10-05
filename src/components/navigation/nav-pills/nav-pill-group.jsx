import React from 'react';

class NavPillGroup extends React.Component {

    render() {
        return (
            <ul className="nav nav-pills">
                 {this.props.children}
            </ul>
        );
    }
}

export default NavPillGroup;
