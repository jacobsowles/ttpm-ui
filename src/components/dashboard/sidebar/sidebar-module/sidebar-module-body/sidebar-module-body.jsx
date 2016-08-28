// npm modules
import React from 'React';

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
