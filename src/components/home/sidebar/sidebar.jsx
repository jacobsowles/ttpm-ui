// npm modules
import React from 'React';

// styles
require('./sidebar.scss');

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                {this.props.children}
            </div>
        );
    }
}

export default Sidebar;
