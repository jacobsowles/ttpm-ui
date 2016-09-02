// npm modules
import React from 'React';

// styles
require('./sidebar.scss');

class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
                {this.props.children}
            </div>
        );
    }
}

export default Sidebar;
