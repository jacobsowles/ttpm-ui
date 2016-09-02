// npm modules
import React from 'React';

// styles
require('./sidebar-module-body.scss');

class SidebarModuleBody extends React.Component {
    render() {
        return (
            <div className="sidebar-module-body">
                {this.props.children}
            </div>
        );
    }
}

export default SidebarModuleBody;
