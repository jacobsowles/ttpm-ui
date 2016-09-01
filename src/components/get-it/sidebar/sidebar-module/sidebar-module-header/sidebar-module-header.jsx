// npm modules
import React from 'React';

class SidebarModuleHeader extends React.Component {
    render() {
        return (
            <div className="sidebar-module-header">
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

SidebarModuleHeader.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default SidebarModuleHeader;
