// npm modules
import React from 'React';

// components
import SidebarModuleBody from './sidebar-module-body/sidebar-module-body.jsx';
import SidebarModuleHeader from './sidebar-module-header/sidebar-module-header.jsx';

class SidebarModule extends React.Component {
    render() {
        return (
            <div className="sidebar-module">
                <SidebarModuleHeader title={this.props.title} />
                <SidebarModuleBody>
                    {this.props.children}
                </SidebarModuleBody>
            </div>
        );
    }
}

SidebarModule.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default SidebarModule;
